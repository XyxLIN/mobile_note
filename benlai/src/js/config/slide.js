define([],function(){
	
		var v_move = document.getElementsByClassName("v-move")[0];
		var v_over = document.getElementsByClassName("v-over")[0];
		var v_tip = document.getElementsByClassName("v-tip")[0];
		onload=function(){
			v_move.onmousedown = function(e) {
				var e = e || event;
				var mousePos = {
					x : e.offsetX,
					y : e.offsetY
				}
				
				document.onmousemove = function(e){
					var e = e || event;
					var _left = (e.clientX-v_move.parentNode.offsetLeft) - mousePos.x;
					var _maxval = v_move.parentNode.offsetWidth-v_move.offsetWidth;
					v_over.style.width = v_move.style.left = Math.min( _maxval ,Math.max(0, _left)) + "px";
				}
				
			}
			document.onmouseup = function(){
				document.onmousemove = null;
				//是否滑动成功
				if( v_move.offsetLeft == (v_move.parentNode.offsetWidth-v_move.offsetWidth)) {
					v_over.style.backgroundColor ="#91be16";
					v_tip.innerText = "验证通过";
					v_move.onmousedown = null;
					document.onmouseup = null;
				} else {
					v_over.style.width = 0;
					v_move.style.left = 0;
				}
			}

		}
		
	
	
})