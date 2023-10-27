function encrypt() {
    const inputText = document.getElementById('inputText').value;
    // Perform encryption here (you can use a JavaScript encryption library)
    // Replace the next line with actual encryption logic
    const encryptedText = btoa(inputText);
    document.getElementById('encryptedText').textContent = encryptedText;
}

function decrypt() {
    const encryptedText = document.getElementById('encryptedText').textContent;
    // Perform decryption here (you can use a JavaScript decryption library)
    // Replace the next line with actual decryption logic
    const decryptedText = atob(encryptedText);
    document.getElementById('decryptedText').textContent = decryptedText;
}
