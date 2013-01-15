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
            
            res.end(JSON.stringify(rows));
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
        res.end();
    },
    
    getTaskById: function (req, res) {
        var id = req.params.id;
        
        res.end(id);
    },
    
    getTaskByPriority: function (req, res) {
        var priority = req.params.priority;
        
        res.end(priority);
    },
    
    getTaskByTag: function (req, res) {
        var tag = req.params.tag;
        
        res.end(tag);
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