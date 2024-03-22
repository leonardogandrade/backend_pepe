import { FastifyRequest, FastifyReply } from "fastify";
import { User } from "../models/user-model";
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
          ) : reply.status(500).send('Informe uma data válida')
        ) : reply.status(500).send('Senha menor de 6 digitos')
      ) : reply.status(500).send('Padrão incorreto de e-mail')
    ) : reply.status(500).send('Nome deve ser conter menos de 30 caracteres')
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
  const { id }: any = request.params
  
   const user = await User.findById(id);
   reply.send(user)

};
export const getUserByName= async (
  request: FastifyRequest, 
  reply: FastifyReply
) => {
   const {name}: any = request.params
   nameHelper(name) ? reply.send(await User.find(name)) : reply.status(500).send('Nome deve ser conter menos de 30 caracteres')
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
        ) : reply.status(500).send('Informe uma data válida')
      ) : reply.status(500).send('Senha menor de 6 digitos')
    ) : reply.status(500).send('Padrão incorreto de e-mail')
};