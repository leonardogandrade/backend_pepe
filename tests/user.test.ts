// import supertest from "supertest";
// import createServer from "../src/server";

// const app = createServer();

// afterAll(() => app.close());

// describe("GET users", () => {
//   it("should return 200 code", async () => {
//     await app.ready();
//     const response = await supertest(app.server).get("/user");

//     expect(response.statusCode).toBe(200);
//   });
// });

// //////////////////////////////////////////////////
// //////////////////////////////////////////////////
// //////////////////////////////////////////////////
// //////////////////////////////////////////////////
// //////////////////////////////////////////////////

import createServer from '../src/server'
import supertest from 'supertest'
import User from '../src/models/UserModel'

const app = createServer()

beforeAll(()=>{
    // testar depois: jest.spyOn(User, 'find') !! Não é possível pois spyOn recebe (object, 'method') e User é uma model

    // depois de criada a model User, não é chamado novamente o mongoose.model()
    // desse modo eu teoricamente estaria passando uma model para o metodo find(), mas ele busca no banco POR essa model, porém não há conexão disponível para ele
    jest.spyOn(User, 'find').mockResolvedValueOnce([{
      id:"id1234",
      name:"Nome Exemplo"
    }])
    .mockResolvedValueOnce({
      id:"outroID",
      name:"John Doe"
    });

    jest.spyOn(User, 'findById').mockResolvedValue({
      id:"idsearch1234",
      name:"busca por id"
    })

    jest.spyOn(User.prototype, 'save').mockResolvedValue({
      id:"id1234",
      name: 'john',
      email: 'john@test.com',
      password: 'jhonpassword'
    });

    jest.spyOn(User, 'findByIdAndDelete').mockResolvedValue({})

})

afterAll(()=> app.close)

describe('GET users', () => {
  it('should return 200 & a list of users', async()=>{
    await app.ready()
    const response = await supertest(app.server).get('/user');
    expect(response.statusCode).toBe(200)
    expect(response.body[0].id).toBe('id1234')
    expect(response.body[0].name).toBe('Nome Exemplo')
  })

  it('should return a user by name', async() => {
    const response = await app.inject({
      method: 'GET',
      url:'/user/name/john'
    })
    const body = JSON.parse(response.body) // Utilizando o injest foi necessário parsear o body da response
    // const response = await supertest(app.server).get('/user/name/john')

    expect(response.statusCode).toBe(200)
    expect(body.name).toBe('John Doe')
    expect(body.id).toBe('outroID')
  })

  it('should return a user by id', async() => {
    const response = await app.inject({
      method: 'GET',
      url: '/user/idsearch1234'
    })
    const body = JSON.parse(response.body)

    expect(response.statusCode).toBe(200)
    expect(body.id).toBe("idsearch1234")
  })

})

describe('POST user', ()=>{
    it('create a user', async ()=>{
        await app.ready()
        const response = await supertest(app.server).post('/user').send({
            name: 'john',
            email: 'john@test.com',
            password: 'johnpassword'
          })
          // console.log(response);
        expect(response.statusCode).toEqual(200)
        expect(response.body['id']).toEqual('id1234')
        
    })
})

describe('PUT user with/wo ID', () => {
  const spy = jest.spyOn(User, 'findByIdAndUpdate').mockReturnValue({
    id:"id1234",
  });

  it('should return 404', async () => {
    const response = await supertest(app.server).put('/user').send({
      name: 'update name'
    });
    expect(response.statusCode).toBe(404)
    expect(spy).toHaveBeenCalledTimes(0)
  })
  it('should return 200', async () => {
    const response = await supertest(app.server).put('/user/id1234').send({
      name: "update name"
    });
    expect(response.statusCode).toBe(200)
    expect(response.body['id']).toEqual('id1234')
    expect(spy).toHaveBeenCalledTimes(1)
  })
})

describe('Tests the delete by Id', async()=>{
  const response = await supertest(app.server).delete('/user/id1234')

  expect(response.body.Id).toBe(undefined)
})


// //////////////////////////////////////////////////
// //////////////////////////////////////////////////
// //////////////////////////////////////////////////
// //////////////////////////////////////////////////
// //////////////////////////////////////////////////
// describe('users tests', ()=>{
//     it('responds with json', async ()=>{
//             await request(app).get('/')
//             .expect('Content-Type', /json/)
//             .expect(200)
//             // expect(response.body).toHaveProperty('name') // why doesn`t it have a '.'
//     })
//     it('checks the user creation', async ()=>{
//         const response = await request(app).post('/user').send({
//             name: 'john',
//             email: 'john@test.com',
//             password: 'jhonpassword'
//         })
//         expect(response.statusCode).toEqual(200)
//         expect(response.body).toHaveProperty('id')
//     })
//     it('gets the users', async ()=>{
//         const response = await request(app).get('/user');
//         expect(response.statusCode).toEqual(200)
//         expect(response.body).not.toBe(undefined)
//     })
// })