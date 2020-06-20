let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
chai.use(chaiHttp);
const app = require('../index');
describe("testing on promotions module", async () => {
    let _id;
    await describe("GET /promotions", () => {
        it("should get all promotions", (done) => {
            chai.request(app)
                .get(`/promotions`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('Array');
                    done();
                });
        });
    });

    await describe("create and update and delete on promotion", () => {
        it("should not add new promotions 1", (done) => {
            chai.request(app)
                .post('/promotions')
                .send({code: "pr",discount:20,active:true})
                .end(({body}) => {
                    body.should.be.a("Object");
                    body.errors.code.should.contains("code must be between 3 and 25 characters");
                    done();
                })
        });
        it("should add new promotion 2", (done) => {
            chai.request(app)
                .post('/promotions')
                .send({code: "code for testing 1",discount:25,active:false})
                .end(({body}) => {
                    _id = body.promotion._id;
                    body.should.be.a("Object");
                    body.promotion.code.should.contains("code for testing 1");
                    done();
                })
        });
        it("should edit promotion", (done) => {
            chai.request(app)
                .put(`/promotions/${_id}`)
                .send({code: "promo testing only 2",discount:10,active:false})
                .end(({body}) => {
                    body.should.be.a("Object");
                    body.message.should.contains("updated");
                    done();
                })
        });
        it("should delete promotion", (done) => {
            chai.request(app)
                .delete(`/promotions/${_id}`)
                .end(({body}) => {
                    body.should.be.a("Object");
                    body.message.should.contains("deleted");
                    done();
                })
        });
    });
});
