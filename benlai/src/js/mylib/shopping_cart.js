//配置文件
require(["../config/config"],function(){
    require(["jquery", "carousel","template","search","cookies"],function($,carousel,template,sreach,cookies){

		onload=function(){
			// 初始化轮播
		$(".start-slide").click(function(){
			$("#myCarousel").carousel('cycle');
		});
		// 停止轮播
		$(".pause-slide").click(function(){
			$("#myCarousel").carousel('pause');
		});
		// 循环轮播到上一个项目
		$(".prev-slide").click(function(){
			$("#myCarousel").carousel('prev');
		});
		// 循环轮播到下一个项目
		$(".next-slide").click(function(){
			$("#myCarousel").carousel('next');
		});
		// 循环轮播到某个特定的帧 
		$(".slide-one").click(function(){
			$("#myCarousel").carousel(0);
		});
		$(".slide-two").click(function(){
			$("#myCarousel").carousel(1);
		});
		$(".slide-three").click(function(){
			$("#myCarousel").carousel(2);
		});
	}
		
		//cookie设置
		var cookieData=getCookie("plist");
		console.log(cookieData);
		
		
		

		

		function getCookie(key) {
			var cookiesstr = document.cookie;
			var list = cookiesstr.split("; ");
			for(var i in list) {
				var kv = list[i].split("=");
				if(kv[0] == key) return kv[1];
			}
			return null;
		}
		

		




		
		
	});
	
})