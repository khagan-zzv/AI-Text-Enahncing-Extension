export function positionButtonNearElement(button, element) {
    if (!element || !button) return;

    // Get the parent element
    const parentElement = element.parentElement;

    // Remove the button from body if it's there
    if (button.parentElement === document.body) {
        document.body.removeChild(button);
    }

    // Append button to parent element
    parentElement.appendChild(button);

    // Position the button relative to the parent
    Object.assign(button.style, {
        position: 'absolute',
        top: '0',
        right: '0',
        transform: 'translate(50%, -50%)',
        zIndex: '10',
        margin: '0',
        padding: '0'
    });
}