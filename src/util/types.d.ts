interface QueryStringBetweenDates {
    startDate: string,
    endDate: string
}

interface QueryStringByDate {
    date: string
}

interface BodyInsertGcpEmission {
    dt_uso: Date,
    "cod_conta_pagadora": string,
    "nr_projeto": number,
    "cod_projeto": string,
    "des_localizacao": string,
    "des_servico": string,
    "vlr_carbon_footprint_escopo1": number,
    "des_regiao": string,
    "vlr_carbon_footprint_escopo3": number,
    "vlr_carbon_footprint_escopo2_localizacao": number,
    "nr_versao_modelo": number,
    "vlr_total_carbon_footprint_localizacao": number,
}

interface QueryStringAwsEmissions {
    startDate: string,
    endDate: string,
    paceProductCode: string,
    regionCode: string,
}

interface QueryStringsGcpEmissions {
    startDate: string,
    endDate: string,
    nr_projeto: number,
    cod_projeto: string,
    des_servico: string,
    des_localizacao: string,
    des_regiao: string,
    nr_versao_modelo: number
}

interface gcpSearchFields {
    dt_uso: {}, // { $gte: startDate, $lte: endDate} what's right?
    nr_projeto: number,
    cod_projeto: string,
    des_servico: string,
    des_localizacao: string,
    des_regiao: string,
    nr_versao_modelo: number

}