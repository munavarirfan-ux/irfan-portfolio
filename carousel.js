document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector(".carousel-track");
    const cards = document.querySelectorAll(".carousel-card");
    const dots = document.querySelectorAll(".carousel-dot");
    const prevBtn = document.querySelector(".carousel-btn.left");
    const nextBtn = document.querySelector(".carousel-btn.right");

    if (!track || cards.length === 0) return;

    // Helper: Calculate scroll amount (Card width + Gap)
    const scrollByCard = () => {
        const card = cards[0];
        if (!card) return 0;
        const style = window.getComputedStyle(track);
        const gap = parseFloat(style.gap) || 28;
        return card.getBoundingClientRect().width + gap;
    };

    // Update Active State (Dots + Cards)
    const updateState = () => {
        const center = track.scrollLeft + (track.offsetWidth / 2);
        let closeIndex = 0;
        let minDiff = Infinity;

        cards.forEach((card, index) => {
            const cardCenter = card.offsetLeft + (card.offsetWidth / 2);
            const diff = Math.abs(center - cardCenter);
            if (diff < minDiff) {
                minDiff = diff;
                closeIndex = index;
            }
        });

        // Update Dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === closeIndex);
        });

        // Update Cards (for scale/opacity effect)
        cards.forEach((card, index) => {
            card.classList.toggle('active', index === closeIndex);
        });
    };

    // Throttled scroll listener
    let isScrolling;
    track.addEventListener('scroll', () => {
        window.clearTimeout(isScrolling);
        updateState(); // Instant update
        isScrolling = setTimeout(updateState, 66);
    });

    // Navigation Buttons
    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            track.scrollBy({ left: -scrollByCard(), behavior: "smooth" });
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            track.scrollBy({ left: scrollByCard(), behavior: "smooth" });
        });
    }

    // Dot Navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            const targetCard = cards[index];
            const left = targetCard.offsetLeft - (track.offsetWidth / 2) + (targetCard.offsetWidth / 2);
            track.scrollTo({ left, behavior: 'smooth' });
        });
    });

    // Initialize
    updateState();

    // Optional: Center initial card if needed, or let CSS padding handle it
});
