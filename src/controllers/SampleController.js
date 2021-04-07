
import { SampleSchema } from "../schemas/SampleSchema";

/**
 * 
 * @param {Object} req 
 * @param {Object} res 
 */
export const storeSample = (req, res) => {
    const sampleSchema = new SampleSchema(req.body);
    sampleSchema.save((error, result) => {
        if (error) {
            res.error(error);
        } else {
            res.success(result);
        }
    });
}