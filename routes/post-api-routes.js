// Dependencies

// Requiring our models
const db = require('../models');

// Routes
module.exports = (app) => {
  app.get('/api/ownerposts', (req, res) => {
    const query = {};
    if (req.query.owner_id) {
      query.OwnerId = req.query.owner_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.OwnerPost.findAll({
      where: query,
      include: [db.Owner],
    }).then((dbOwnerPost) => res.json(dbOwnerPost));
  });

  // Get route for retrieving a single post
  app.get('/api/ownerposts/:id', (req, res) => {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.OwnerPost.findOne({
      where: {
        id: req.params.id,
      },
      include: [db.Owner],
    }).then((dbOwnerPost) => res.json(dbOwnerPost));
  });

  // POST route for saving a new post
  app.post('/api/ownerposts', (req, res) => {
    db.OwnerPost.create(req.body).then((dbOwnerPost) => res.json(dbOwnerPost));
  });

  // DELETE route for deleting posts
  app.delete('/api/ownerposts/:id', (req, res) => {
    db.OwnerPost.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbOwnerPost) => res.json(dbOwnerPost));
  });

  // PUT route for updating posts
  app.put('/api/ownerposts', (req, res) => {
    db.OwnerPost.update(req.body, {
      where: {
        id: req.body.id,
      },
    }).then((dbOwnerPost) => res.json(dbOwnerPost));
  });
};
