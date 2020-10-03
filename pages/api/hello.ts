// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { IncomingMessage, ServerResponse } from 'http'

export default (request: IncomingMessage, response: ServerResponse): void => {
    response.statusCode = 200
    response.end(JSON.stringify({ name: 'John Doe' }))
}
