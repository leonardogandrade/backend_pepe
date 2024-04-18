import { FastifyReply, FastifyRequest } from "fastify";
import { AwsEmission } from "../models/AwsEmissionsModel";


export const listAwsEmissions = async(req: FastifyRequest, res: FastifyReply) => {
    const emissions = await AwsEmission.find()
    res.send(emissions)
}