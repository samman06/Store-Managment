let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
chai.use(chaiHttp);
const app = require('../index');
describe("testing on departments module", async () => {
    let _id;
    await describe("GET /departments", () => {
        it("should get all departments", (done) => {
            chai.request(app)
                .get(`/departments`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('Array');
                    done();
                });
        });
    });

    await describe("create and update and delete on department", () => {
        it("should not add new departments 1", (done) => {
            chai.request(app)
                .post('/departments')
                .send({name: "de"})
                .end(({body}) => {
                    body.should.be.a("Object");
                    body.errors.name.should.contains("name must be between 3 and 25 characters");
                    done();
                })
        });
        it("should add new departments 2", (done) => {
            chai.request(app)
                .post('/departments')
                .send({name: "for testing only 1"})
                .end(({body}) => {
                    _id = body.department._id;
                    body.should.be.a("Object");
                    body.department.name.should.contains("for testing only 1");
                    done();
                })
        });
        it("should edit department", (done) => {
            chai.request(app)
                .put(`/departments/${_id}`)
                .send({name: "depart testing only 2"})
                .end(({body}) => {
                    body.should.be.a("Object");
                    body.message.should.contains("updated");
                    done();
                })
        });
        it("should delete department", (done) => {
            chai.request(app)
                .delete(`/departments/${_id}`)
                .end(({body}) => {
                    body.should.be.a("Object");
                    body.message.should.contains("deleted");
                    done();
                })
        });
    });
});
