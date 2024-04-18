import { FastifyRequest, FastifyReply } from "fastify";
import  User from "../models/UserModel";
import { emailHelper, nameHelper, passwordHelper } from "../helpers/string-helper";
import { birthHelper } from "../helpers/date-helper";


export const createUser = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
    const {name, password, email, vs, project, cargo, birthday}: any = request.body
    const user = new User({name, password, email, vs, project, cargo, birthday});
    nameHelper(name) ? (
      emailHelper(email) ? (
        passwordHelper(password) ? (
          birthHelper(birthday) ? (
            reply.send(await user.save())
          ) : reply.status(400).send('Informe uma data válida')
        ) : reply.status(400).send('Senha menor de 6 digitos')
      ) : reply.status(400).send('Padrão incorreto de e-mail')
    ) : reply.status(400).send('Nome deve ser conter menos de 30 caracteres')
  };
  
export const listUsers = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  // console.log(User.prototype);
  
  const users = await User.find(); // nesse ponto eu devo retornar um array de usuários (que vai ter propriedade id)
  reply.send(users)
  
};

export const getUserByID = async (
  request: FastifyRequest, 
  reply: FastifyReply
) => {
  const { id }: any = request.params
  
   const user = await User.findById(id);
   reply.send(user)

};
export const getUserByName= async (
  request: FastifyRequest, 
  reply: FastifyReply
) => {
   const {name}: any = request.params
   console.log(name);

   nameHelper(name) ? reply.send(await User.find(name)) : reply.status(400).send('Nome deve ser conter menos de 30 caracteres')
};

export const deleteUser = async (
  request: FastifyRequest, 
  reply: FastifyReply
) => {
  const { id }: any = request.params
  const user = await User.findByIdAndDelete(id);
  reply.send(user)
};



export const updateUser = async (
  request: FastifyRequest, 
  reply: FastifyReply
) => {
  const {password, email, birthday}: any = request.body
  const { id }: any = request.params
  const { body }: any = request;
  
    emailHelper(email) ? (
      passwordHelper(password) ? (
        birthHelper(birthday) ? (
            reply.send(await User.findByIdAndUpdate(id, body, {
            new: true
          }))
        ) : reply.status(400).send('Informe uma data válida')
      ) : reply.status(400).send('Senha menor de 6 digitos')
    ) : reply.status(400).send('Padrão incorreto de e-mail')
};