(() => {
    const rail = document.getElementById("workRail");
    const dotsWrap = document.getElementById("workDots");
    const prev = document.querySelector(".work-prev");
    const next = document.querySelector(".work-next");
    if (!rail || !dotsWrap) return;

    // TARGET THE NEW MINIMALIST CARDS
    const cards = Array.from(rail.querySelectorAll(".work-card-minimal"));

    // If no cards found, exit to avoid errors
    if (cards.length === 0) return;

    const dots = cards.map((_, i) => {
        const b = document.createElement("button");
        b.className = "work-dot" + (i === 0 ? " is-active" : "");
        b.type = "button";
        b.ariaLabel = `Go to slide ${i + 1}`;
        b.addEventListener("click", () => cards[i].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" }));
        dotsWrap.appendChild(b);
        return b;
    });

    const getActiveIndex = () => {
        const railRect = rail.getBoundingClientRect();
        const center = railRect.left + railRect.width / 2;
        let best = 0;
        let bestDist = Infinity;
        cards.forEach((c, i) => {
            const r = c.getBoundingClientRect();
            const cCenter = r.left + r.width / 2;
            const d = Math.abs(center - cCenter);
            if (d < bestDist) { bestDist = d; best = i; }
        });
        return best;
    };

    const setActive = (i) => {
        dots.forEach((d, idx) => d.classList.toggle("is-active", idx === i));
    };

    let raf = null;
    rail.addEventListener("scroll", () => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => setActive(getActiveIndex()));
    }, { passive: true });

    const scrollByCard = (dir) => {
        const i = getActiveIndex();
        const nextIndex = Math.max(0, Math.min(cards.length - 1, i + dir));
        cards[nextIndex].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    };

    // Logic for arrows (if they exist)
    if (prev) prev.addEventListener("click", () => scrollByCard(-1));
    if (next) next.addEventListener("click", () => scrollByCard(1));
})();
