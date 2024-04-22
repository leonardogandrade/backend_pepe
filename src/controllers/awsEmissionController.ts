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
    const awsSearchFields:any = {}

    // Ajustar filtros para aceitar mais de um "servico", "regiao"

    if(startDate && endDate){
        awsSearchFields['startDate'] = { $gte: startDate, $lte: endDate}
    }
    paceProductCode && (awsSearchFields['paceProductCode'] = paceProductCode)
    regionCode && (awsSearchFields['regionCode'] = regionCode)

    console.log(awsSearchFields);
    
    const emissions = await AwsEmission.find(awsSearchFields)
    
    res.send(emissions)
}

export const deleteAwsEmissions = async (req: FastifyRequest, res: FastifyReply) => {
    const queryStrings = req.query as QueryStringAwsEmissions
    const {startDate, endDate, paceProductCode, regionCode} = queryStrings
    const awsSearchFields:any = {}

    if(startDate && endDate){
        awsSearchFields['startDate'] = { $gte: startDate, $lte: endDate}
    }
    paceProductCode && (awsSearchFields['paceProductCode'] = paceProductCode)
    regionCode && (awsSearchFields['regionCode'] = regionCode)

    res.send(await AwsEmission.deleteMany(awsSearchFields))
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