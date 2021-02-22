
const db = require('../models');

module.exports = (app) => {
  app.get('/api/owners', (req, res) => {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Owner.findAll({
      include: [db.OwnerPost],
    }).then((dbOwner) => res.json(dbOwner));
  });

  app.get('/api/owners/:id', (req, res) => {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Owner.findOne({
      where: {
        id: req.params.id,
      },
      include: [db.OwnerPost],
    }).then((dbOwner) => res.json(dbOwner));
  });

  app.post('/api/owners', (req, res) => {
    db.Owner.create(req.body).then((dbOwner) => res.json(dbOwner));
  });

  app.delete('/api/owners/:id', (req, res) => {
    db.Owner.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbOwner) => res.json(dbOwner));
  });
};
