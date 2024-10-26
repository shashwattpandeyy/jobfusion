export default function errorHandler(err, req, res, next) {
 console.log(err)
 return res.status(err?.status || 500).send(err?.message || 'Something Went Wrong')
}