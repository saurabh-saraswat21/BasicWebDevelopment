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
        console.log("homepage loaded")
    })
    app.post('/additem',(req,res)=>{

    })

}