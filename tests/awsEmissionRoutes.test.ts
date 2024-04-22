import { AwsEmission } from "../src/models/AwsEmissionsModel"
import { GcpEmission } from "../src/models/GcpEmissionModel"
import createServer from "../src/server"

const app = createServer()

describe('Tests all the gcp emission routes', () => {
    beforeAll(()=>{
        jest.spyOn(AwsEmission, 'find').mockResolvedValue([{
            "_id": "662275af8aad9a8175504390",
            "startDate": "2021-03-01T00:00:00.000Z",
            "mbmCarbon": 0.001,
            "paceProductCode": "Other",
            "regionCode": "APAC"
        }])

        jest.spyOn(AwsEmission, 'deleteMany').mockResolvedValue({
            "acknowledged": true,
            "deletedCount": 5
        })
    })

    afterAll(()=>app.close)

    it('should return a list of emissions', async ()=>{
        const response = await app.inject({
            method: 'GET',
            path:'/emissions/aws'
        })

        const body = JSON.parse(response.body)
        expect(body[0]._id).toBe("662275af8aad9a8175504390")
        expect(body[0].mbmCarbon).toBe(0.001)
        expect(body[0].regionCode).toBe('APAC')

    })

    it('should delete all the emissions with a determined region code', async ()=>{
        const response  = await app.inject({
            method: 'DELETE',
            path: '/emissions/aws?regionCode=APAC'
        })
        const body = JSON.parse(response.body)

        expect(body.deletedCount).toBeGreaterThan(0)

    })
})
