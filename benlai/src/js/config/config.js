
requirejs.config({
    baseUrl:"http://localhost:10000",
    paths:{
        "jquery":"https://cdn.bootcss.com/jquery/2.2.4/jquery",
        "carousel":"https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min",
        "slide":"/js/config/slide",
        "search":"/js/config/search_word",
        "template":"../../pages/template/template-web",
        "cookies":"/js/config/cookie"
           
    },
    shim: {
        "carousel" : {
            deps : ["jquery"]
        }
    } 


})