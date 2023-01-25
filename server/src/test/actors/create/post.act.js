const Actor = require('../../../api/models/actors.model');

const postOne = async (req, res, next) => {
  try {
    const actor = new Actor();
    actor.name = req.body.name;
    actor.age = req.body.age;
    if (req.file) actor.img = req.file.path;
    console.log(actor);
    const actorDB = await actor.save();
    res.status(201).json(actorDB);
  } catch (error) {
    return next(setError(404, 'Not possible to create actor in DB'));
  }
};

module.exports = postOne;
