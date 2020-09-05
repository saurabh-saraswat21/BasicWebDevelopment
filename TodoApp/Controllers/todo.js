const Mongoose = require('mongoose');

module.exports = (app) => {
    const models = require('../Models/toDoDatabase')
    const todoModal = Mongoose.model('todos', models.todoSchema)

    app.get('/', (req, res) => {
        todoModal.find({}, (err, data) => {

            res.render('todo', { todos: data });
        })
    })
    app.post('/', (req, res) => {

        var newtodo = todoModal({ todo: req.body.content })
        newtodo.save().then((result) => {
            console.log("new todo created")
            res.redirect('/')
        })
    })
    app.post('/delete', (req, res) => {
        console.log(req.body)
        res.send("hello")

    })




    app
        .route("/edit/:id")
        .get((req, res) => {
            const id = req.params.id;
            todoModal.find({}, (err, result) => {
                res.render("todoUpdate.ejs", { todos: result, idTask: id });
            });
        })
        .post((req, res) => {
            const id = req.params.id;
            todoModal.findByIdAndUpdate(id, { todo: req.body.content }, err => {
                if (err) return res.send(500, err);
                res.redirect("/");
            });
        });


    app.route("/remove/:id").get((req, res) => {
        const id = req.params.id;
        todoModal.findByIdAndRemove(id, err => {
            if (err) return res.send(500, err);
            res.redirect("/");
        });
    });

}