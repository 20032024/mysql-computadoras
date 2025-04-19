const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Welcome'));

router.post('/computers', controllers.createComputers);
router.get('/computers', controllers.getAllComputers);
router.put('/computers/:id', controllers.updateComputer);
router.delete('/computers/:id', controllers.deleteComputer);

module.exports = router;
