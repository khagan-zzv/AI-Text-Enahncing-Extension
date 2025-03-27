export function positionButtonNearElement(button, element) {
    if (!element || !button) return;

    const parentElement = element.parentElement;
    if (button.parentElement === document.body) {
        document.body.removeChild(button);
    }

    parentElement.appendChild(button);
    Object.assign(button.style, {
        position: 'absolute',
        top: '10px',
        right: '25px',
        transform: 'translate(50%, -50%)',
        zIndex: '10',
        margin: '0',
        padding: '0'
    });
}