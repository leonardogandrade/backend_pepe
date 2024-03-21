import { RouteShorthandOptions } from "fastify";

export const userPutSchema: RouteShorthandOptions = {
    schema:{
        body:{
            type: 'object',
            properties: {
                name: { type: 'string' },
                email: { type: 'string' },
                password: { type: 'string' },
                vs: {type: 'string' },
                project: { type: 'string' },
                cargo: {type: 'string'}
            },
            additionalProperties: false,
        },
        params: {
            type: 'object',
            required: ['id']
        }
    }
}