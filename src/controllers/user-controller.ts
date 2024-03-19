import { FastifyRequest, FastifyReply } from "fastify";

export const createUser = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const data = request.body;
  reply.status(500).send(data);
};

export const listUsers = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  reply.send({ ok: "Pepe" });
};
