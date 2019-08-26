		var idx=1;
		function fnImgChange(){
			idx++;
			if(idx==1){
			     idx=2
			}
			if(idx<1){
				idx=5;
			}
			var imgTag =document.getElementById("img");
			imgTag.setAttribute("src","image/pic"+idx+".jpg");
		}