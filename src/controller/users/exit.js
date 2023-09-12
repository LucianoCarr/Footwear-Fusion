module.exports = (req,res) =>{
    req.session.destroy();
    res.cookie('footwear',null,{
        maxAge : -1
    })

    return res.redirect('/')
}