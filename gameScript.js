
   var  flag1,flag2=0,flag3,stop=0;
   var shag=1;
   var arr=[];
   var audio=new Audio();
   var timeId;
   var count=0;
   
   
   
   function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random()*(max - min + 1)
    rand = Math.round(rand);
    return rand;
   }
   
   $('button').click(function(){
    if($(this).val()=="1"){
	 $('#b1').attr('disabled','disabled');
	 $('#b1').addClass('displaynone');
	 $('#b2').removeAttr('disabled');
	 $('#b2').removeClass('displaynone');
	 $('#in1').removeAttr('disabled');
	 $('#in2').removeAttr('disabled');
	 $('#in1').addClass('active');
	 $('#in2').addClass('active');
	 flag1=1;
	}
	else{
	 $('#b2').attr('disabled','disabled');
	 $('#in1').attr('disabled','disabled');
	 $('#in2').attr('disabled','disabled');
	 $('#b2').addClass('displaynone');
	 $('#b1').removeAttr('disabled');
	 $('#b1').removeClass('displaynone');
	 $('#in1').removeClass('active');
	 $('#in2').removeClass('active');
	 flag1=0;
	}
   });
  
   $("#in2").toggle(function(){
      $(this).css('background-color','red');
	  flag2=1;
   },function(){
      $(this).css('background-color','green');
	  flag2=0;
   });
   
   function knopka(numberButton,color1,color2,urlSing){
       $("#button"+numberButton).css('background-color',color1);
	   audio.src=urlSing;
	   audio.play();
	   timeId=setTimeout(function(){$("#button"+numberButton).css('background-color',color2);},500);
   }
    
   function oneGame(k,z){
    switch(k){
	  case 1:{
	   knopka(1,'#f2151c','#910e12','https://s3.amazonaws.com/freecodecamp/simonSound1.mp3')
	  }
	  break;
	  case 2:{
	   knopka(2,'#26f41d','#126b0e','https://s3.amazonaws.com/freecodecamp/simonSound2.mp3')
	  }
	  break;
	  case 3:{
	   knopka(3,'#fff219','#ccc214','https://s3.amazonaws.com/freecodecamp/simonSound3.mp3')
	  }
	  break;
	  case 4:{
	   knopka(4,'#1c2aff','#151a66','https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
	  }
	  break;
	 }
   }
  
   
  
  $('#in1').click(function(){
  if(stop==0){
   clearTimeout(timerId2);
   arr=[];
   count=0;
   $("#target8").html('1');
   for(var t=0;t<19;t++){
     arr.push(randomInteger(1,4)); 
   }
   var i=0;   
   var timerId2=setTimeout(function qqq(){
   stop=1;
	 oneGame(arr[i]);
	 setTimeout(function(){i++;},500);
	 if(i===count){stop=0;clearTimeout(timerId);}
	 timerId2=setTimeout(qqq,850);
    }, 550);
   }
   });

   var j=0;
   
   $('div.button').click(function(){
    if(stop==0){
     var k=+$(this).attr('value');
	 if(k==arr[j]){
	  oneGame(k);
	  j++;
	 }
	 else{
	  if(flag2==0){
	  alert("Попробуйте еще разок)");
	   var i=0; 
       j=0;	  
       var timerId3=setTimeout(function qqq(){
	   stop=1;
	   oneGame(arr[i]);
	   setTimeout(function(){i++;},500);
       if(i===count){i=0;stop=0;clearTimeout(timerId);}
	   timerId3=setTimeout(qqq,850);
       }, 550);
	  }
	  else{
	   alert("You lose...");
	   i=0;
	   j=0;
	   count=0;
	   $("#target8").html('1');
	  }
	 }
	 var timerId4=setTimeout(function qqqq(){
       if(k==arr[count]&&j==count+1){
	    i=0;
	    j=0;
		count++;
		$("#target8").html(count+1);
	    var timerId2=setTimeout(function qqq(){
		stop=1;
	    oneGame(arr[i]);
	    setTimeout(function(){i++;},500);
	    if(i===count){stop=0;clearTimeout(timerId);}
	    timerId2=setTimeout(qqq,850);
        }, 2500);
	   } 
	 },500)
	}
   });
   $('div.button,#center').mouseenter(function(){
    if(count==20){
	 alert('You win!');
	 i=0;
	 j=0;
	 arr=[];
     count=0;
     $("#target8").html('1');
	}
   });