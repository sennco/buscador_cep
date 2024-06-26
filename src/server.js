const express = require('express');
const request = require('request');
const app = express();

app.use('/ws/:cep/json', (req, res) => {
  const cep = req.params.cep;
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  req.pipe(request(url)).pipe(res);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
