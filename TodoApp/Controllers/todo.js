const  Mongoose  = require('mongoose');

module.exports=(app)=>{
    const models = require('../Models/toDoDatabase')
    const todoModal = Mongoose.model('todos',models.todoSchema)

    app.get('/',(req,res)=>{
        res.render('todo');
    })
    app.post('/', (req,res)=>{
        
        var newtodo = todoModal({todo:req.body.content})
        newtodo.save().then((result) => {
            console.log("new todo created")
            res.redirect('/')
        })
    })
    app.post('/delete',(req,res)=>{
        console.log(req.body)
        res.send("hello")
        
    })

}