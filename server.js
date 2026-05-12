const express = require('express');

const app = express();

const PORT = 3000;


// Android Play Store URL
const PLAYSTORE_URL =
  'https://play.google.com/store/apps/details?id=com.skawsh.app';


// Apple App Store URL
const APPSTORE_URL =
  'https://apps.apple.com/in/app/skawsh/id1234567890';


// Website URL
const WEBSITE_URL =
  'https://skawsh.com';



// QR Route
app.get('/app', (req, res) => {

  // Detect device
  const userAgent = req.headers['user-agent'];

  console.log('Device:', userAgent);

  
  // Android users
  if (/android/i.test(userAgent)) {
    return res.redirect(PLAYSTORE_URL);
  }


  // iPhone users
  if (/iPhone|iPad|iPod/i.test(userAgent)) {
    return res.redirect(APPSTORE_URL);
  }


  // Desktop users
  return res.redirect(WEBSITE_URL);

});



// Start server
app.listen(PORT, () => {

  console.log(`Server Running On Port ${PORT}`);

});