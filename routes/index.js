var express = require('express');
var router = express.Router();

const mainController = require('../controllers/mainController');
const loginMiddleware = require('../middlewares/loginMiddleware');
const userLoggedMiddleware = require('../middlewares/userLoggedMiddleware');
const uploadFile = require('../middlewares/multerMiddleware');
const validationsRegister = require('../middlewares/validationsRegisterMiddleware');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//página formulario de registro
router.get('/register', mainController.register);


//procesamiento de registro
router.post('/register', uploadFile.single('avatar'), validationsRegister, userLoggedMiddleware, mainController.processRegister);

//Para ver todos los usuarios
router.get('/usuarios', mainController.usuarios);

//pagina formulario de login
router.get('/login', mainController.login);

//procesamiento login
//router.post('/login', mainController.processLogin);

module.exports = router;
