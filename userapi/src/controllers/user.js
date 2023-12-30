const db = require('../dbClient');

module.exports = {
  // Créer un utilisateur
  create: (user, callback) => {
    if (!user.username)
      return callback(new Error("Wrong user parameters"), null);

    const userObj = {
      firstname: user.firstname,
      lastname: user.lastname,
    };

    db.hgetall(user.username, (err, res) => {
      if (err) return callback(err, null);
      if (!res) {
        db.hmset(user.username, userObj, (err, res) => {
          if (err) return callback(err, null);
          callback(null, res);
        });
      } else {
        callback(new Error("User already exists"), null);
      }
    });
  },

  // Obtenir un utilisateur
  get: (username, callback) => {
    if (!username)
      return callback(new Error("Username must be provided"), null);

    db.hgetall(username, (err, res) => {
      if (err) return callback(err, null);
      if (res)
        callback(null, res);
      else
        callback(new Error("User doesn't exist"), null);
    });
  },

  // Mettre à jour un utilisateur
  update: (oldUsername, newData, callback) => {
    if (!oldUsername) return callback(new Error("Old username must be provided"), null);

    db.hgetall(oldUsername, (err, existingUser) => {
      if (err) return callback(err, null);
      if (!existingUser) return callback(new Error("User doesn't exist"), null);

      // Fusionner les données existantes avec les nouvelles données
      const updatedData = { ...existingUser, ...newData };

      // Gérer la mise à jour ou le changement de username
      const newUsername = newData.newUsername || oldUsername;

      if (newUsername !== oldUsername) {
        // Créer une nouvelle entrée avec le newUsername et supprimer l'ancienne
        db.hmset(newUsername, updatedData, (err, res) => {
          if (err) return callback(err, null);
          db.del(oldUsername, (delErr, delRes) => {
            if (delErr) return callback(delErr, null);
            callback(null, res);
          });
        });
      } else {
        // Mise à jour de l'utilisateur sans changer le username
        db.hmset(oldUsername, updatedData, (err, res) => {
          if (err) return callback(err, null);
          callback(null, res);
        });
      }
    });
  },



  // Supprimer un utilisateur
  delete: (username, callback) => {
    if (!username) return callback(new Error("Username must be provided"), null);

    db.hgetall(username, (err, res) => {
      if (err) return callback(err, null);
      if (!res) return callback(new Error("User doesn't exist"), null);

      db.del(username, (err, res) => {
        if (err) return callback(err, null);
        callback(null, res);
      });
    });
  }
};
