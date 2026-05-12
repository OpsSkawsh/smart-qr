const QRCode = require('qrcode');


// URL inside QR code
const url = 'http://localhost:3000/app';


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