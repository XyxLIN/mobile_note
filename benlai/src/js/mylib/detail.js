//配置文件
require(["../config/config"], function () {
	require(["jquery", "carousel", "template", "search"], function ($) {
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
		
	$(".square").on("click",function(e){
		var pos={
			x:e.offsetX,
			y:e.offsetY
		}
		var r_width=$(".rectangle").width;
		var r_height=$(".rectangle").height;
		var left=r_width-pos.x;
		var top=r_height-pos.y;

		console.log(left);
		var s_left=Math.min(0,Math.max(left,r_width))+"px";
		var s_top=Math.min(0,Math.max(top,r_height))+"px";

		$(".square").css({"left":s_left});
		$(".square").css({"top":s_top});
		
		
		
})

        })
    })