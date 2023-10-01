const { expect } = require('chai')
const userController = require('../src/controllers/user')
const db = require('../src/dbClient')
const { get } = require('../src/routes/user')
const user = require('../src/controllers/user')

describe('User', () => {

  beforeEach(() => {
    // Clean DB before each test
    db.flushdb()
  })

  describe('Create', () => {

    it('create a new user', (done) => {
      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      }
      userController.create(user, (err, result) => {
        expect(err).to.be.equal(null)
        expect(result).to.be.equal('OK')
        done()
      })
    })

    it('passing wrong user parameters', (done) => {
      const user = {
        firstname: 'Sergei',
        lastname: 'Kudinov'
      }
      userController.create(user, (err, result) => {
        expect(err).to.not.be.equal(null)
        expect(result).to.be.equal(null)
        done()
      })
    })

    it('avoid creating an existing user', (done) => {

      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      }
      userController.create(user, (err, result) => {
        userController.create(user, (err, result) => {
          expect(err).to.not.be.equal(null)
          expect(result).to.be.equal(null)
          done()
        })
        done()
      })
    })


    // Warning: the user already exists

  })

  // TODO Create test for the get method
  describe('Get', () => {

    it('get a user by username', (done) => {
      const newUser = {
        username: 'gabyformula1',
        firstname: 'gaby',
        lastname: 'henaux'
      }

      userController.create(newUser, (err, result) => {
        expect(err).to.be.equal(null)
        expect(result).to.be.equal('OK')
        done()
      })

      userController.get(newUser.username, (err, result) => {
        expect(err).to.be.equal(null)
        expect(result).to.be.equal(newUser)
      })
      // 1. First, create a user to make this unit test independent from the others
      // 2. Then, check if the result of the get method is correct
      done()
    })

    it('cannot get a user when it does not exist', (done) => {
      // Chech with any invalid user
      const invalidUser = {
        username: 'invalidUser',
        firstname: 'invalid',
        lastname: 'invalid'
      }

      userController.get(invalidUser.username, (err, result) => {
        expect(err).to.not.be.equal(null)
        expect(result).to.be.equal(null)
        done()
      })
    })

  })
})
