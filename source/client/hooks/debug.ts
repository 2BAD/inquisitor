import { NormalizedOptions, Response } from 'got'

export const logRequest = (options: NormalizedOptions) => {
  console.log(`-> ${options.method} - ${options.url.toString()}`)
  if (options.body) {
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    console.log(`-> BODY - ${options.body.toString()}`)
  }
  if (options.searchParams) {
    console.log(`-> PARAMS - ${options.searchParams.toString()}`)
  }
}

export const logResponse = (response: Response) => {
  console.log(`<- ${response.statusCode} - ${JSON.stringify(response.body)}`)
  return response
}
