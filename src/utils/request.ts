import axios, { AxiosResponse, Method } from 'axios'

export interface requestProps {
  api: string
  prop?: any
}

export type responseProps = AxiosResponse

//#region api general wrapper
const apiWrapper = async (
  api: string,
  method: Method
): Promise<responseProps> => {
  const url = api

  const response: responseProps = await axios({
    method,
    url,
  })

  return response
}
//#endregion

export const GET = async (config: requestProps) => {
  const { api } = config
  return apiWrapper(api, 'GET')
}

export default class request {
  static get = GET
}
