const QRCode = require('qrcode');


// URL inside QR code
const url = 'https://skawsh.org/app';


// Generate QR image
QRCode.toFile(

  'skawsh-qr.png',

  url,

  {
    width: 400
  },

  function (err) {

    if (err) {
      console.log(err);
      return;
    }

    console.log('QR Code Generated Successfully!');
  }

);