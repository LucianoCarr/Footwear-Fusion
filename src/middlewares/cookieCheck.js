module.exports=(req,res,next) =>{
    if(req.cookies.footwear){
        req.session.userLogin = req.cookies.footwear
    }
    next()
}