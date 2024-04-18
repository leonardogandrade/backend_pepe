import { FastifyInstance } from "fastify";
import { awsEmissionRoutes } from "./awsEmissionRoutes";
import { gcpEmissionRoutes } from "./gcpEmissionRoutes";
import userRoutes from "./userRoutes";

export async function router(fastify: FastifyInstance){
    fastify.register(awsEmissionRoutes)
    fastify.register(gcpEmissionRoutes)
    fastify.register(userRoutes)
}