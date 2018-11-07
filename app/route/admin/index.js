var express = require('express')
var router = express.Router()

// router.use('/*', (req, res, next) => {
//   if (req.isAuthenticated()) {
//     next()
//   } else {
//     return res.redirect('/system/login')
//   }
// })

router.get('/*', (req, res, next) => {
  return res.sendFile(global.rootDirectory + '/views/index.html')
})

module.exports = router
