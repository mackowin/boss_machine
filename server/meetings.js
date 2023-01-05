const express = require('express');
const meetingsRouter = express.Router();

const {
  createMeeting,
  getAllFromDatabase,
  addToDatabase,
  deleteAllFromDatabase,
} = require('./db.js')

meetingsRouter.get('/', (req, res, next) => {
    const allMeetingsList = getAllFromDatabase('meetings');
    res.send(allMeetingsList);
});

/* Mine with meetings validation -- needed?
meetingsRouter.post('/', (req, res, next) => {
    const newMeeting = createMeeting();
    if(isValidMeeting(newMeeting)) {
        addToDatabase(meetings, newMeeting);
    };
});
*/

meetingsRouter.post('/', (req, res, next) => {
    const newMeeting = addToDatabase('meetings', createMeeting());
    res.status(201).send(newMeeting);
});

meetingsRouter.delete('/', (req, res, next) => {
    const deleted = deleteAllFromDatabase('meetings')
    if (deleted) {
        res.status(204).send();
    } else {
    res.status(500).send();
    }
});


module.exports = meetingsRouter;
