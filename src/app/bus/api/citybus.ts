import axios from 'axios'

const COMPANY_ID_CTB = 'CTB'
const apiClient = axios.create({
  baseURL: process.env.API_CITY_BUS
})

export const getCompanyInfo = async (companyId: string = COMPANY_ID_CTB) => {
  return await apiClient.get(`/company/${companyId}`)
}

export const listAllRoutes = async (companyId: string = COMPANY_ID_CTB) => {
  return await apiClient.get(`/route/company/${companyId}`) 
}

export const findRouteByNumber = async (companyId: string = COMPANY_ID_CTB, routeNumber: string ) => {
  return await apiClient.get(`/route/company/${companyId}/${routeNumber}`)
}

export const findStopsByRouteNumber = async (companyId: string = COMPANY_ID_CTB, routeNumber: string, direction: 'in' | 'out' ) => {
  return await apiClient.get(`/route-stop/${companyId}/${routeNumber}/${direction}bound`)
}

// Get stop information by a 6-digit stop ID
export const findStopByStopId = async (stopId: string) => {
  return await apiClient.get(`/stop/${stopId}`)
}

export const getEtaByRouteNumberAndStopId = async (companyId: string = COMPANY_ID_CTB, routeNumber: string, stopId: string) => {
  return await apiClient.get(`/eta/${companyId}/${stopId}/${routeNumber}`)
}

