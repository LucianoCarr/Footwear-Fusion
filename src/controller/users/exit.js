module.exports = async (req,res) =>{
    await req.session.destroy();
    await res.cookie('footwear',null,{
        maxAge : -1
    })

    return res.redirect('/')
}