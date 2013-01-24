var mysql = require('mysql'),
    connection = mysql.createConnection({
        host: 'localhost',
        database: 'tasklist',
        user: 'root'
    }),
    Routes = {
    getTasksList: function (req, res) {
        connection.query('SELECT * from taskitems', function (err, rows, fields) {
            if (err) {
                console.log('error: ', err);
                return;
            }
            
            res.end(JSON.stringify({
                success: true,
                totalRows: rows.length,
                query: '/tasks',
                resultSet: rows
            }));
            /* for (var i = 0, len = rows.length, row; i < len; i++) {
                row = rows[i];
                for (var j in row) {
                    if (row.hasOwnProperty(j)) {
                        console.log(j, '------>', row[j]);
                    }
                }
                
                console.log('\n');
            } */
        });
    },
    
    addTask: function (req, res) {
        console.log(req.body);
        res.end(JSON.stringify(req.body));
    },
    
    getTaskById: function (req, res) {
        var id = req.params.id,
            result;
        if (!id) {
            connection.query('SELECT * from taskitems ORDER BY taskid', function (err, rows, fields) {
                if (err) {
                    console.log('error: ', err);
                    return;
                }
                
                res.end(JSON.stringify({
                    success: true,
                    totalRows: rows.length,
                    query: '/id/',
                    resultSet: rows
                }));
            });
        } else {
            connection.query('SELECT * from taskitems WHERE taskid='+id, function (err, rows, fields) {
                var result;
                if (err) {
                    console.log('error: ', err);
                    return;
                }
                if (rows.length) {
                    result = JSON.stringify({
                        success: true,
                        totalRows: rows.length,
                        query: '/tag/'+id,
                        resultSet: rows
                    });
                } else {
                    result = JSON.stringify({
                        success: false,
                        totalRows: 0,
                        query: '/tag/'+id,
                        resultSet: []
                    });
                }
                res.end(result);
            });
        }
    },
    
    getTaskByPriority: function (req, res) {
        var priority = req.params.priority;
        
        if (!priority) {
            connection.query('SELECT * from taskitems ORDER BY priority', function (err, rows, fields) {
                if (err) {
                    console.log('error: ', err);
                    return;
                }
                console.log(fields);
                res.end(JSON.stringify({
                    success: true,
                    totalRows: rows.length,
                    query: '/priority/',
                    resultSet: rows
                }));
            });
        } else {
            connection.query('SELECT * from taskitems WHERE priority="'+priority+'"', function (err, rows, fields) {
                var result;
                if (err) {
                    console.log('error: ', err);
                    return;
                }
                if (rows.length) {
                    result = JSON.stringify({
                        success: true,
                        totalRows: rows.length,
                        query: '/priority/'+priority,
                        resultSet: rows
                    });
                } else {
                    result = JSON.stringify({
                        success: false,
                        totalRows: 0,
                        query: '/priority/'+priority,
                        resultSet: []
                    });
                }
                res.end(result);
            });
        }
    },
    
    getTaskByTag: function (req, res) {
        var tag = req.params.tag;
        
        if (!tag) {
            connection.query('SELECT * from taskitems ORDER BY tag', function (err, rows, fields) {
                if (err) {
                    console.log('error: ', err);
                    return;
                }
                console.log(fields);
                res.end(JSON.stringify({
                    success: true,
                    totalRows: rows.length,
                    query: '/tag/',
                    resultSet: rows
                }));
            });
        } else {
            connection.query('SELECT * from taskitems WHERE tag="'+tag+'"', function (err, rows, fields) {
                var result;
                if (err) {
                    console.log('error: ', err);
                    return;
                }
                if (rows.length) {
                    result = JSON.stringify({
                        success: true,
                        totalRows: rows.length,
                        query: '/tag/'+tag,
                        resultSet: rows
                    });
                } else {
                    result = JSON.stringify({
                        success: false,
                        totalRows: 0,
                        query: '/tag/'+tag,
                        resultSet: []
                    });
                }
                res.end(result);
            });
        }
    },
    
    updateTask: function (req, res) {
        var id = req.params.id;
        
        res.end(id);
    },
    
    deleteTask: function (req, res) {
        var id = req.params.id;
        
        res.end(id);
    }
};

module.exports = Routes;