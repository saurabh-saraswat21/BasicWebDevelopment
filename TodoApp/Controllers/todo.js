module.exports=(app)=>{

    app.get('/',(req,res)=>{
        res.render('todo');
        console.log("homepage loaded")
    })

}