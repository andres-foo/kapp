import express from "express"
import { engine } from "express-handlebars"
import routes from "./src/routes.js"
import path from "path"
import { fileURLToPath } from 'url'

const app = express()

app.use('/', routes)

const __dirname = path.dirname(fileURLToPath(import.meta.url))
app.use(express.static(path.join(__dirname, '/public')))

app.engine("handlebars", engine())
app.set("view engine", "handlebars")
app.set("views", "./src/views")


app.listen(3000)
