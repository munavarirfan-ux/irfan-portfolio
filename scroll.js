(function () {
    const page = document.getElementById("page");
    const heroSection = document.getElementById("hero");
    const workSection = document.getElementById("work");
    const cue = document.getElementById("scrollCue");

    if (!page || !heroSection || !workSection) return;

    // Hero Entrance on Load
    window.addEventListener("load", () => {
        const heroElements = document.querySelectorAll(".hero-enter, .hero-enter-3");
        heroElements.forEach(el => el.classList.add("is-in"));

        // Typewriter Logic with Ghost Element for Stability
        const title = document.querySelector(".hero-title");
        if (title) {
            // 1. Clone the title to create a ghost (layout holder)
            const ghost = title.cloneNode(true);
            ghost.classList.add("ghost");
            ghost.classList.remove("hero-enter-2"); // Don't animate entrance again

            // Insert ghost before real title
            title.parentNode.insertBefore(ghost, title);

            // 2. Prepare real title
            title.classList.add("real");

            // 3. Process spans in real title
            const spans = title.querySelectorAll("span");
            const originalTexts = Array.from(spans).map(s => s.textContent);

            // Clear text initially
            spans.forEach(s => s.textContent = "");

            // Reveal title container now that text is cleared (it was opacity 0 from hero-enter-2)
            title.classList.add("is-in");

            // 4. Type out
            let globalIndex = 0;
            let currentSpanIndex = 0;
            let currentCharIndex = 0;

            function typeNextChar() {
                if (currentSpanIndex >= spans.length) {
                    // Done
                    // Add cursor at end
                    const cursor = document.createElement("span");
                    cursor.className = "typewriter-cursor";
                    title.appendChild(cursor);
                    return;
                }

                const span = spans[currentSpanIndex];
                const text = originalTexts[currentSpanIndex];

                if (currentCharIndex < text.length) {
                    span.textContent += text[currentCharIndex];
                    currentCharIndex++;
                    setTimeout(typeNextChar, 45); // Fixed smooth speed
                } else {
                    // Move to next span (Next word/segment)
                    currentSpanIndex++;
                    currentCharIndex = 0;

                    // Pause slightly between words for natural rhythm
                    setTimeout(typeNextChar, 60);
                }
            }

            // Start typing
            setTimeout(typeNextChar, 300);
        }
    });

    // Click cue -> smooth scroll to work
    cue?.addEventListener("click", () => {
        workSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    // Hero leave styling based on scroll progress
    function onScroll() {
        const heroHeight = heroSection.offsetHeight || window.innerHeight;
        const y = page.scrollTop;
        const progress = Math.min(1, Math.max(0, y / heroHeight));

        if (progress > 0.06) heroSection.classList.add("is-leaving");
        else heroSection.classList.remove("is-leaving");
    }

    page.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Reveal items when section enters
    const claritySection = document.getElementById("clarity");
    const philosophySection = document.getElementById("philosophy");

    const revealTargets = [
        ...workSection.querySelectorAll(".reveal"),
        ...workSection.querySelectorAll(".work-rail"),
        /* New Sections Targets */
        ...(claritySection ? claritySection.querySelectorAll(".clarity-head, .clarity-item") : []),
        ...(philosophySection ? philosophySection.querySelectorAll(".philosophy-head, .sticky-note") : []),
    ];

    const io = new IntersectionObserver(
        (entries) => {
            entries.forEach((e) => {
                if (!e.isIntersecting) return;

                // Stagger cards slightly
                const parentClass = e.target.parentElement?.className;
                if (parentClass && (parentClass.includes("clarity-list") || parentClass.includes("philosophy-board"))) {
                    // Simple stagger based on child index is harder here without strict structure, 
                    // but we can just use a default small delay or rely on CSS order if we want.
                    // For now, let's just let them pop in or basic stagger if clear.
                    e.target.style.transitionDelay = "100ms";
                } else {
                    e.target.style.transitionDelay = "0ms";
                }

                e.target.classList.add("in");
                io.unobserve(e.target);
            });
        },
        { root: page, threshold: 0.1 }
    );

    revealTargets.forEach((t) => io.observe(t));

    // Wheel-to-snap logic REMOVED to fix scroll locking
    /*
    let isSnapping = false;
    page.addEventListener(
        "wheel",
        (e) => {
            if (isSnapping) return;
            const atTop = page.scrollTop < 10;
            const goingDown = e.deltaY > 0;

            if (atTop && goingDown) {
                isSnapping = true;
                workSection.scrollIntoView({ behavior: "smooth", block: "start" });
                setTimeout(() => (isSnapping = false), 800);
            }
        },
        { passive: true }
    );
    */
})();
