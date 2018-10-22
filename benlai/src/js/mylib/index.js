
//配置文件
require(["../config/config"], function () {
	require(["jquery", "carousel", "template","search","cookies"], function ($,carousel,template,search,cookie) {
		// 初始化轮播  
		$(".start-slide").click(function () {
			$("#myCarousel").carousel('cycle');
		});
		// 停止轮播
		$(".pause-slide").click(function () {
			$("#myCarousel").carousel('pause');
		});
		// 循环轮播到上一个项目
		$(".prev-slide").click(function () {
			$("#myCarousel").carousel('prev');
		});
		// 循环轮播到下一个项目
		$(".next-slide").click(function () {
			$("#myCarousel").carousel('next');
		});
		// 循环轮播到某个特定的帧 
		$(".slide-one").click(function () {
			$("#myCarousel").carousel(0);
		});
		$(".slide-two").click(function () {
			$("#myCarousel").carousel(1);
		});
		$(".slide-three").click(function () {
			$("#myCarousel").carousel(2);
		});
		//AJAX请求数据
		onload=function(){		
		
			$.ajax({
				url: "http://localhost:10000/proxy/shop.nubia.com/show/page/shop",
				dataType: "json",
				success: function (datas) {
					console.log(datas);
					var goods = datas.data["202"];					
					var tempstr = template('goods-list', {list: goods});
					$("#product").html($("#product").html() + tempstr);
					console.log(datas.data["202"]);
				

					/* var goods1=datas.data["201"];
					var tempstr = template('goods-list', {list: goods1});
					$("#product").html($("#product").html() + tempstr);					
					 */
	

					//获取cookies
					$(".cart_1").click(function(e){
						var evt=e.target;
						var Obj={
							pN:evt.parentNode.children[1].innerHTML,
							pP:evt.parentNode.children[2].innerHTML,
							pAmt:1
						}
						var plist_str=getCookie("plist");	
						console.log(plist_str)		 
						var plist=null;
						if(plist_str==null){
							plist=[];
						}
							else{
								plist=JSON.parse(plist_str);
						}

						var isExist=plist.forEach(function(item){
							var res=item.pN==Obj.pN;
							if(res) item.pAmt++;
							return res;
						})
						if(!(isExist)){
							plist.push(Obj);
							console.log(plist);		
						}

						setCookie("plist", JSON.stringify(plist), 3600*24*30);

					})      
				

				}

				

			})

		}

		function getCookie(key) {
			var cookiesstr = document.cookie;
			var list = cookiesstr.split("; ");
			for(var i in list) {
				var kv = list[i].split("=");
				if(kv[0] == key) return kv[1];
			}
			return null;
		}

		function setCookie(key, value, expires, path) {
			function _setCookie_p2(key, value) {
				_setCookie_p4(key, value, "" , "");
			}
			function _setCookie_p3_exp(key, value, expires) {
				_setCookie_p4(key, value, expires , "");
			}
			function _setCookie_p3_path(key, value, path) {
				_setCookie_p4(key, value, "", path);
			}
			function _setCookie_p4(key, value, expires, path) {
				document.cookie = key + "=" + value + (expires?";expires="+expires:"") + (path?";path="+path:"");
			}
			
			switch(arguments.length) {
				case 0 : 
				case 1 : throw new Error("参数传错了！！再来依次！！加油哦");
				case 2 :  {
					_setCookie_p2(key,value);
					break;
				}
				case 3 : {
					var param = arguments[2];
					if(typeof param == "number") {
						var d = new Date();
						d.setSeconds( d.getSeconds() + param );
						_setCookie_p3_exp(key, value, d) ;
						
					} else if(typeof param == "string") {
						_setCookie_p3_path(key, value, path);
					}
					break;
				}
				case 4 : {
					var d = new Date();
					d.setSeconds( d.getSeconds() + expires );
					_setCookie_p4(key, value, expires, path);
				}
			}
		}
		
		


		//百度接口关键字搜寻
		var searchInput = document.getElementsByClassName("searchInput")[0];
		var droplist = document.getElementsByClassName("droplist")[0];
		//JSONP解决Ajax跨域问题（JSON padding）
		/*
		步骤：
			（1）先定义一个预处理数据的函数
			（2）生成一个script标签，访问接口并获取到数据交给你定义的函数处理
		* */
		//input时间  当表格发生改变时
		searchInput.addEventListener("input", function(){
			//生成一个script标签
			var sc=document.createElement("script");
			//使用script标签访问百度的接口，将数据给callback回调函数处理 wd:关键字
			
			sc.src= `http://suggestion.baidu.com/?wd=${this.value}&cb="callback1"`;
		  
			document.body.appendChild(sc);
		});
		function callback1(data){  
			console.log(data.s);
			droplist.innerHTML="";
			data.s.forEach((items,index)=>{
				//限制出去4条提示
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



		//显示购物车按钮
		$("#product").mouseover(function(){
			$("#cart_1").css({display:"block"});
		})

		/* var product=document.getElementById("product");
		var cart_1=document.getElementById("cart_1");
		product.addEventListener("mouseover",function(){
			cart_1.style.display="block";
		})
		 */
			
			$(window).scrollTop>100?$("#left_side_nav").css({display:"block"}):"";
		
		/* var side_nav=document.getElementById("left_side_nav");
		side_nav.addEventListener("DOMMouseScroll",function(e){
			if(e.scrollTop>100){
				side_nav.style.display="block";
			}
		}) */
		$("#address").on("click",function(){
			$("#Alert").css({display:"block"});
			$("#hidden").css({display:"block"});``
		})
		$("#close").on("click",function(){
			$("#Alert").css({display:"none"});
			$("#hidden").css({display:"none"});
		})
		/* var addr=document.getElementById("address");
		var hidden=document.getElementById("hidden");
		var alert=document.getElementById("Alert");
		addr.addEventListener("click",function(){
		   alert.style.display="block";
		   hidden.style.display="block";
	   }) 
	 */

	  /*  var close=document.getElementById("close");
		close.addEventListener("click",function(){
			alert.style.display="none";
			hidden.style.display="none";
		   }); */


		  //回到顶部
		   $("#top").on("click",function(){
			   $("body,html").animate({
				   scrollTop:0
			   },0);
			   if($(window).scrollTop==0)
			   $("#top").css({"display":"none"});
		   });
		   

		   //头部二维码显示
		   $("#saoma").on("click",function(){
				$("#code").children("img").css({dispaly:"block"});
		   })
 
		
		
		
	});


	


})