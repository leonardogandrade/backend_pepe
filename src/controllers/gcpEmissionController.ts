import { FastifyReply, FastifyRequest } from "fastify"
import { GcpEmission } from "../models/GcpEmissionModel"


export const listGcpEmissions = async(req:FastifyRequest, res: FastifyReply) => {
    const emissions = await GcpEmission.find()
    res.send(emissions)
}

export const getGcpEmissionsBetweenDates = async(req:FastifyRequest, res: FastifyReply) => {
    const queryStrings = req.query as QueryStringBetweenDates
    const {startDate, endDate} = queryStrings

    console.log(startDate, endDate);
    
    const emissions = await GcpEmission.find({ dt_uso: { $gte: startDate, $lte: endDate } })
    res.send(emissions)
}

export const getGcpEmissionsByDate = async(req:FastifyRequest, res: FastifyReply) => {
    const queryStrings = req.query as QueryStringByDate
    const {date} = queryStrings
    
    const emissions = await GcpEmission.find({ dt_uso: date })
    res.send(emissions)
}

export const insertGcpEmission = async(req:FastifyRequest, res: FastifyReply) => {
    const body = req.body as BodyInsertGcpEmission
    console.log(body);
}
