const db = require('../connectbtl');

module.exports = function(server){
    server.get('/category', function(req, res){
        db.query("SELECT * FROM category", function(err, data){
            let message = null;
            if(err){
                message = err.sqlMessage;
            } else{
                res.render('category/category', {
                    data: data
                });
            }
        });
    });
    
    server.post('/category', function(req, res){
        let formname = req.body.name;
        let SQL = "SELECT * FROM category WHERE name like ?";
        db.query(SQL, [`%` + formname + `%`], function(err, data){
            if(formname == 0){
                res.redirect('/category')
            } else{
                res.render('category/category', {
                    data: data
                });
            }
        });
    });
    
    server.get('/delete-category/:id', function(req, res){
        let id = req.params.id;
        let SQL = "DELETE FROM category WHERE id = ?";
        db.query(SQL, [id], function(err, data){
            let message = null;
            if(err){
                message = err.sqlMessage;
                res.render('category/category-error', {
                    message: message
                });
            } else{
                res.redirect('/category');
            }
        });
    });
    
    server.get('/create-category', function(req, res){
        res.render('category/create-category');
    });
    
    server.post('/create-category', function(req, res){
        let formData = req.body;
        let sql = "INSERT INTO category SET ?";
        db.query(sql, [formData], function(err, data){
            if (!err) {
                res.redirect('/category');
            } else {
            }
        });
    });

    
    server.get('/update-category/:id', function(req, res){
        let id = req.params.id;
        let SQL = "SELECT * FROM category WHERE id = ?";
        db.query(SQL, [id], function(err, data){
            res.render('category/update-category', {
                cat: data.length ? data[0] : null,
            });
        });
    });
    
    server.post('/update-category/:id', function(req, res){
        let formData = req.body;
        let id = req.params.id;
        let sql = "UPDATE category SET ? WHERE id = ?";
        db.query(sql, [formData, id], function(err, data){
            if (!err) {
                res.redirect('/category');
            }
        });
    });
}
