const router = require('express').Router();

router.get('/', (req, res) => {
	res.json({ router: 'cohorts' });
});

module.exports = router;
