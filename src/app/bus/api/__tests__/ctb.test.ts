import axios from 'axios';
import { findRouteByNumber, listAllRoutes, findStopsByRouteNumber, findStopByStopId, getEtaByRouteNumberAndStopId, getCompanyInfo } from '../ctb';

jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios>;
const COMPANY_ID_CTB = 'CTB'

describe('citybus API', () => {
  it('getCompanyInfo should fetch company info', async () => {
    const data = { id: COMPANY_ID_CTB, name: 'Citybus' }
    mockedAxios.get.mockResolvedValue({ data })

    const response = await getCompanyInfo()
    expect(response.data).toEqual(data)
  })

  it('listAllRoutes should fetch all routes', async () => {
    const data = [{ route: '1' }, { route: '2' }]
    mockedAxios.get.mockResolvedValue({ data })

    const response = await listAllRoutes()
    expect(response.data).toEqual(data)
  })

  it('findRouteByNumber should fetch route by number', async () => {
    const routeNumber = '5B'
    const data = { route: routeNumber }
    mockedAxios.get.mockResolvedValue({ data })

    const response = await findRouteByNumber(COMPANY_ID_CTB, routeNumber)
    expect(response.data).toEqual(data)
  })

  it('findStopsByRouteNumber should fetch stops for a route and direction', async () => {
    const routeNumber = '5B'
    const direction = 'in'
    const data = [{ stop: '001' }, { stop: '002' }]
    mockedAxios.get.mockResolvedValue({ data })

    const response = await findStopsByRouteNumber(COMPANY_ID_CTB, routeNumber, direction)
    expect(response.data).toEqual(data)
  })

  it('findStopByStopId should fetch stop info by stopId', async () => {
    const stopId = '123456'
    const data = { stop: stopId, name: 'Central' }
    mockedAxios.get.mockResolvedValue({ data })

    const response = await findStopByStopId(stopId)
    expect(response.data).toEqual(data)
  })

  it('getEtaByRouteNumberAndStopId should fetch ETA', async () => {
    const routeNumber = '5B'
    const stopId = '123456'
    const data = [{ eta: '5 mins' }]
    mockedAxios.get.mockResolvedValue({ data })

    const response = await getEtaByRouteNumberAndStopId(COMPANY_ID_CTB, routeNumber, stopId)
    expect(response.data).toEqual(data)
  })
})