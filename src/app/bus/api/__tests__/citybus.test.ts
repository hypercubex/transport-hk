import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { findRouteByNumber, listAllRoutes, findStopsByRouteNumber, findStopByStopId, getEtaByRouteNumberAndStopId, getCompanyInfo } from '../citybus';

const COMPANY_ID_CTB = 'CTB'

describe('citybus API', () => {
  let mockApi: MockAdapter

  beforeAll(() => {
    console.log('beforeAll')
    const mockApiInstance = axios.create()
    mockApi = new MockAdapter(mockApiInstance)
    jest.mock('axios', () => ({
      create: () => ({
        console.log('test!')
        return mockApiInstance
      })
    }))
  })

  afterEach(() => {
    mockApi.reset()
  })

  afterAll(() => {
    mockApi.restore()
    jest.restoreAllMocks()
  })

  it('getCompanyInfo should fetch company info', async () => {
    const data = { id: COMPANY_ID_CTB, name: 'Citybus' }
    mockApi.onGet(`/company/${COMPANY_ID_CTB}`).reply(200, data)

    const response = await getCompanyInfo()
    expect(response.data).toEqual(data)
  })

  it('listAllRoutes should fetch all routes', async () => {
    const data = [{ route: '1' }, { route: '2' }]
    mockApi.onGet(`/route/company/${COMPANY_ID_CTB}`).reply(200, data)

    const response = await listAllRoutes()
    expect(response.data).toEqual(data)
  })

  it('findRouteByNumber should fetch route by number', async () => {
    const routeNumber = '5B'
    const data = { route: routeNumber }
    mockApi.onGet(`/route/company/${COMPANY_ID_CTB}/${routeNumber}`).reply(200, data)

    const response = await findRouteByNumber(COMPANY_ID_CTB, routeNumber)
    expect(response.data).toEqual(data)
  })

  it('findStopsByRouteNumber should fetch stops for a route and direction', async () => {
    const routeNumber = '5B'
    const direction = 'in'
    const data = [{ stop: '001' }, { stop: '002' }]
    mockApi.onGet(`/route-stop/${COMPANY_ID_CTB}/${routeNumber}/${direction}bound`).reply(200, data)

    const response = await findStopsByRouteNumber(COMPANY_ID_CTB, routeNumber, direction)
    expect(response.data).toEqual(data)
  })

  it('findStopByStopId should fetch stop info by stopId', async () => {
    const stopId = '123456'
    const data = { stop: stopId, name: 'Central' }
    mockApi.onGet(`/stop/${stopId}`).reply(200, data)

    const response = await findStopByStopId(stopId)
    expect(response.data).toEqual(data)
  })

  it('getEtaByRouteNumberAndStopId should fetch ETA', async () => {
    const routeNumber = '5B'
    const stopId = '123456'
    const data = [{ eta: '5 mins' }]
    mockApi.onGet(`/eta/${COMPANY_ID_CTB}/${stopId}/${routeNumber}`).reply(200, data)

    const response = await getEtaByRouteNumberAndStopId(COMPANY_ID_CTB, routeNumber, stopId)
    expect(response.data).toEqual(data)
  })
})