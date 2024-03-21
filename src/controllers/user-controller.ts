import { FastifyRequest, FastifyReply } from "fastify";
import { User } from "../models/user-model";
import { emailHelper, passwordHelper } from "../helpers/string-helper";


export const createUser = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
    const {name, password, email, vs, project}: any = request.body
    
    emailHelper(email) ? (
      passwordHelper(password) ? reply.send({
        name,
        email,
        vs,
        project
      }) : reply.status(500).send('Senha menor de 6 digitos')
    ) : reply.status(500).send('Padrão incorreto de e-mail')
    // const user = new User(data);
    // const result = user.save();
  };
  
export const listUsers = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const users = await User.find();
  reply.send(users)
};

export const getUserByID = async (
  request: FastifyRequest, 
  reply: FastifyReply
) => {
  console.log(request);
  
   const user = await User.findById({id: request.params});
   reply.send(user)

};
export const getUserByName= async (
  request: FastifyRequest, 
  reply: FastifyReply
) => {
  // console.log(request);
   const user = await User.find({name: request.params});
   reply.send(user)

};

export const deleteUser = async (
  request: FastifyRequest, 
  reply: FastifyReply
) => {
  const user = await User.findByIdAndDelete({id: request.params});
  reply.send(user)
};

export const updateUser = async (
  request: FastifyRequest, 
  reply: FastifyReply
) => {
  console.log(request);
  const {password, email}: any = request.body
    emailHelper(email) ? (
      passwordHelper(password) ? (
        reply.send(await User.findByIdAndUpdate({id: request.params},{body: request}, {
          new: true
        }))
      ) : reply.status(500).send('Senha menor de 6 digitos')
    ) : reply.status(500).send('Padrão incorreto de e-mail')
};