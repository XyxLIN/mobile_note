let gulp=require("gulp");
let minifyJS=require("gulp-babel-minify");
let minifyCSS=require("gulp-clean-css");
let connect=require("gulp-connect");
let sass=require("gulp-sass");
let Proxy=require("gulp-connect-proxy");
let template=require("art-template");

gulp.task("build",()=>{
        //压缩js
        gulp.src("./src/**/*.js") //读取文件
        .pipe(minifyJS()) //编译压缩处理
        .pipe(gulp.dest("./dist")) //生成到指定目录

        //复制HTML
        gulp.src("./src/**/*.html")  //读取文件
        .pipe(gulp.dest("./dist"))  //
        
        //读取scss编译
        gulp.src("./src/**/*.scss") //读取文件
        .pipe(sass({
            outputStyle : "expanded"
        })).on('error',sass.logError)
        //压缩处理
        .pipe(gulp.dest("./dist"))  //生成到指定目录

       

    
});

gulp.task("refreshHTML", ()=>{
    return  gulp.src("./src/**/*.html")
        .pipe(gulp.dest("./dist"))        
        .pipe(connect.reload());
   
});

gulp.task('refreshCSS',()=>{              
    gulp.src('./src/**/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload());
});

gulp.task("refreshJS", ()=>{
    gulp.src("./src/**/*.js")
        .pipe(minifyJS())
        .pipe(gulp.dest("./dist"))        
});
//热处理scss文件
gulp.task('refreshSCSS',()=>{                     
    gulp.src('./src/**/*.scss')
    .pipe(sass({
        outputStyle: 'expanded'
    })).on('error',sass.logError)
    .pipe(minifyCSS())
    .pipe(gulp.dest('./dist')) 
    .pipe(connect.reload());
});

gulp.task("Server",()=>{
    connect.server({
        root:"dist",
        prot:8080,
        livereload:true
    });

    gulp.watch("./src/**/*.html",["refreshHTML"]);
    gulp.watch("./src/**/*.css",["refreshHTML","refreshCSS"]);
    gulp.watch("./src/**/*.js",["refreshHTML","refreshJS"]);
    gulp.watch('./src/**/*.scss',['refreshHTML','refreshSCSS']); 
})

gulp .task('connect',function(){
    connect.server({
        root:'dist',
        port:10000,
        liverload:true,
        middleware:function(connect,opt){
            opt.route='/proxy';
            var proXY=new Proxy(opt);
            return [proXY];
        }
    });
    gulp.watch("./src/**/*.html",["refreshHTML"]);
    gulp.watch("./src/**/*.css",["refreshHTML","refreshCSS"]);
    gulp.watch("./src/**/*.js",["refreshHTML","refreshJS"]);
    gulp.watch('./src/**/*.scss',['refreshHTML','refreshSCSS']); 
})

gulp.task("proxyserver",function(){
    var exp=require('express');
    var app=exp();
    app.use(exp.static('dist'));

app.use("/all-data",function(req,res){
    let proxy=https.request({
        hostname:"www.smartisan.com",
        path:"/product",
        method:'get'
    },(response)=>{
            response.pipe(res);
        });
        proxy.on('error',(e)=>{
            console.error(`请求遇到问题:${e.message}`);            
        });
        proxy.end();
    });
    var server = app.listen(9000,function(){       
    var host = server.address().address;
    var port = server.address().port;
        console.log('http://%s:%s',host,port);
    });
})




 
 
 

    



