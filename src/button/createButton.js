import { insertHelloAndLogContent } from "../beautifyText.js";

export function createButton() {
    let existingButton = document.querySelector("#insert-btn");
    if (existingButton) existingButton.remove();

    let button = document.createElement("div");
    button.id = "insert-btn";

    button.innerHTML = `<img src="${chrome.runtime.getURL('img.png')}" alt="Beautify" style="width: 24px; height: 24px;" />`;

// Add styles
    Object.assign(button.style, {
        position: "absolute",
        zIndex: "99999",
        width: "48px",
        height: "48px",
        padding: "0",
        background: "linear-gradient(145deg, #6a11cb, #2575fc)",
        border: "none",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderRadius: "50%",
        cursor: "pointer",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.2s ease-in-out"
    });

// Hover effect
    button.onmouseover = () => {
        button.style.transform = "scale(1.1)";
    };
    button.onmouseout = () => {
        button.style.transform = "scale(1)";
    };


    button.addEventListener('click', async (event) => {
        event.stopPropagation();
        await insertHelloAndLogContent();
    });

    document.body.appendChild(button);
    return button;
}
