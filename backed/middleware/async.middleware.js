export default function asyncMiddleware(fn) {
    return async (req, res, next) => {
        try {
            await fn(req, res, next);
        } catch (error) {
            return res.status(500).json({
                statusCode: 500,
                message: error.message
            })
        }
    }
}