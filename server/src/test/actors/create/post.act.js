/* const express = require('express');
const router = express.Router();
const Actor = require('../../../api/models/actors.model');

router.post('/', async (req, res, next) => {
  try {
    const actor = new Actor();
    actor.name = req.body.name;
    actor.age = req.body.age;
    if (req.file) actor.img = req.file.path;
    const actorDB = await actor.save();
    res.status(201).json(actorDB);
  } catch (error) {
    return next('Not possible to create actor in DB');
  }
});

module.exports = router;
 */
