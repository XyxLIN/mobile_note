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

        })
    })