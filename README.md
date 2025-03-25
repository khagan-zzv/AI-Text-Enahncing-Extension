# Text Beautifier Chrome Extension

## Overview

Text Beautifier is a Chrome extension that helps users improve their text inputs by automatically enhancing and refining the text using OpenAI's language models.

## Features

- 🚀 One-click text beautification
- 🔍 Works with textareas, input fields, and contenteditable elements
- 💡 Intelligent text enhancement using OpenAI's GPT models

## Installation

### Prerequisites
- OpenAI API Token

### Setup Steps
1. Clone the repository
```bash
git clone https://github.com/khagan-zzv/AI-Text-Enahncing-Extension.git
```

2. Open `src/beautifyText.js` and replace `"TOKEN"` with your OpenAI API token

3. Open Chrome and navigate to `chrome://extensions/`

4. Enable "Developer mode" (top right toggle)

5. Click "Load unpacked" and select the project directory

## How to Use

1. Navigate to any webpage with a text input
2. Start typing in a textarea, input, or contenteditable field
3. When your text is longer than 20 characters, a beautification button will appear
4. Click the button to enhance your text

## Troubleshooting

### Common Issues
- Ensure your OpenAI API token is valid
- Check browser console for detailed error messages
- Verify internet connectivity
- Might not recognize text inputs in certain websites
