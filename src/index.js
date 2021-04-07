
import express from 'express';
import cors from 'cors';

import v1Routes from './routes/v1/api';

const app = express();


app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    res.success = (body, message = 'OK', statusCode = 200) => {
        res.json({status:true, message:message, data:body}, statusCode);
    }
    res.error = (body, message = 'ERROR', statusCode = 500) => {
        res.json({status:false, message:message, data:body}, statusCode);
    }
    next();
});

app.use('/api/v1', v1Routes);

app.listen(3000, () => {
    console.log(`Application listening on port 3000`);
})