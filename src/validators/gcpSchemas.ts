import { RouteShorthandOptions } from "fastify";

const date = new Date()
const month = date.getMonth() + 1
const year = date.getFullYear()

export const GcpInsertSchema: RouteShorthandOptions = {
    schema:{
        body:{
            type: 'object',
            properties: {
                dt_uso: {type: 'string',},
                cod_conta_pagadora: { type: 'string' },
                nr_projeto: { type: 'number' },
                cod_projeto: { type: 'string' },
                des_servico: { type: 'string' },
                des_localizacao: { type: 'string' },
                des_regiao: { type: 'string' },
                vlr_carbon_footprint_escopo1: { type: 'number' },
                vlr_carbon_footprint_escopo2_localizacao: { type: 'number' },
                vlr_carbon_footprint_escopo3: { type: 'number' },
                vlr_total_carbon_footprint_localizacao: { type: 'number' },
                nr_versao_modelo: { type: 'number' }
            },
            additionalProperties: false,
        }
    }
}