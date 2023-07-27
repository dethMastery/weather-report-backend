function page(app, root) {
  app.get('/', (req, res) => {
    res.send('server spawned');
  })
}

module.exports = page