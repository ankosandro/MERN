
import express from 'express';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    return res.send('Hello the world')
})
app.listen(port, () => {
    console.log('NodeJS is running on port :' + port);
})