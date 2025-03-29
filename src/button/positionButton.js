export function positionButtonNearElement(button, element) {
    if (!element || !button) return;

    const selection = window.getSelection();
    if (!selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    const rect = range.getClientRects()[0];
    if (!rect) return;

    if (button.parentElement !== document.body) {
        document.body.appendChild(button);
    }

    Object.assign(button.style, {
        position: 'fixed',
        top: `${rect.bottom + 6}px`,
        left: `${rect.right + 6}px`,
        zIndex: '99999',
        transform: 'none',
        margin: '0',
        padding: '0'
    });
}
