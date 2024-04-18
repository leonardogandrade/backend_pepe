import { FastifyInstance } from "fastify";
import { listAwsEmissions } from "../controllers/awsEmissionController";


export const awsEmissionRoutes = async(fastify: FastifyInstance) => {
    fastify.get('/emissions/aws', listAwsEmissions)
}
