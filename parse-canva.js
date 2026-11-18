const https = require('https');
https.get('https://lupinxiv.my.canva.site/contact-lester', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const marker = "window['bootstrap'] = JSON.parse('";
    const start = data.indexOf(marker) + marker.length;
    let end = data.indexOf("');", start);
    let str = data.substring(start, end);
    // replace unicode escapes or escaped quotes
    let parsedJsonString = str.replace(/\\'/g, "'").replace(/\\\\/g, "\\");
    try {
      const obj = JSON.parse(parsedJsonString);
      // Let's find all text blocks
      function findText(node) {
        if (!node) return;
        if (typeof node === 'string') {
          if (node.length > 2 && !node.startsWith('_') && !node.startsWith('http') && !node.startsWith('#')) {
            console.log(node);
          }
        } else if (Array.isArray(node)) {
          node.forEach(findText);
        } else if (typeof node === 'object') {
          Object.values(node).forEach(findText);
        }
      }
      findText(obj.page);
    } catch (e) {
      console.log('Error:', e.message);
    }
  });
});
