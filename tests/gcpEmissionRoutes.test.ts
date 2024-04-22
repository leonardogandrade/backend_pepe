import { GcpEmission } from "../src/models/GcpEmissionModel"
import createServer from "../src/server"

const app = createServer()

describe('Tests all the gcp emission routes', () => {
    beforeAll(()=>{
        jest.spyOn(GcpEmission, 'find').mockResolvedValue([{
            "_id": "66215e1ceb213e0071ecab2f",
            "dt_uso": "2024-01-01T00:00:00.000Z",
            "cod_conta_pagadora": "01abc5-8bfa44-5e51c3",
            "nr_projeto": 210596485269,
            "cod_projeto": "prisma-290512",
            "des_servico": "cloud healthcare",
            "des_localizacao": "eu",
            "des_regiao": "",
            "vlr_carbon_footprint_escopo1": 3.85245642614639e-7,
            "vlr_carbon_footprint_escopo2_localizacao": 0.00005258096494925024,
            "vlr_carbon_footprint_escopo3": 0.00007530872840262663,
            "vlr_total_carbon_footprint_localizacao": 0.0001282749389944915,
            "nr_versao_modelo": 10,
            "__v": 0
        }])

        jest.spyOn(GcpEmission, 'deleteMany').mockResolvedValue({
            "acknowledged": true,
            "deletedCount": 1
        })

        jest.spyOn(GcpEmission, "create").mockResolvedValue({
            "_id": "66215e1ceb213e0071ecab2f",
            "dt_uso": "2024-01-01T00:00:00.000Z",
            "cod_projeto":"TESTE",
            "__v": 0

        })
    })

    afterAll(()=>app.close)

    it('should return a list of emissions', async ()=>{
        const response = await app.inject({
            method: 'GET',
            path:'/emissions/gcp'
        })

        const body = JSON.parse(response.body)
        expect(body[0]._id).toBe("66215e1ceb213e0071ecab2f")
        expect(body[0].nr_projeto).toBe(210596485269)
    })

    it('should delete all the emissions with a determined project', async ()=>{
        const response  = await app.inject({
            method: 'DELETE',
            path: '/emissions/gcp?cod_projeto=TESTE'
        })
        const body = JSON.parse(response.body)

        expect(body.deletedCount).toBeGreaterThan(0)

    })

    it('should successfully insert a emission', async ()=>{
        const response = await app.inject({
            method: 'POST',
            path: '/emissions/gcp',
            body: {
                "dt_uso":"2024-01-01",
                "cod_projeto":"TESTE",
            }
        })

        const body = JSON.parse(response.body)

        expect(body._id).toBe("66215e1ceb213e0071ecab2f")
        expect(body.dt_uso).toBe("2024-01-01T00:00:00.000Z")
    })
})
