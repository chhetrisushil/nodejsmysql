var express = require('express'),
    app = express(),
    mysql = require('mysql'),
    connection = mysql.createConnection({
        host: 'localhost',
        database: 'tasklist',
        user: 'root'
    }),
    routes = require('./routes.js');
// use express.bodyParser to parse request body for post request
app.use(express.bodyParser());

// get the task list
app.get('/tasks', routes.getTasksList);

//get task by id
app.get('/task/id/:id', routes.getTaskById);
app.get('/task/id', routes.getTaskById); // if id is not specified return task list sorted by id (descending)

//get task by priority
app.get('/task/priority/:priority', routes.getTaskByPriority);
app.get('/task/priority', routes.getTaskByPriority); // if priority is not specified return task list sorted by priority (descending)

//get task by tag
app.get('/task/tag/:tag', routes.getTaskByTag);
app.get('/task/tag', routes.getTaskByTag); // if tag is not specified return task list sorted by tag (alphabetic order: ascending)

//create new task
app.post('/task/create', routes.addTask);

//update a task
app.put('/task/update/:id', routes.updateTask);

//delete a task
app.delete('/task/delete/:id', routes.deleteTask);

app.listen('3000');