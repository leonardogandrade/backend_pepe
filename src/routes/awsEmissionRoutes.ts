import { FastifyInstance } from "fastify";
// import { getAwsEmissionsBetweenDates, getAwsEmissionsByDate } from "../controllers/awsEmissionController";

import { deleteAwsEmissions, listAwsEmissions } from "../controllers/awsEmissionController";


export const awsEmissionRoutes = async(fastify: FastifyInstance) => {
    fastify.get('/emissions/aws', listAwsEmissions)
    // fastify.get('/emissions/aws/dates', getAwsEmissionsBetweenDates)
    // fastify.get('/emissions/aws/exactdate', getAwsEmissionsByDate)
    fastify.delete('/emissions/aws', deleteAwsEmissions)
}
