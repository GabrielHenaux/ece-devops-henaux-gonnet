const express = require('express');
const userController = require('../controllers/user');

const userRouter = express.Router();

// Créer un utilisateur
userRouter.post('/', (req, resp) => {
  userController.create(req.body, (err, res) => {
    let respObj;
    if (err) {
      respObj = {
        status: "error",
        msg: err.message
      };
      return resp.status(400).json(respObj);
    }
    respObj = {
      status: "success",
      msg: res
    };
    resp.status(201).json(respObj);
  });
});

// Obtenir un utilisateur
userRouter.get('/:username', (req, resp) => {
  const username = req.params.username;
  userController.get(username, (err, res) => {
    let respObj;
    if (err) {
      respObj = {
        status: "error",
        msg: err.message
      };
      return resp.status(400).json(respObj);
    }
    respObj = {
      status: "success",
      msg: res
    };
    resp.status(200).json(respObj);
  });
});

// Mettre à jour un utilisateur
userRouter.put('/:username', (req, resp) => {
  const username = req.params.username;
  userController.update(username, req.body, (err, res) => {
    let respObj;
    if (err) {
      respObj = {
        status: "error",
        msg: err.message
      };
      return resp.status(400).json(respObj);
    }
    respObj = {
      status: "success",
      msg: res
    };
    resp.status(200).json(respObj);
  });
});

// Supprimer un utilisateur
userRouter.delete('/:username', (req, resp) => {
  const username = req.params.username;
  userController.delete(username, (err, res) => {
    let respObj;
    if (err) {
      respObj = {
        status: "error",
        msg: err.message
      };
      return resp.status(400).json(respObj);
    }
    respObj = {
      status: "success",
      msg: res
    };
    resp.status(200).json(respObj);
  });
});

module.exports = userRouter;
