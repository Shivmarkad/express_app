import express from 'express';
import routes from './routes/index.js';

const app = express();

app.use('/api',routes())

app.listen(3000,()=>{
    console.log('app is listening on port 3000');
})

export default app;