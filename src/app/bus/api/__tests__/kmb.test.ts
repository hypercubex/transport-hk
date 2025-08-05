import axios from 'axios'
import { listAllRoutes, listAllStops, findStopByStopId, findStopsByRouteNumber, getEtaByRouteNumberAndStopId, findRouteByNumber } from '../kmb'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('listAllRoutes', () => {
  it('should call the correct endpoint and return data', async () => {
    const mockResponse = { data: [{ route: '1A' }, { route: '2B' }] }
    mockedAxios.create.mockReturnThis()
    mockedAxios.get.mockResolvedValueOnce(mockResponse)

    const result = await listAllRoutes()
    expect(mockedAxios.get).toHaveBeenCalledWith('/route/')
    expect(result).toEqual(mockResponse)
  })

  describe('listAllStops', () => {
    it('should call the correct endpoint and return data', async () => {
      const mockResponse = { data: [{ stop: '001' }, { stop: '002' }] }
      mockedAxios.create.mockReturnThis()
      mockedAxios.get.mockResolvedValueOnce(mockResponse)

      const result = await listAllStops()
      expect(mockedAxios.get).toHaveBeenCalledWith('/stop/')
      expect(result).toEqual(mockResponse)
    })

    describe('findStopByStopId', () => {
      it('should call the correct endpoint with stopId and return data', async () => {
      const mockStopId = '12345'
      const mockResponse = { data: { stop: mockStopId, name: 'Test Stop' } }
      mockedAxios.create.mockReturnThis()
      mockedAxios.get.mockResolvedValueOnce(mockResponse)

      const result = await findStopByStopId(mockStopId)
      expect(mockedAxios.get).toHaveBeenCalledWith(`/stop/${mockStopId}`)
      expect(result).toEqual(mockResponse)
      })

      it('should call the correct endpoint with routeNumber, direction, and serviceType for findRouteByNumber', async () => {
        const mockRouteNumber = '1A'
        const mockDirection = 'I'
        const mockServiceType = 2
        const mockResponse = { data: { route: mockRouteNumber, direction: mockDirection, serviceType: mockServiceType } }
        mockedAxios.create.mockReturnThis()
        mockedAxios.get.mockResolvedValueOnce(mockResponse)

        const result = await findRouteByNumber(mockRouteNumber, mockDirection, mockServiceType)
        expect(mockedAxios.get).toHaveBeenCalledWith(`/route/${mockRouteNumber}/${mockDirection}/${mockServiceType}`)
        expect(result).toEqual(mockResponse)
      })

      it('should call the correct endpoint with routeNumber, direction, and serviceType for findStopsByRouteNumber', async () => {
        const mockRouteNumber = '2B'
        const mockDirection = 'O'
        const mockServiceType = 1
        const mockResponse = { data: [{ stop: '001' }, { stop: '002' }] }
        mockedAxios.create.mockReturnThis()
        mockedAxios.get.mockResolvedValueOnce(mockResponse)

        const result = await findStopsByRouteNumber(mockRouteNumber, mockDirection, mockServiceType)
        expect(mockedAxios.get).toHaveBeenCalledWith(`/route-stop/${mockRouteNumber}/${mockDirection}/${mockServiceType}`)
        expect(result).toEqual(mockResponse)
      })

      it('should call the correct endpoint with routeNumber, stopId, and serviceType for getEtaByRouteNumberAndStopId', async () => {
        const mockRouteNumber = '3C'
        const mockStopId = '67890'
        const mockServiceType = 1
        const mockResponse = { data: [{ eta: '5min' }] }
        mockedAxios.create.mockReturnThis()
        mockedAxios.get.mockResolvedValueOnce(mockResponse)

        const result = await getEtaByRouteNumberAndStopId(mockRouteNumber, mockStopId, mockServiceType)
        expect(mockedAxios.get).toHaveBeenCalledWith(`/eta/${mockStopId}/${mockRouteNumber}/${mockServiceType}`)
        expect(result).toEqual(mockResponse)
      })
    })
  })


})