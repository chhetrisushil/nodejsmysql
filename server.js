var express = require('express'),
    app = express(),
    mysql = require('mysql'),
    connection = mysql.createConnection({
        host: 'localhost',
        database: 'tasklist',
        user: 'root'
    }),
    routes = require('./routes.js');

// get the task list
app.get('/tasks', routes.getTasksList);

//get task by id
app.get('/tasks/id/:id', routes.getTaskById);
app.get('/tasks/id', routes.getTaskById); // if id is not specified return task list sorted by id (descending)

//get task by priority
app.get('/tasks/priority/:priority', routes.getTaskByPriority);
app.get('/tasks/priority', routes.getTaskByPriority); // if priority is not specified return task list sorted by priority (descending)

//get task by tag
app.get('/tasks/tag/:tag', routes.getTaskByTag);
app.get('/tasks/tag', routes.getTaskByTag); // if tag is not specified return task list sorted by tag (alphabetic order: ascending)

//create new task
app.post('/tasks', routes.addTask);

//update a task
app.put('/tasks/:id', routes.updateTask);

//delete a task
app.delete('/tasks/:id', routes.deleteTask);

app.listen('3000');