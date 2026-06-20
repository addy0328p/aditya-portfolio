const ngrok = require('ngrok');

(async function() {
  try {
    const url = await ngrok.connect({
      addr: 5173,
      authtoken: '3EYKB89cHVN6Ids4NEowb6ncfpd_2LGyV1bUBmR7txReVafMd'
    });
    console.log('Tunnel URL:', url);
  } catch (error) {
    console.error('Error starting ngrok:', error);
  }
})();
