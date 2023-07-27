const color = require('bash-color')

require('dotenv').config()

function serve(app) {
  const port = process.env.port || 1980

  app.listen(port, () => {
    console.log();
    console.log(`Server started @ ${color.cyan(`http://localhost:${port}`)}`);
    console.log();
  })
}

module.exports = serve