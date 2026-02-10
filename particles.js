const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

let particles = [];

// Field Params
const MOUSE_RADIUS = 300; // Large influence area for "lensing"
const DAMPING = 0.92; // High viscosity
const MAX_DISPLACEMENT = 80; // Max distance a particle can be stretched

let mouse = {
    x: undefined,
    y: undefined
};

window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});

window.addEventListener('mouseout', () => {
    mouse.x = undefined;
    mouse.y = undefined;
});

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
}

class Node {
    constructor(anchorX, anchorY, stability) {
        this.anchorX = anchorX;
        this.anchorY = anchorY;
        this.x = anchorX;
        this.y = anchorY;
        this.vx = 0;
        this.vy = 0;
        this.stability = stability; // 0.0 (edge) to 1.0 (center)

        // Physics derived from stability
        // Center = Stiffer Spring (Calm, Ordered)
        // Edge = Looser Spring (More reactive)
        this.springStiffness = 0.02 + (this.stability * 0.03);

        // Visuals
        this.type = Math.random() > 0.6 ? 'capsule' : 'dot';

        // Size: Center = Larger/Clearer. Edge = Smaller.
        // Tiny particles requested
        const baseSize = (this.stability * 2) + 1.5; // 1.5px to 3.5px base (was 4-10)
        const sizeVar = Math.random() * 1.5;
        this.width = baseSize + sizeVar;

        if (this.type === 'capsule') {
            this.height = Math.random() * 2 + 1.5; // Tiny capsules (was 4-8)
            // Align horizontal initially
            this.angle = 0;
        } else {
            this.height = this.width; // Dot
        }

        // Color
        // Center particles have higher chance of being accents
        // Edges are mostly fade out
        const distFromCenter = 1 - this.stability;

        // Very rare accents
        const isAccent = Math.random() > 0.92;
        if (isAccent) {
            const hue = Math.random() > 0.5 ? 210 : (Math.random() > 0.5 ? 260 : 320); // Gemini
            this.color = `hsla(${hue}, 50%, 60%, ${0.3 + this.stability * 0.3})`;
        } else {
            // Off-white
            // Opacity fades at edges
            const alpha = 0.1 + (this.stability * 0.15);
            this.color = `hsla(220, 10%, 85%, ${alpha})`;
        }
    }

    update() {
        // 1. Spring Force (Tether to Anchor)
        const springDx = this.anchorX - this.x;
        const springDy = this.anchorY - this.y;

        this.vx += springDx * this.springStiffness;
        this.vy += springDy * this.springStiffness;

        // 2. Interaction (Lensing / Distortion)
        if (mouse.x !== undefined) {
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < MOUSE_RADIUS) {
                // "Lens" effect: Push gently away from cursor, creating a bubble/magnification feel
                // Force falls off with distance
                const force = (1 - dist / MOUSE_RADIUS);
                // Smooth ease out
                const smoothForce = force * force;

                const angle = Math.atan2(dy, dx);
                const push = smoothForce * -2; // Negative = Repel/Push away to create "lens" bubble

                this.vx += Math.cos(angle) * push;
                this.vy += Math.sin(angle) * push;
            }
        }

        // Limit Displacement (keep structure integrity)
        // If particle is too far from anchor, pull it back harder? 
        // Or clamp? Clamp feels artificial. Let spring handle it.

        // 3. Damping (Viscosity)
        this.vx *= DAMPING;
        this.vy *= DAMPING;

        // Update
        this.x += this.vx;
        this.y += this.vy;
    }

    draw() {
        // Create the Apple Intelligence Gradient for the whole canvas
        // This is efficient because we create it once per frame usually,
        // but here we can create it per particle or just set it once globally in animate?
        // Actually, setting it per particle based on canvas coordinates is easiest logic:
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop(0, '#0aa2ff');
        gradient.addColorStop(0.18, '#5b7cff');
        gradient.addColorStop(0.36, '#a86bff');
        gradient.addColorStop(0.56, '#ff5bbd');
        gradient.addColorStop(0.74, '#ff6a4a');
        gradient.addColorStop(1, '#ffb11a');

        ctx.fillStyle = gradient;

        // Note: When fillStyle is a gradient defined by coords (0 to width),
        // filling a shape at (x,y) automatically samples the gradient at that (x,y).
        // So we don't need complex logic, just set the gradient!

        // Adjust global alpha for the brightness/fading
        // We stored alpha in this.color previously, but now we use gradient.
        // So we need to use ctx.globalAlpha.

        // Recover alpha from stability logic (re-calculating simply)
        // Center = higher alpha, Edge = lower
        const baseAlpha = 0.3 + (this.stability * 0.4); // Brighter: 0.3 to 0.7 (was 0.1 to 0.25)
        ctx.globalAlpha = baseAlpha;

        if (this.type === 'capsule') {
            ctx.beginPath();
            if (ctx.roundRect) {
                ctx.roundRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height, [50]);
            } else {
                ctx.rect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
            }
            ctx.fill();
        } else {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.width / 2, 0, Math.PI * 2);
            ctx.fill();
        }

        // Reset alpha
        ctx.globalAlpha = 1.0;
    }
}

function init() {
    particles = [];

    // Structured Grid with Noise
    // Focusing density in the center

    // Grid Spacing
    const cols = Math.floor(canvas.width / 50);
    const rows = Math.floor(canvas.height / 50);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const maxDist = Math.sqrt(centerX * centerX + centerY * centerY);

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            // Base Grid Position
            const x = (c * 50) + (Math.random() * 20 - 10); // Slight jitter
            const y = (r * 50) + (Math.random() * 20 - 10);

            // Calculate Stability/Centrality
            const dx = x - centerX;
            const dy = y - centerY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const stability = 1 - Math.min(dist / (maxDist * 0.8), 1);

            // Probability of existence
            // Edge particles are less likely to exist
            const existenceChance = stability * 0.8 + 0.2; // Always some chance

            if (Math.random() < existenceChance) {
                particles.push(new Node(x, y, stability));
            }
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Visualizing the Field: 
    // Maybe very faint connections? No, user said "low particle count".
    // Just particles.

    particles.forEach(p => {
        p.update();
        p.draw();
    });

    requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
    // Debounce
    clearTimeout(window.resizeTimer);
    window.resizeTimer = setTimeout(resize, 100);
});

resize();
animate();
