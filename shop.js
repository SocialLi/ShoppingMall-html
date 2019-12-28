window.onload = function() { 
	$('#fullpage').fullpage(
	{
		sectionsColor:['#fff','#fff','#fff','#fff'],
		verticalCentered:false,
		scrollingSpeed:1000,
		anchors:['page1','page2','page3','page4'],
	}
	);

	var prev=document.getElementById('prev');
	var next=document.getElementById('next');
	var aLi=document.getElementById('slide').getElementsByTagName('li');
	var now=0;
	var coming=0;
	var timer=null;
	
	function toImg(){
		aLi[now].style.opacity='0';
		aLi[coming].style.opacity='1';
		now=coming;
		var h = aLi[coming].getElementsByTagName('h2');
		var pcoming = aLi[coming].getElementsByTagName('p');
		var buy = aLi[coming].getElementsByTagName('button');
		for(var i=0;i<aLi.length;i++){
				aLi[i].style.zIndex='0';
				var h2 = aLi[i].getElementsByTagName('h2');
				var pnow = aLi[i].getElementsByTagName('p');
				var buy2 = aLi[i].getElementsByTagName('button');
				h2[0].style.marginRight = '-550px';
				pnow[0].style.marginRight = '-600px';
				pnow[1].style.marginRight = '-550px';
				pnow[2].style.marginRight = '-550px';
				buy2[0].style.marginRight = '-550px';
			}
			aLi[coming].style.zIndex='1';
			h[0].style.marginRight = '0';
			pcoming[0].style.marginRight = '0';
			pcoming[1].style.marginRight = '0';
			pcoming[2].style.marginRight = '0';
			buy[0].style.marginRight = '0';
		}
	function autoplay(){
		timer=setInterval(function(){
			if(coming==aLi.length-1){
				coming=0;
			}else{
				coming++;
			}
			toImg();
		},6000);
	}
	autoplay();
	prev.onclick=function(){
		if(coming==0){
			coming=aLi.length-1;
		}else{
			coming--;
		}
		toImg();
	}
	next.onclick=function(){
		if(coming==aLi.length-1){
			coming=0;
		}else{
			coming++;
		}
		toImg();
	}




	var listone=document.getElementById('listone');
	var listin=document.getElementById('listin');
	var button=document.getElementById('button');
	var time2 = null;
	button.onmouseout = function hide(){
		time2 = setTimeout(function(){
			listone.style.zIndex = '0';
		},700);
	}
	button.onmouseover = function show(){
		listone.style.zIndex = '10';
		clearTimeout(time2);
	}
	listin.onmouseover = function show(){
		clearTimeout(time2);
	}

	var listone1=document.getElementById('listone1');
	var listin1=document.getElementById('listin1');
	var button1=document.getElementById('button1');
	var time1 = null;
	button1.onmouseout = function hide(){
		time1 = setTimeout(function(){
			listone1.style.zIndex = '0';
		},700);
	}
	button1.onmouseover = function show(){
		listone1.style.zIndex = '10';
		clearTimeout(time1);
	}
	listin1.onmouseover = function show(){
		clearTimeout(time1);
	}

	
	
	var listone2=document.getElementById('listone2');
	var listin2=document.getElementById('listin2');
	var button2=document.getElementById('button2');
	var time3 = null;
	button2.onmouseout = function hide(){
		time3 = setTimeout(function(){
			listone2.style.zIndex = '0';
		},700);
	}
	button2.onmouseover = function show(){
		listone2.style.zIndex = '10';
		clearTimeout(time3);
	}
	listin2.onmouseover = function show(){
		clearTimeout(time3);
	}


	var add1=document.getElementById('number1').getElementsByTagName('button');
	var number1=document.getElementById('number1').getElementsByTagName('input');
	var add2=document.getElementById('number2').getElementsByTagName('button');
	var number2=document.getElementById('number2').getElementsByTagName('input');
	var add3=document.getElementById('number3').getElementsByTagName('button');
	var number3=document.getElementById('number3').getElementsByTagName('input');
	var add4=document.getElementById('number4').getElementsByTagName('button');
	var number4=document.getElementById('number4').getElementsByTagName('input');
	add1[1].onclick=function(){
		number1[0].value = parseInt(number1[0].value)+1;
	}
	add1[0].onclick=function(){
		if(number1[0].value == 1)
			return;
		else
			number1[0].value -= 1;
	}
	add2[1].onclick=function(){
		number2[0].value = parseInt(number2[0].value)+1;
	}
	add2[0].onclick=function(){
		if(number2[0].value == 1)
			return;
		else
			number2[0].value -= 1;
	}
	add3[1].onclick=function(){
		number3[0].value = parseInt(number3[0].value)+1;
	}
	add3[0].onclick=function(){
		if(number3[0].value == 1)
			return;
		else
			number3[0].value -= 1;
	}
	add4[1].onclick=function(){
		number4[0].value = parseInt(number4[0].value)+1;
	}
	add4[0].onclick=function(){
		if(number4[0].value == 1)
			return;
		else
			number4[0].value -= 1;
	}

	var Black=document.getElementById('black');
	var pictures=document.getElementById('pictures1').getElementsByTagName('img');
	var smalls=document.getElementById('small_p1').getElementsByTagName('li');
	smalls[0].onmouseover = function(){
		for(var i=0;i<5;i++){
			pictures[i].style.display = 'none';
		}
		pictures[0].style.display = 'block';
	}
	smalls[1].onmouseover = function(){
		for(var i=0;i<5;i++){
			pictures[i].style.display = 'none';
		}
		pictures[1].style.display = 'block';
	}
	smalls[2].onmouseover = function(){
		for(var i=0;i<5;i++){
			pictures[i].style.display = 'none';
		}
		pictures[2].style.display = 'block';
	}
	smalls[3].onmouseover = function(){
		for(var i=0;i<5;i++){
			pictures[i].style.display = 'none';
		}
		pictures[3].style.display = 'block';
	}
	smalls[4].onmouseover = function(){
		for(var i=0;i<5;i++){
			pictures[i].style.display = 'none';
		}
		pictures[4].style.display = 'block';
	}
	var show=document.getElementById('show');
	var li1=document.getElementById('li1');
	var close1=document.getElementById('close1');
	show.onclick = function(){
		li1.style.display = 'block';
		Black.style.display = 'block';
	}
	close1.onclick = function(){
		li1.style.display = 'none';
		Black.style.display = 'none';
	}


	var pictures3=document.getElementById('pictures3').getElementsByTagName('img');
	var smalls3=document.getElementById('small_p3').getElementsByTagName('li');
	smalls3[0].onmouseover = function(){
		for(var i=0;i<5;i++){
			pictures3[i].style.display = 'none';
		}
		pictures3[0].style.display = 'block';
	}
	smalls3[1].onmouseover = function(){
		for(var i=0;i<5;i++){
			pictures3[i].style.display = 'none';
		}
		pictures3[1].style.display = 'block';
	}
	smalls3[2].onmouseover = function(){
		for(var i=0;i<5;i++){
			pictures3[i].style.display = 'none';
		}
		pictures3[2].style.display = 'block';
	}
	smalls3[3].onmouseover = function(){
		for(var i=0;i<5;i++){
			pictures3[i].style.display = 'none';
		}
		pictures3[3].style.display = 'block';
	}
	smalls3[4].onmouseover = function(){
		for(var i=0;i<5;i++){
			pictures3[i].style.display = 'none';
		}
		pictures3[4].style.display = 'block';
	}
	var show3=document.getElementById('show3');
	var li3=document.getElementById('li3');
	var close3=document.getElementById('close3');
	show3.onclick = function(){
		li3.style.display = 'block';
		Black.style.display = 'block';
	}
	close3.onclick = function(){
		li3.style.display = 'none';
		Black.style.display = 'none';
	}


	var pictures2=document.getElementById('pictures2').getElementsByTagName('img');
	var smalls2=document.getElementById('small_p2').getElementsByTagName('li');
	smalls2[0].onmouseover = function(){
		for(var i=0;i<5;i++){
			pictures2[i].style.display = 'none';
		}
		pictures2[0].style.display = 'block';
	}
	smalls2[1].onmouseover = function(){
		for(var i=0;i<5;i++){
			pictures2[i].style.display = 'none';
		}
		pictures2[1].style.display = 'block';
	}
	smalls2[2].onmouseover = function(){
		for(var i=0;i<5;i++){
			pictures2[i].style.display = 'none';
		}
		pictures2[2].style.display = 'block';
	}
	smalls2[3].onmouseover = function(){
		for(var i=0;i<5;i++){
			pictures2[i].style.display = 'none';
		}
		pictures2[3].style.display = 'block';
	}
	smalls2[4].onmouseover = function(){
		for(var i=0;i<5;i++){
			pictures2[i].style.display = 'none';
		}
		pictures2[4].style.display = 'block';
	}
	var show2=document.getElementById('show2');
	var li2=document.getElementById('li2');
	var close2=document.getElementById('close2');
	show2.onclick = function(){
		li2.style.display = 'block';
		Black.style.display = 'block';
	}
	close2.onclick = function(){
		li2.style.display = 'none';
		Black.style.display = 'none';
	}


	var pictures4=document.getElementById('pictures4').getElementsByTagName('img');
	var smalls4=document.getElementById('small_p4').getElementsByTagName('li');
	smalls4[0].onmouseover = function(){
		for(var i=0;i<5;i++){
			pictures4[i].style.display = 'none';
		}
		pictures4[0].style.display = 'block';
	}
	smalls4[1].onmouseover = function(){
		for(var i=0;i<5;i++){
			pictures4[i].style.display = 'none';
		}
		pictures4[1].style.display = 'block';
	}
	smalls4[2].onmouseover = function(){
		for(var i=0;i<5;i++){
			pictures4[i].style.display = 'none';
		}
		pictures4[2].style.display = 'block';
	}
	smalls4[3].onmouseover = function(){
		for(var i=0;i<5;i++){
			pictures4[i].style.display = 'none';
		}
		pictures4[3].style.display = 'block';
	}
	smalls4[4].onmouseover = function(){
		for(var i=0;i<5;i++){
			pictures4[i].style.display = 'none';
		}
		pictures4[4].style.display = 'block';
	}
	var show4=document.getElementById('show4');
	var li4=document.getElementById('li4');
	var close4=document.getElementById('close4');
	show4.onclick = function(){
		li4.style.display = 'block';
		Black.style.display = 'block';
	}
	close4.onclick = function(){
		li4.style.display = 'none';
		Black.style.display = 'none';
	}



	var disappear=document.getElementById('disappear');
	var back=document.getElementById('back'); 
	disappear.onmouseover=function(){
		back.style.display='none';
	}
	disappear.onmouseout=function(){
		back.style.display='block';
	}
}; 