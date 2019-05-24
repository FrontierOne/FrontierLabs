var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/index', function(req, res, next) {
//   res.render('index', { title: 'Index' })
// });

// router.get('/about', function(req, res, next) {
//     res.render('about', { title: 'About' })
// });

// router.get('/blog-single', function(req, res, next) {
//   res.render('blog-single', { title: 'BlogSingle' })
// });

// router.get('/blog', function(req, res, next) {
//   res.render('blog', { title: 'Blog' })
// });

// router.get('/contact', function(req, res, next) {
//   res.render('contact', { title: 'Contact' })
// });

// router.get('/error', function(req, res, next) {
//   res.render('error', { title: 'Error' })
// });

// router.get('/index-2', function(req, res, next) {
//   res.render('index-2', { title: 'Index2' })
// });

// router.get('/index-3', function(req, res, next) {
//   res.render('index-3', { title: 'Index3' })
// });

// router.get('/layout', function(req, res, next) {
//   res.render('layout', { title: 'Layout' })
// });

// router.get('/pricing', function(req, res, next) {
//   res.render('pricing', { title: 'Pricing' })
// });

// router.get('/service', function(req, res, next) {
//   res.render('service', { title: 'Service' })
// });

module.exports = router;