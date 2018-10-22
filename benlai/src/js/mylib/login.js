//配置文件
require(["../config/config"], function () {
	require(["jquery", "carousel", "template", "search","slide","cookies"], function ($,carousel,template,search,slide,cookie) {
		// 初始化轮播  
		onload=function(){
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
		var d=new Date();
		d.setDate(d.getDate()+30);
		document.cookie="e_mail="+$("#emil").val()+"; expires="+d+"; path=/";
		document.cookie="passwd="+$("#pass").val()+"; expires="+d+"; path=/";
		console.log(document.cookie)	
		$("#emil").blur(
				function(){
					if(!($("emil").val()=='/^[^@\s\?]+@[^@\s\?]+(\.[^@\s\?]+)+$/'||
					$("#emil").val()=='/^1(3|5|8|7|4)\d{9}$/')||
					$("#emil").val()==getCookie("e_mail")){
						$(".font").css({display:"block"});
						$("#emil").css({color:"red"});
						$("#icon").css({"background-position":"0px -135px"});				
					}
					else {
						$("#icon").css({"background-position":"0px -100px"});
					}
				
				})
				
				
	

			


        })
    })