import axios from 'axios'

// This file contains API functions for interacting with the KMB service
type KmbDirection = 'I' | 'O'
type KmbServiceType = 1 | 2

const apiClient = axios.create({
  baseURL: process.env.API_KMB + '/v1/transport/kmb'
})

export const listAllRoutes = async () => {
  return apiClient.get(`/route/`)
}

export const findRouteByNumber = async (
  routeNumber: string,
  direction: KmbDirection,
  serviceType: KmbServiceType = 1
) => {
  return apiClient.get(`/route/${routeNumber}/${direction}/${serviceType}`)
}

export const listAllStops = () => {
  return apiClient.get('/stop/')
}

export const findStopsByRouteNumber = async (routeNumber: string, direction: KmbDirection, serviceType: 1 | 2 = 1) => {
  return apiClient.get(`/route-stop/${routeNumber}/${direction}/${serviceType}`)
}

export const findStopByStopId = async (stopId: string) => {
  return apiClient.get(`/stop/${stopId}`)
}

export const getEtaByRouteNumberAndStopId = async (
  routeNumber: string,
  stopId: string,
  serviceType: KmbServiceType = 1
) => {
  return apiClient.get(`/eta/${stopId}/${routeNumber}/${serviceType}`)
}

export const findEtaByStopId = async (stopId: string) => {
  return apiClient.get(`/stop-eta/${stopId}`)
}

export const findEtaByRouteNumber = async (routeNumber: string, serviceType: KmbServiceType) => {
  return apiClient.get(`/route-eta/${routeNumber}/${serviceType}`)
}