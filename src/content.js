import { trackFocus } from "./focusTracker.js";
import { createButton } from "./button/createButton.js";
import { positionButtonNearElement } from "./button/positionButton.js";
import { findInputElement, removeButton } from "./utils.js";

function checkTextLength() {
    const inputElement = findInputElement();
    if (!inputElement) {
        removeButton();
        return;
    }

    const length = inputElement.value?.length || inputElement.innerText.length;
    const existingButton = document.querySelector("#insert-btn");

    if (length > 20) {
        if (!existingButton) {
            const newButton = createButton();
            positionButtonNearElement(newButton, inputElement);
        } else {
            positionButtonNearElement(existingButton, inputElement);
        }
    } else {
        removeButton();
    }
}

function setupListeners() {
    window.addEventListener("scroll", () => {
        setTimeout(checkTextLength, 100);
    });

    window.addEventListener("resize", () => {
        setTimeout(checkTextLength, 100);
    });

    let debounce;
    document.addEventListener("input", () => {
        clearTimeout(debounce);
        debounce = setTimeout(checkTextLength, 100);
    }, true);

    ["focusin", "click"].forEach(evt =>
        document.addEventListener(evt, () => {
            setTimeout(checkTextLength, 100);
        })
    );
}

function init() {
    trackFocus();
    setupListeners();

    setTimeout(checkTextLength, 500);
    setTimeout(checkTextLength, 1000);
    setTimeout(checkTextLength, 2000);

    const earlyInterval = setInterval(checkTextLength, 100);
    setTimeout(() => clearInterval(earlyInterval), 10000);

    setInterval(checkTextLength, 500);
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}