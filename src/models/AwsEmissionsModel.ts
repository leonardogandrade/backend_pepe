import { Schema, model } from "mongoose";

const AwsEmissionSchema = new Schema({
    mbmCarbon: {type: Number, required: true},
    paceProductCode:{type: String, required: true},
    regionCode:{type: String, required: true},
    startDate:{type: Date, required: true}
})

export const AwsEmission: any = model('AwsEmission', AwsEmissionSchema, 'aws_emissions')