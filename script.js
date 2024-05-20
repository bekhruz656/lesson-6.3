document.addEventListener('DOMContentLoaded', (event) => {
    const inputText = document.getElementById('inputText');
    const saveButton = document.getElementById('saveButton');
    const outputText = document.getElementById('outputText');

    function displayStoredText() {
        const storedText = localStorage.getItem('savedText');
        if (storedText) {
            textn.textContent = storedText;
        }
    }

    displayStoredText();

    saveButton.addEventListener('click', () => {
        const text = inputText.value;
        localStorage.setItem('savedText', text);
        displayStoredText();
    });
});
