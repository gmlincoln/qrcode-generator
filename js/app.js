const qrCodeGeneratorStr = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=';

function generateQrCode() {
    const qrInputFieldStr = document.getElementById('qr-code-field');
    const qrInputFieldValue = qrInputFieldStr.value;
    const qrValue = qrCodeGeneratorStr.concat(qrInputFieldValue);

    if (qrInputFieldValue.trim() === '') {
        alert('Please write something!');
    }
    else {
        const showQr = document.getElementById('show-qr');
        showQr.innerHTML = `
            <p>Your QR Code</p>
            <img src="${qrValue}"/>
            `;
        qrInputFieldStr.value = ' ';
    }
}