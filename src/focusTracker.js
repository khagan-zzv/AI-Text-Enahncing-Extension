let lastEditableElement = null;

export function trackFocus() {
    document.addEventListener('focusin', (e) => {
        const el = e.target;
        if (
            el.tagName === 'TEXTAREA' ||
            el.tagName === 'INPUT' ||
            el.isContentEditable
        ) {
            lastEditableElement = el;
        }
    });
}

export function getLastEditableElement() {
    return lastEditableElement;
}
