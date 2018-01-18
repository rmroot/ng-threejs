const express = require('express');
var path = require('path');
const app = express();
app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,'index.html')
  )
})
const port = process.env.SERVER_PORT || '3000';
app.listen(port, () => console.log(`API running on localhost:${port}`));