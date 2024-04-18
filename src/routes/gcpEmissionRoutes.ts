import { FastifyInstance } from "fastify";
import { getGcpEmissionsBetweenDates, getGcpEmissionsByDate, insertGcpEmission, listGcpEmissions } from "../controllers/gcpEmissionController";
import { GcpInsertSchema } from "../validators/gcpSchemas";


export const gcpEmissionRoutes = async(fastify:FastifyInstance)=>{
    fastify.get('/emissions/gcp', listGcpEmissions)
    fastify.get('/emissions/gcp/dates', getGcpEmissionsBetweenDates)
    fastify.get('/emissions/gcp/exactdate', getGcpEmissionsByDate)

    fastify.post('/emissions/gcp', GcpInsertSchema,insertGcpEmission)
}