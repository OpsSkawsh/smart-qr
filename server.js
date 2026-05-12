const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;


// Android Play Store URL
const PLAYSTORE_URL =
  'https://play.google.com/store/apps/details?id=com.skawsh.user';


// Apple App Store URL
const APPSTORE_URL =
  'https://apps.apple.com/in/app/skawsh/id6757456162';


// Website URL
const WEBSITE_URL =
  'https://www.skawsh.com';


// Home Route
app.get('/', (req, res) => {
  res.send('Skawsh Smart QR Service Running');
});


// QR Route
app.get('/app', (req, res) => {

  // Detect device
  const userAgent = req.headers['user-agent'] || '';

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


// Fallback Route
app.use((req, res) => {
  res.status(404).send('Route Not Found');
});


// Start server
app.listen(PORT, () => {

  console.log(`Server Running On Port ${PORT}`);

});