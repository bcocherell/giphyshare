var expect  = require ('chai').expect;
var request = require("supertest");
var server = require("../server");
// var server = require ('sinon');

describe ('Universe',function(){
    it ('should be self- consistent', function () {
       expect (2).to.equal(2); 
    })
})

describe('/GET Home Page', () => {
    // before(function() {
    //     request(server).get('/');
    //   });

    it('Get Home Page Route', (done) => {
          request(server)
          .get('/')
          .expect(200)
          .end((err, res) => {
            done();
          });
    });
});


describe('/GET Posts', () => {
    
    it('Get Posts', (done) => {
        request(server)
        .get('/posts')
        .expect(200)
        .end((err, res) => {
          done();
        });
    });

  });

