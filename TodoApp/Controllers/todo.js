var list =[
    
        {item:'todo1'},
        {

            item:'todo2'
        },
        {

            item:'todo3'
        },
        {

            item:'todo4'
        }

    
]



module.exports=(app)=>{

    app.get('/',(req,res)=>{
        res.render('todo',{todolist:list});
    })
    app.post('/',(req,res)=>{
        
        console.log(req.body);
        res.redirect('/')

    })
    app.post('/delete',(req,res)=>{
        console.log(req.body)
        res.send("hello")
        
    })

}