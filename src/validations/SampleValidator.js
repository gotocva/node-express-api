

const schema = Joi.object({
    name: Joi.string(),
    email: Joi.email(),
});

/**
 * 
 * @param {Object} req 
 * @param {Object} res 
 * @param {Object} next
 */
export const SampleSchemaValidation = (req, res, next) => {
    const { error, value } = schema.validate(req.body);
    if (error == undefined) {
        // validation success
        next();
    } else {
        res.error(error, 'Validation failed', 400);
    }
}