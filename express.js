const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.send('about');
  });

  app.post("/login",(req,res)=>{
    // db query
    res.send("success");
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});