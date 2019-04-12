// @flow
import express from 'express'
import BodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import defaultError from './middlewares/defaultError'

const app = express()

app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());
app.use(cors());
app.use(helmet());
//ADD ROUTES HERE

app.use(defaultError)
export default app
