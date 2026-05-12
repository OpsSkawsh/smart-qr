const QRCode = require('qrcode');


// URL inside QR code
const url = 'https://www.skawsh.org';


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