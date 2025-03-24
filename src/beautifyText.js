import { getLastEditableElement } from "./focusTracker.js";

export async function insertHelloAndLogContent() {
    const promptDiv = getLastEditableElement();
    if (!promptDiv) {
        console.log("No previously focused editable element found.");
        return;
    }

    const text = promptDiv.innerText || promptDiv.value || '';
    console.log(`Extracted text: ${text}`);

    let beautifiedPrompt = "";

    try {
        const response = await fetch("https://api.openai.com/v1/responses", {
            method: "POST",
            headers: {
                "Authorization": "TOKEN",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "gpt-4o",
                input: "Beautify the following text and make it a better prompt: " + text,
            })
        });

        const data = await response.json();
        beautifiedPrompt = data.output?.[0]?.content?.[0]?.text || '';
        console.log("Beautified text:", beautifiedPrompt);
    } catch (err) {
        console.error("Error fetching from OpenAI:", err);
    }

    if (promptDiv.tagName === 'TEXTAREA' || promptDiv.tagName === 'INPUT') {
        promptDiv.value = beautifiedPrompt;
    } else if (promptDiv.isContentEditable) {
        promptDiv.innerText = beautifiedPrompt;
    }
}
