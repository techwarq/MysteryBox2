// script.js

function generateQRCode() {
    // Get the message from the textarea
    const message = document.getElementById('messageInput').value;

    // Check if the message is not empty
    if (message.trim() !== '') {
        // Construct the URL for the message.html page
        const url = `https://techwarq.github.io/MysteryBox2/message.html?messageInput=${encodeURIComponent(message)}`;

        // Create a new QRCode instance
        const qrcode = new QRCode(document.getElementById('qrCodeBox'), {
            text: url, // Use the URL for the QR code
            width: 128,
            height: 128,
            colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
        });
        qrcode.makeCode(url);
        // Show the QR code
        document.getElementById('qrCodeBox').style.display = 'block';
        document.querySelector('.promo textarea').style.display = 'none';
        document.querySelector('.submit').style.display = 'none';
    } else {
        // Display an alert if the message is empty
        alert('Please enter a message before submitting.');
    }
}

