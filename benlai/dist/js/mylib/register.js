require(["../config/config"],function(){require(["jquery","carousel","template","slide"],function(a){onload=function(){a(".start-slide").click(function(){a("#myCarousel").carousel("cycle")}),a(".pause-slide").click(function(){a("#myCarousel").carousel("pause")}),a(".prev-slide").click(function(){a("#myCarousel").carousel("prev")}),a(".next-slide").click(function(){a("#myCarousel").carousel("next")}),a(".slide-one").click(function(){a("#myCarousel").carousel(0)}),a(".slide-two").click(function(){a("#myCarousel").carousel(1)}),a(".slide-three").click(function(){a("#myCarousel").carousel(2)})}})});