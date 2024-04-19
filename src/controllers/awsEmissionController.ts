import { FastifyReply, FastifyRequest } from "fastify";
import { AwsEmission } from "../models/AwsEmissionsModel";

// List all the emissions data
// export const listAwsEmissions = async(req: FastifyRequest, res: FastifyReply) => {
//     const emissions = await AwsEmission.find()
//     res.send(emissions)
// }

export const listAwsEmissions = async(req: FastifyRequest, res: FastifyReply) => {
    const queryStrings = req.query as QueryStringAwsEmissions
    const {startDate, endDate, paceProductCode, regionCode} = queryStrings
    const searchFields:any = {}

    if(startDate && endDate){
        searchFields['startDate'] = { $gte: startDate, $lte: endDate}
    }
    paceProductCode && (searchFields['paceProductCode'] = paceProductCode)
    regionCode && (searchFields['regionCode'] = regionCode)

    console.log(searchFields);
    
    const emissions = await AwsEmission.find(searchFields)
    
    res.send(emissions)
}

// export const getAwsEmissionsBetweenDates = async(req:FastifyRequest, res: FastifyReply) => {
//     const queryStrings = req.query as QueryStringBetweenDates
//     const {startDate, endDate} = queryStrings
//     const emissions = await AwsEmission.find({startDate: {$gte: startDate, $lte: endDate}})

//     res.send(emissions)
// }

// export const getAwsEmissionsByDate = async(req: FastifyRequest, res: FastifyReply)=>{
//     const queryStrings = req.query as QueryStringByDate
//     const {date} = queryStrings

//     const emissions = await AwsEmission.find({startDate: date})
//     res.send(emissions)
// }