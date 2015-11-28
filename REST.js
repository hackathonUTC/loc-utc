var mysql = require("mysql");
function REST_ROUTER(router,connection) {
    var self = this;
    self.handleRoutes(router,connection);
}

REST_ROUTER.prototype.handleRoutes= function(router,connection) {
    router.get("/",function(req,res){
           res.json({"Message" : "Hello World !"});
    });
    router.post("/user",function(req,res){
        var query = "INSERT INTO ??(??) VALUES (?)";
        var table = ["user","id_etu",req.body.id_etu];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "User Added !"});
            }
        });
    });
    router.post("/reservation",function(req,res){
        var query = "INSERT INTO ??(??,??,??,??,??) VALUES (?,?,?,?,?)";
        var table = ["reservation","item_key","user_key","debut","fin","nbr_item",req.body.item_key,req.body.user_key,req.body.debut,req.body.fin,req.body.nbr_item];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Reservation Added !"});
            }
        });
    });
    router.post("/item",function(req,res){
        var query = "INSERT INTO ??(??,??,??,??,??) VALUES (?,?,?,?,?)";
        var table = ["item","categorie_key","nom","details","caution","dispo",req.body.categorie_key,req.body.nom,req.body.details,req.body.caution,req.body.dispo];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Item Added !"});
            }
        });
    });
    router.get("/item/:nom",function(req,res){
        var query = "SELECT * FROM ?? WHERE ??=?";
        var table = ["item","nom",req.params.nom];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "Item" : rows});
            }
        });
    });
    router.get("/items/:categorie_key",function(req,res){
        var query = "SELECT * FROM ?? WHERE ??=?";
        var table = ["item","categorie_key",req.params.categorie_key];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "Item" : rows});
            }
        });
    });
    router.get("/items",function(req,res){
        var query = "SELECT * FROM ??";
        var table = ["item"];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "Items" : rows});
            }
        });
    });
    router.get("/reservations/:user_key",function(req,res){
        var query = "SELECT * FROM ?? WHERE ??=?";
        var table = ["reservation","user_key",req.params.user_key];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "Reservations" : rows});
            }
        });
    });
    router.get("/categories",function(req,res){
        var query = "SELECT * FROM ??";
        var table = ["categorie"];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "Categories" : rows});
            }
        });
    });
}

module.exports = REST_ROUTER;