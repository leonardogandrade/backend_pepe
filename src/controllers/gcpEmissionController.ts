import { FastifyReply, FastifyRequest } from "fastify"
import { GcpEmission } from "../models/GcpEmissionModel"


export const listGcpEmissions = async(req:FastifyRequest, res: FastifyReply) => {
    const queryStrings = req.query as QueryStringsGcpEmissions
    const { startDate,
            endDate,
            nr_projeto,
            cod_projeto,
            des_servico,
            des_localizacao,
            des_regiao,
            nr_versao_modelo } = queryStrings

    const gcpSearchFields = {} as gcpSearchFields

    if(startDate && endDate){
        gcpSearchFields['dt_uso'] = { $gte: startDate, $lte: endDate}
    }
    nr_projeto && (gcpSearchFields['nr_projeto'] = nr_projeto)
    cod_projeto && (gcpSearchFields['cod_projeto'] = cod_projeto)
    des_servico && (gcpSearchFields['des_servico'] = des_servico)
    des_localizacao && (gcpSearchFields['des_localizacao'] = des_localizacao)
    des_regiao && (gcpSearchFields['des_regiao'] = des_regiao)
    nr_versao_modelo && (gcpSearchFields['nr_versao_modelo'] = nr_versao_modelo)

    // tentar arrumar em um laco depois
    // Object.keys(queryStrings).forEach((key)=>{
    //     console.log(key);
        
    //     queryStrings[key] && (gcpSearchFields[queryStrings[key]] = queryStrings[key])
    // })

    // console.log(gcpSearchFields);

    const emissions = await GcpEmission.find(gcpSearchFields)
    res.send(emissions)
}

// export const getGcpEmissionsBetweenDates = async(req:FastifyRequest, res: FastifyReply) => {
//     const queryStrings = req.query as QueryStringBetweenDates
//     const {startDate, endDate} = queryStrings

//     console.log(startDate, endDate);
    
//     const emissions = await GcpEmission.find({ dt_uso: { $gte: startDate, $lte: endDate } })
//     res.send(emissions)
// }

// export const getGcpEmissionsByDate = async(req:FastifyRequest, res: FastifyReply) => {
//     const queryStrings = req.query as QueryStringByDate
//     const {date} = queryStrings
    
//     const emissions = await GcpEmission.find({ dt_uso: date })
//     res.send(emissions)
// }

export const insertGcpEmission = async(req:FastifyRequest, res: FastifyReply) => {
    const body = req.body as BodyInsertGcpEmission
    console.log(body);
    const emission = await GcpEmission.create(body)
    res.send(emission)
}

export const deleteGcpEmission = async(req:FastifyRequest, res:FastifyReply)=>{
    const queryStrings = req.query as QueryStringsGcpEmissions

    const { startDate,
            endDate,
            nr_projeto,
            cod_projeto,
            des_servico,
            des_localizacao,
            des_regiao,
            nr_versao_modelo } = queryStrings

    const gcpSearchFields = {} as gcpSearchFields

    if(startDate && endDate){
        gcpSearchFields['dt_uso'] = { $gte: startDate, $lte: endDate}
    }
    nr_projeto && (gcpSearchFields['nr_projeto'] = nr_projeto)
    cod_projeto && (gcpSearchFields['cod_projeto'] = cod_projeto)
    des_servico && (gcpSearchFields['des_servico'] = des_servico)
    des_localizacao && (gcpSearchFields['des_localizacao'] = des_localizacao)
    des_regiao && (gcpSearchFields['des_regiao'] = des_regiao)
    nr_versao_modelo && (gcpSearchFields['nr_versao_modelo'] = nr_versao_modelo)

    res.send(await GcpEmission.deleteMany(gcpSearchFields))
}
