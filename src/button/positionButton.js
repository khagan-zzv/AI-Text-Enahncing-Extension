export function positionButtonNearElement(button, element) {
    if (!element || !button) return;

    const rect = element.getBoundingClientRect();
    const topPos = rect.top + window.scrollY + rect.height / 2 - 15;
    const leftPos = rect.right + window.scrollX + 10;

    button.style.top = `${topPos}px`;
    button.style.left = `${leftPos}px`;
}
