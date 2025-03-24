export function findInputElement() {
    const active = document.activeElement;
    if (
        active?.tagName === "TEXTAREA" ||
        active?.tagName === "INPUT" ||
        active?.isContentEditable
    ) {
        return active;
    }
    return null;
}

export function removeButton() {
    const button = document.querySelector("#insert-btn");
    if (button) button.remove();
}
