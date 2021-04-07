
import { Sample } from "../schemas/SampleSchema";

/**
 * 
 * @param {Object} req 
 * @param {Object} res 
 */
export const storeSample = (req, res) => {
    const sample = new Sample(req.body);
    sample.save((error, result) => {
        if (error) {
            res.error(error);
        } else {
            res.success(result);
        }
    });
}