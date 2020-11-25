const express = require('express')
const app = express();
const port = 3001;
const controller = require('./controllers/messages_controller')

app.use(express.json())

const baseURL = "/api/messages"

app.get(baseURL, controller.read)
app.post(baseURL, controller.create)
app.put(`${baseURL}/:user_id`, controller.update)
app.delete(`${baseURL}/:user_id`, controller.delete)



app.listen(port, () => console.log(`listening on port ${port}`))


