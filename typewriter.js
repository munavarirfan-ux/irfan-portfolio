/**
 * Typewriter Effect for Hero Headline
 * Emulates the React Typewriter component in Vanilla JS
 * 
 * Features:
 * - Types text character by character
 * - Blinking cursor
 * - Configurable loop (currently set to false)
 */

document.addEventListener('DOMContentLoaded', () => {
    const element = document.querySelector('.hero-title');
    if (!element) return;

    // Configuration
    const config = {
        text: element.innerText.trim(), // Get initial text
        speed: 80,
        delay: 2000,
        loop: false, // Set to false to run only once on entrance
        cursor: '|'
    };

    // Clean up initial content
    element.innerText = '';

    // Create text node and cursor
    const textNode = document.createTextNode('');
    const cursorSpan = document.createElement('span');
    cursorSpan.className = 'typewriter-cursor';
    cursorSpan.textContent = config.cursor;

    element.appendChild(textNode);
    element.appendChild(cursorSpan);

    // State
    let charIndex = 0;
    const fullText = config.text;

    function type() {
        if (charIndex < fullText.length) {
            charIndex++;
            textNode.textContent = fullText.substring(0, charIndex);
            setTimeout(type, config.speed);
        } else {
            // Animation complete
            if (config.loop) {
                setTimeout(() => {
                    // Logic for deleting could go here if proper looping was needed
                    // But for now we just want it to stop.
                }, config.delay);
            }
            // If not looping, we just stop here.
            // Trigger subtitle fade-in
            const subtitle = document.querySelector('.hero .subtitle');
            if (subtitle) {
                subtitle.classList.add('visible');
            }
        }
    }

    // Start typing after a short delay to match entrance animations
    setTimeout(type, 500);
});
