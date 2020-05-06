const express = require('express')
const app = express()
const uploadHandler = require('./uploadHandler')

app.set('port', process.env.PORT || 3000)
app.use(express.static('./client/static'))
app.use(express.static('./node_modules/dropzone/dist/min'))

uploadHandler(app)

module.exports = app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'))
})
