const app = require('./app');

const PORT = process.env.PORT || 8080;

// expose server
app.listen(PORT, () => {
  console.log(`localhost:${PORT}`);
});
