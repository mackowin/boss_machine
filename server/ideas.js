const express = require('express');
const ideasRouter = express.Router();
const checkMillionDollarIdea = require('./checkMillionDollarIdea.js')

const {
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
} = require('./db.js')

ideasRouter.param('ideasId', (req, res, next, id) => {
    const foundIdea = getFromDatabaseById('ideas', id);
    if (foundIdea) {
        req.foundIdea = foundIdea;
        next();    
    } else {
        res.status(404).send('Sorry, no idea found');
    }
})

ideasRouter.get('/', (req, res, next) => {
    const allIdeasList = getAllFromDatabase('ideas');
    res.send(allIdeasList);
});

/* Mine with ideas validation -- needed?
ideasRouter.post('/', (req, res, next) => {
    const newIdea = createIdea(req.body);
    if(isValidIdea(newIdea)) {
        addToDatabase('ideas', newIdea);
    };
});
*/

ideasRouter.post('/', checkMillionDollarIdea, (req, res, next) => {
    const newIdea = addToDatabase('ideas', req.body);
    res.status(201).send(newIdea)
});

ideasRouter.get('/:ideasId', (req, res, next) => {
    res.send(req.foundIdea);
});

ideasRouter.put('/:ideasId', checkMillionDollarIdea, (req, res, next) => {
    const updatedIdea = updateInstanceInDatabase('ideas', req.body);
    res.send(updatedIdea);
});

ideasRouter.delete('/:ideasId', (req, res, next) => {
    const deleted = deleteFromDatabasebyId('ideas', req.params.ideasId);
    if (deleted) {
        res.status(204).send('idea deleted');
    } else {
        res.status(500).send('idea not deleted');
    }
});


module.exports = ideasRouter;
