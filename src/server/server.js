import express from 'express'
import * as ReactDOMServer from 'react-dom/server'

import { indexTemplate } from './indexTemplate'

import { App } from '@/App.tsx'

const app = express()

app.use('/static', express.static('./dist/client'))

app.get('*', (req, res) => {
    res.send(indexTemplate(ReactDOMServer.renderToString(App())))
})

app.listen(3000, () => {
    console.log('server started on port http://localhost:3000/')
})
