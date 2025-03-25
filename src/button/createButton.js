import {insertHelloAndLogContent} from "../beautifyText.js";

export function createButton() {
    let existingButton = document.querySelector("#insert-btn");
    if (existingButton) existingButton.remove();

    let button = document.createElement("div");
    button.id = "insert-btn";

    button.innerHTML = `<img src="${chrome.runtime.getURL('img.png')}" alt="Beautify" style="width: 24px; height: 24px;" />`;

    // Modify styles to use absolute positioning
    Object.assign(button.style, {
        position: "absolute",
        width: "28px",
        height: "28px",
        padding: "0",
        background: "white",
        border: "2px solid #e0e0e0",
        borderRadius: "50%",
        cursor: "pointer",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s ease",
        zIndex: "10"
    });

    // Hover effect
    button.onmouseover = () => {
        button.style.transform = "translate(50%, -50%) scale(1.1)";
    };
    button.onmouseout = () => {
        button.style.transform = "translate(50%, -50%)";
    };

    button.addEventListener('click', async (event) => {
        event.stopPropagation();
        await insertHelloAndLogContent();
    });

    return button;
}