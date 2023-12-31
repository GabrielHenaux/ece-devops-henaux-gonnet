const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/index');
const db = require('../src/dbClient');
const userController = require('../src/controllers/user');

chai.use(chaiHttp);
const expect = chai.expect;

describe('User REST API', () => {

  beforeEach(() => {
    // Clean DB before each test
    db.flushdb();
  });

  after(() => {
    app.close();
    db.quit();
  });

  
  // Tests for POST /user
  describe('POST /user', () => {
    it('create a new user', (done) => {
      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      };
      chai.request(app)
        .post('/user')
        .send(user)
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body.status).to.equal('success');
          expect(res).to.be.json;
          done();
        });
    });

    it('pass wrong parameters', (done) => {
      const user = {
        firstname: 'Sergei',
        lastname: 'Kudinov'
      };
      chai.request(app)
        .post('/user')
        .send(user)
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body.status).to.equal('error');
          expect(res).to.be.json;
          done();
        });
    });
  });

  // Tests for GET /user/:username
  describe('GET /user/:username', () => {
    it('get an existing user', (done) => {
      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      };
      // Create a user first
      userController.create(user, () => {
        // Get the user
        chai.request(app)
          .get('/user/' + user.username)
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body.status).to.equal('success');
            expect(res).to.be.json;
            done();
          });
      });
    });

    it('can not get a user when it does not exist', (done) => {
      chai.request(app)
        .get('/user/invalid')
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res.body.status).to.equal('error');
          expect(res).to.be.json;
          done();
        });
    });
  });

  // Tests for PUT /user/:username
  describe('PUT /user/:username', () => {
    it('update an existing user', (done) => {
      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      };
      // Create a user first
      userController.create(user, () => {
        // Update the user
        chai.request(app)
          .put('/user/' + user.username)
          .send({ firstname: 'UpdatedFirstName', lastname: 'UpdatedLastName' })
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body.status).to.equal('success');
            expect(res).to.be.json;
            done();
          });
      });
    });

    it('fails to update a non-existing user', (done) => {
      chai.request(app)
        .put('/user/nonexistinguser')
        .send({ firstname: 'FirstName', lastname: 'LastName' })
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res.body.status).to.equal('error');
          expect(res).to.be.json;
          done();
        });
    });
  });

  // Tests for DELETE /user/:username
  describe('DELETE /user/:username', () => {
    it('delete an existing user', (done) => {
      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      };
      // Create a user first
      userController.create(user, () => {
        // Delete the user
        chai.request(app)
          .delete('/user/' + user.username)
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body.status).to.equal('success');
            expect(res).to.be.json;
            done();
          });
      });
    });

    it('fails to delete a non-existing user', (done) => {
      chai.request(app)
        .delete('/user/nonexistinguser')
        .end((err, res) => {
          expect(res).to.have.status(404)ro;
          expect(res.body.status).to.equal('error');
          expect(res).to.be.json;
          done();
        });
    });
  });

});
