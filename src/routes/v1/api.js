import express from 'express';

const v1Routes = express.Router();

// controllers injection
import * as SampleController from '../../controllers/SampleController';

// validators injection
import * as SampleValidator from '../../validators/SampleValidator';

v1Routes.get('/', (req, res) => {
    res.send('V1 api works...');
});

v1Routes.post('/sample', [SampleValidator.SampleSchemaValidation], SampleController.storeSample);

module.exports = v1Routes;