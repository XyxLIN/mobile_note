define([],function(){
    var searchInput = document.getElementsByClassName("input-box")[0];
    var droplist = document.getElementsByClassName("droplist")[0];
    searchInput.addEventListener("input", function(){
        //生成一个script标签
        var sc=document.createElement("script");
        //使用script标签访问百度的接口，将数据给callback回调函数处理 wd:关键字
        
        sc.src= `http://suggestion.baidu.com/?wd=${this.value}&cb="callback"`;
      
        document.body.appendChild(sc);
    });
     function callback(data){  
        console.log(data.s);
        droplist.innerHTML="";
        data.s.forEach((items,index)=>{
            //限制显示4条数据
            if(index<4){
                var li=document.createElement("li");
                li.innerHTML=items;
                droplist.appendChild(li);
                li.onclick=function () {
                    searchInput.value=li.innerHTML;
                    droplist.style.display="none";
                };
                droplist.style.display="block";
            }
        });

    }
})