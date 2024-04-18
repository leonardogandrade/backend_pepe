import { RouteShorthandOptions } from "fastify";

export const userIdSchema: RouteShorthandOptions = {
    schema:{
        params: {
            type: 'object',
            required: ['id']
        }
    }
}