const errorMiddleware=(err,req,res,next)=>{

    err.statusCode=err.statusCode || 500;
    err.message=err.message || "Something went wrong!" ;
    if (err.name === 'ValidationError') {
        // Handle Mongoose validation error
        return res.status(400).json({ error: err.message });
      }
   return res.status(err.statusCode).json({
        success:false,
        message:err.message,
        stack:err.stack
    })
}
export default errorMiddleware
 