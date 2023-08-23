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
            <a
            id="download-btn"
            href="${qrValue}"
            download
            >
            <button class="text-white cursor-pointer bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Download </button>
          </a>
            `;


        qrInputFieldStr.value = ' ';
    }
}