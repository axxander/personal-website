const app = require('./app');

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('underconstruction');
});

app.listen(PORT, () => {
  console.log(`localhost:${PORT}`);
});
