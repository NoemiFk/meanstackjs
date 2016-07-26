var user = require('./users.controller.js')
var multer = require('multer')
var upload = multer({ dest: 'client/uploads/' })

module.exports = function (app, auth, mail, settings) {
  // ADMIN
  app.get('/api/users', auth.isAdmin, user.getUsers)
  // USER
  app.post('/api/photos/upload', upload.single('file'), user.postPhoto)
  app.post('/api/authenticate', user.postAuthenticate)
  app.get('/api/authenticate', user.getAuthenticate)
  app.post('/api/login', user.postLogin)
  app.get('/api/logout', user.logout)
  app.get('/api/forgot', user.getForgot)
  app.post('/api/forgot', user.postForgot)
  app.get('/api/reset/:token', user.getReset)
  app.post('/api/reset/:token', user.postReset)
  app.get('/api/signup', user.getSignup)
  app.post('/api/signup', user.postSignup)
  app.get('/api/account', auth.isAuthenticated, user.getAccount)
  app.post('/api/account/profile', auth.isAuthenticated, user.postUpdateProfile)
  app.post('/api/account/password', auth.isAuthenticated, user.postUpdatePassword)
  app.post('/api/account/delete', auth.isAuthenticated, user.postDeleteAccount)
}