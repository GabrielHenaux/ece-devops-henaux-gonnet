const db = require('../dbClient')

module.exports = {
  create: (user, callback) => {
    // Check parameters
    if(!user.username  || !user.firstname || !user.lastname)
      console.log("Wrong user parameters")
      return callback(new Error("Wrong user parameters"), null)
    // Create User schema
    const userObj = {
      username: user.username,
      firstname: user.firstname,
      lastname: user.lastname,
    }

    // TODO check if user already exists
    db.hget('username', user.username, (err, res) => {
      if (err) return callback(err, null)
      if (res) return callback(new Error("User already exists"), null)
    })


    // Save to DB
    db.hmset(user.username, userObj, (err, res) => {
      if (err) return callback(err, null)
      callback(null, res) // Return callback
    })

    

  },
  get: (username, callback) => {
    // TODO create this method
    db.hgetall(username, (err, res) => {
      if (err) return callback(err, null)
      if (!res) return callback(new Error("User does not exist"), null)
      callback(null, res)
    })
    
  }
}
