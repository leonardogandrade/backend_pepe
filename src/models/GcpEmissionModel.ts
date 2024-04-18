import { Schema, model } from "mongoose";

const date = new Date()
const month = date.getMonth() + 1
const year = date.getFullYear()

const GcpSchema = new Schema({
    dt_uso: {
        type: Date,
        min: '2020-01-01',
        max:`${year}-${month}-01`
    },
    cod_conta_pagadora: String,
    nr_projeto: Number,
    cod_projeto: String,
    des_servico: String,
    des_localizacao: String,
    des_regiao: String,
    vlr_carbon_footprint_escopo1: Number,
    vlr_carbon_footprint_escopo2_localizacao: Number,
    vlr_carbon_footprint_escopo3: Number,
    vlr_total_carbon_footprint_localizacao: Number,
    nr_versao_modelo: Number
})

export const GcpEmission:any = model('GcpEmission', GcpSchema, 'gcp_emissions')