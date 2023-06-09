const db = require('../connectbtl');

module.exports = function(server){
    server.get('/api/category', function(req, res){
        db.query("SELECT * FROM category", function(err, data){
            let message = null;
            if(err){
                message = err.sqlMessage;
            } else{
                res.send({
                    result: data
                })
            }
        });
    });
    
    server.delete('/api/category/:id', function(req, res){
        let id = req.params.id;
        let SQL = "DELETE FROM category WHERE id = ?";
        db.query(SQL, [id], function(err, data){
            if (!err) {
                res.send({
                    result: data
                })
            }
        });
    }); 
    
    server.post('/api/category', function(req, res){
        let formData = req.body;
        let sql = "INSERT INTO category SET ?";
        db.query(sql, [formData], function(err, data){
            formData.id = data.insertId;
            if (!err) {
                res.send({
                    result: formData
                })
            }
        });
    });
    
    server.get('/api/category/:id', function(req, res){
        let id = req.params.id;
        let SQL = "SELECT * FROM category WHERE id = ?";
        db.query(SQL, [id], function(err, data){
            res.send({
                result: data.length ? data[0]: null,
            })
        });
    });
    
    server.put('/api/category/:id', function(req, res){
        let formData = req.body;
        let id = req.params.id;
        let sql = "UPDATE category SET ? WHERE id = ?";
        db.query(sql, [formData, id], function(err, data){
            formData.id = id;
            if (!err) {
                res.send({
                    result: formData,
                    message: 'Cập nhật thành công'
                })
            }
        });
    });
}