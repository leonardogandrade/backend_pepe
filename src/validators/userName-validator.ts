import { RouteShorthandOptions } from "fastify";

export const userNameSchema: RouteShorthandOptions= {
    schema:{
        params: {
            type: 'object',
            required: ['name'],
            properties: {
                name: { type: 'string' }
            }
        }
    }
}