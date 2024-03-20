import { FastifyRequest, FastifyReply } from "fastify";
import mongoose from "mongoose";
import { User } from "../models/user-model";
import { passwordHelper } from "../helpers/string-helper";


export const createUser = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
    const {name, password, email, vs, project} = request.body
    passwordHelper(password) ? reply.send({
      name,
      email,
      vs,
      project
    }) : reply.status(500).send('Senha menor de 6 digitos')
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
  // console.log(request);
   const userId = request.params.id 
   const user = await User.findById(request.params.id);
   reply.send(user)

};
export const getUserByName= async (
  request: FastifyRequest, 
  reply: FastifyReply
) => {
  // console.log(request);
   const user = await User.find({name: request.params.name});
   reply.send(user)

};

export const deleteUser = async (
  request: FastifyRequest, 
  reply: FastifyReply
) => {
  const user = await User.findByIdAndDelete(request.params.id);
  reply.send(user)
};

export const updateUser = async (
  request: FastifyRequest, 
  reply: FastifyReply
) => {
  const user = await User.findByIdAndUpdate(request.params.id, request.body, {
    new: true
  });
  reply.send(user)
};