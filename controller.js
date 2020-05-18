'use string';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req, res){
    response.ok("Aplikasi REST API ku Berjalan",res)
};

//menampilkan semua data bengkel

exports.tampilsemuadatabengkel = function(req,res){
    connection.query('SELECT * FROM t_user', function(error, rows, fileds){
        if(error){
            connection.log(error);
        }
        else {
            response.ok(rows, res)
             }
      
    });
};