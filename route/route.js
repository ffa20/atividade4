module.exports = app => {
  
    const controller = require("../controllers/controller.js");
    
    var router = require("express").Router()
    
    router.get("/", controller.findall)
    router.get("/ojogo", controller.findojogo)
    router.get("/tribunaexpresso", controller.findtribunaexpresso)
    router.get("/tsf", controller.findtsf)
    router.post("/registar", controller.registar);
    router.post("/login", controller.login);  
    router.get("/auth/confirm/:confirmationCode", controller.verificaUtilizador);  

    app.use('/news', router);
    
    };

