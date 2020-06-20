let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
chai.use(chaiHttp);
const app = require('../index');
describe("testing on products module", async () => {
    let departmentId,promotionId,_id;
    await describe("GET /products", () => {
        it("should get all products", (done) => {
            chai.request(app)
                .get(`/products`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('Array');
                    done();
                });
        });
    });
    await describe("create department and promotion before create product", () => {
        it("should add new departments 1", (done) => {
            chai.request(app)
                .post('/departments')
                .send({name: "depart testing only 3"})
                .end(({body}) => {
                    departmentId = body.department._id;
                    body.should.be.a("Object");
                    body.department.name.should.contains("depart testing only 3");
                    done();
                })
        });
        it("should add new promotion 2", (done) => {
            chai.request(app)
                .post('/promotions')
                .send({code: "promo testing only 1",discount:25,active:false})
                .end(({body}) => {
                    promotionId = body.promotion._id;
                    body.should.be.a("Object");
                    body.promotion.code.should.contains("promo testing only 1");
                    done();
                })
        });
    });

    await describe("create and update and delete on product", () => {
        it("should not add new products 1", (done) => {
            chai.request(app)
                .post('/products')
                .send({name: "pr",price:2000,departmentId,promotionId})
                .end(({body}) => {
                    body.should.be.a("Object");
                    body.errors.name.should.contains("name must be between 3 and 25 characters");
                    done();
                })
        });
        it("should add new product 2", (done) => {
            chai.request(app)
                .post('/products')
                .send({name: "depart testing only 1",price:2500,departmentId,promotionId})
                .end(({body}) => {
                    _id = body.product._id;
                    body.should.be.a("Object");
                    body.product.name.should.contains("depart testing only 1");
                    done();
                })
        });
        it("should edit product", (done) => {
            chai.request(app)
                .put(`/products/${_id}`)
                .send({name: "product testing only 2",price:10,departmentId,promotionId})
                .end(({body}) => {
                    body.should.be.a("Object");
                    body.message.should.contains("updated");
                    done();
                })
        });
        it("should delete product", (done) => {
            chai.request(app)
                .delete(`/products/${_id}`)
                .end(({body}) => {
                    body.should.be.a("Object");
                    body.message.should.contains("deleted");
                    done();
                })
        });
        it("should delete department", (done) => {
            chai.request(app)
                .delete(`/departments/${departmentId}`)
                .end(({body}) => {
                    body.should.be.a("Object");
                    body.message.should.contains("deleted");
                    done();
                })
        });
        it("should delete promotion", (done) => {
            chai.request(app)
                .delete(`/promotions/${promotionId}`)
                .end(({body}) => {
                    body.should.be.a("Object");
                    body.message.should.contains("deleted");
                    done();
                })
        });


    });
});
