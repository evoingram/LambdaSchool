const Cohorts = require('./model.js');

const router = require('express').Router();

/*
router.get('/', (req, res) => {
	Cohorts.all()
		.then(cohorts => {
			res.status(200).json(cohorts);
		})
		.catch(({ name, message, stack, code }) => {
			console.log({ name, message, stack, code });

			res.status(500).json({ name, message, stack, code });
		});
});
*/

// get list of cohorts
router.get('/cohorts', (req, res) => {
	res.status(201).json({ router: 'cohorts' });
});

// get one cohort
router.get('/cohorts/:cohortsid', (req, res) => {
	const id = req.params.cohortsid;

	Cohorts.getCohort(id)
		.then(cohort => {
			if (cohort) {
				res.json(cohort);
			} else {
				res.status(404).json({ message: 'Could not find cohort with given id.' });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to get cohort' });
		});
});

// create cohort
router.post('/cohorts', (req, res) => {
	const resourceData = req.body;

	Cohorts.addCohort(resourceData)
		.then(cohort => {
			res.status(201).json(cohort);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to create new cohort' });
		});
});

//update cohort

router.put('/cohorts/:cohortsid', (req, res) => {
	const cohortid = req.params.cohortid;
	const cohortName = req.body.cohortname;
	const updatedCohort = { cohortid: cohortid, cohortname: cohortName, cohortdescription: cohortDescription };

	Cohorts.updateCohort(updatedCohort, cohortid)
		.then(cohort => {
			if (cohort) {
				res.json(cohort);
			} else {
				res.status(404).json({ message: 'Could not find cohort with given id' });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to update cohort' });
		});
});

// delete cohort
router.delete('/cohorts/:cohortid', (req, res) => {
	const id = req.params.cohortid;

	Projects.removeCohort(id)
		.then(deleted => {
			if (deleted) {
				res.json({ removed: deleted });
			} else {
				res.status(404).json({ message: 'Could not find cohort with given id' });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to delete cohort' });
		});
});

module.exports = router;
