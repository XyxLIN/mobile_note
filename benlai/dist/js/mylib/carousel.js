(function(a){a.fn.carousel=function(b){function c(){d="right"===u?window.setInterval("$.rightChangeImg();",n):"left"===u?window.setInterval("$.leftChangeImg();",n):window.setInterval("$.leftChangeImg();",n)}for(var d,e,f=Math.abs,g=b.carousel,h=b.indexContainer,j=a(g).children("li"),k=j.length,l=b.prev,m=b.next,n=b.timing,o=b.animateTime,p=b.autoPlay,q=1,r="js_index",s=!0,t=j.width()*(j.length+2),u=b.direction,v=1;v<=j.length;v++)a(h).append("<li>"+v+"</li>");a(g).width(t).append(a(j[0]).clone()).prepend(a(j[j.length-1]).clone()).css("left","-"+j.width()+"px"),j=a(g).children("li"),e=a(h).children("li"),a(e[q-1]).addClass(r),p&&(c(),a(g+","+l+","+m+","+h).hover(function(){window.clearInterval(d)},function(){c()}));a.extend({changeIndex:function(b){a(e).removeClass(r),a(e[b]).addClass(r)}}),a.extend({leftChangeImg:function(){s=!1,q==k&&(q=0,a(g).stop(!0,!0).css("left","0px")),q++,a(g).stop(!0,!0).animate({left:"-="+j.width()+"px"},o),setTimeout(function(){q==k&&(q=0,a(g).stop(!0,!0).css("left","0px")),s=!0},o),a.changeIndex(q-1)}}),a.extend({rightChangeImg:function(){s=!1,0==q&&(q=k,a(g).stop(!0,!0).css("left","-"+void 0+"px")),q--;var b=t-2*j.width();a(g).stop(!0,!0).animate({left:"+="+j.width()+"px"},o),setTimeout(function(){0==q&&(q=k,a(g).stop(!0,!0).css("left","-"+b+"px")),s=!0},o),0==q?a.changeIndex(k-1):a.changeIndex(q-1)}}),a(m).on("click",function(){var b=f(parseInt(a(g).css("left"))),c=t-2*j.width();s&&(b==c&&(q=0,a(g).stop(!0,!0).css("left","0px")),a.leftChangeImg())}),a(l).on("click",function(){var b=f(parseInt(a(g).css("left"))),c=t-2*j.width();s&&(0==b&&(q=k,a(g).stop(!0,!0).css("left","-"+c+"px")),a.rightChangeImg())}),e.on("click",function(){var b=a(this).index()+1;if(s)if(b>q){a.changeIndex(b-1),s=!1;var c=(b-q)*j.width();q=b,a(g).stop(!0,!0).animate({left:"-="+c+"px"},o),setTimeout(function(){s=!0},o)}else if(b<q){a.changeIndex(b-1),s=!1;var c=(q-b)*j.width();q=b,a(g).stop(!0,!0).animate({left:"+="+c+"px"},o),setTimeout(function(){s=!0},o)}})}})(jQuery);