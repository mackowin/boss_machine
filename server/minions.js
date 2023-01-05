const express = require('express');
const minionsRouter = express.Router();

const {
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
} = require('./db.js');

minionsRouter.param('minionId', (req, res, next, id) => {
    const foundMinion = getFromDatabaseById('minions', id);
    if(foundMinion) {
        req.foundMinion = foundMinion;
        next();
    } else {
        res.status(404).send('Sorry, no minion found');
    }
});

minionsRouter.param('workId', (req, res, next, id) => {
    const foundWork = getFromDatabaseById('work', id);
    if(foundWork) {
        req.foundWork = foundWork;
        next();
    } else {
        res.status(404).send('Sorry, no work item found');
    }
})


minionsRouter.get('/', (req, res, next) => {
    const allMinionsList = getAllFromDatabase('minions');
    res.send(allMinionsList);
});

/* Mine with minions validation -- needed?
minionsRouter.post('/', (req, res, next) => {
    const newMinion = createMinion(req.body);
    if(isValidMinion(newMinion)) {
        addToDatabase('minions', newMinion);
        res.status(201).send(newMinion);
    } else {
        res.status(404).send('Sorry, not a valid minion');
    };
});
*/
minionsRouter.post('/', (req, res, next) => {
    const newMinion = addToDatabase('minions', req.body);
    res.status(201).send(newMinion);
});

minionsRouter.get('/:minionId', (req, res, next) => {
    res.send(req.foundMinion);
});

minionsRouter.put('/:minionId', (req, res, next) => {
    const updatedMinion = updateInstanceInDatabase('minions', req.body)
    res.send(updatedMinion);
});

minionsRouter.delete('/:minionId', (req, res, next) => {
    const deleted = deleteFromDatabasebyId('minions', req.params.minionId);
    if (deleted) {
        res.status(204).send('minion deleted');
    } else {
    res.status(500).send('minion not deleted');
    }
});

// Routes for work
minionsRouter.get('/:minionId/work', (req, res, next) => {
    const workForMinion = getAllFromDatabase('work').filter(workItem => {
        return workItem.minionId === req.params.minionId;
    });
    res.send(workForMinion);
});

minionsRouter.post('/:minionId/work', (req, res, next) => {
    const workToAdd = req.body;
    workToAdd.minionId = req.params.minionId;
    const newWork = addToDatabase('work', workToAdd);
    res.status(201).send(newWork);
});

minionsRouter.put('/:minionId/work/:workId', (req, res, next) => {
    if(req.body.minionId === req.params.minionId) {
        const workToUpdate = req.body;
        const updatedWork = updateInstanceInDatabase('work', workToUpdate)
        res.send(updatedWork);
    } else {
        res.status(400).send('Sorry, work was not updated');
    }
});

minionsRouter.delete('/:minionId/work/:workId', (req, res, next) => {
    const deleted = deleteFromDatabasebyId('work', req.params.workId);
    if (deleted) {
        res.status(204).send('work deleted');
    } else {
        res.status(500).send('work not deleted');
    }
});


module.exports = minionsRouter;
