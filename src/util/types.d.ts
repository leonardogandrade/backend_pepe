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
    "vlr_carbon_footprint_escopo1": 3.85245642614639e-7,
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