const app = require('./app');

const PORT = process.env.PORT || 3000;

// expose server
app.listen(PORT, () => {
  console.log(`localhost:${PORT}`);
});
