const express = require('express');
const cheerio = require('cheerio');

const app = express();

app.use(express.static('frontend'));

app.get('/api/check-rebate-code/:code', (req, res) => {
  // The code could have been checked against a db 
  // but for now just hardcode the check
  res.json({ ok: req.params.code === '57jklmnpq2' });
});

app.listen(3005, () => console.log('Listening on http://localhost:3005'));

// get image
app.get('/api/image/:search', async (req, res) => {
  let html = await (await (fetch(
    `https://unsplash.com/s/photos/${encodeURIComponent(req.params.search.replaceAll(',', ''))}?license=free`))).text();
  const $ = cheerio.load(html);
  let imgSrc = $('img[src^="https://media.istockphoto.com/"]').attr('src');
  if (!imgSrc) {
    res.send('');
    console.log(req.params.search)
    return;
  }
  const img = await (await fetch(imgSrc)).bytes();
  res.set('content-type', 'image/webp');
  res.send(Buffer.from(img));
});