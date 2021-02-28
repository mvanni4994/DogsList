const User = require('../models/user');

const jwt = require('jsonwebtoken');
const config = require('../config');

exports.getUser = function(req, res) {
        const requestedUserId = req.params.id;
        const user = res.locals.user;

        if (requestedUserId === user.id) {
            User.findById(requestedUserId, function(err, foundUser) {
                if (err) {
                    return res.status(422).send({ errors: normalizeErrors(err.errors) });
                }

                return res.json(foundUser);
            })













            exports.authMiddleware = function(req, res, next) {
                const token = req.headers.authorization;

                if (token) {
                    const user = parseToken(token);

                    User.findById(user.userId, function(err, user) {
                        if (err) {
                            return res.status(422).send({ errors: normalizeErrors(err.errors) });
                        }

                        if (user) {
                            res.locals.user = user;
                            next();
                        } else {
                            return notAuthorized(res);
                        }
                    })
                } else {
                    return notAuthorized(res);
                }
            }

            function parseToken(token) {
                return jwt.verify(token.split(' ')[1], config.SECRET);