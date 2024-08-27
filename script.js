setInterval(() => {
    document.getElementById('clock').innerHTML ='<img style=" width:5vh;" src="assets/pin.png">' +Date().split(' ')[4]+'<img style=" width:5vh;" src="assets/pin.png">';
}, 1000);

function hey() {
  
    document.getElementById('date').innerHTML ='<img style=" width:5vh;" src="assets/pin.png">' + Date().split(' ')[2] + ' ' + Date().split(' ')[1] + ' ' + Date().split(' ')[3]+'<img style=" width:5vh; "src="assets/pin.png">' ;

}

function badtouch(){
    el=document.documentElement
    if (!document.webkitIsFullScreen){
    el.requestFullscreen.call(el)}
    else{
        document.exitFullscreen()
    }
}

function startTimer(minutes) {
    
   
     countdown = minutes * 60 * 1000;
     intervalId = setInterval(function() {
      countdown -= 1000; 
       remainingMinutes = Math.floor(countdown / (1000 * 60));
       remainingSeconds = Math.floor((countdown % (1000 * 60)) / 1000);
  
       timeString = remainingMinutes.toString().padStart(2, '0') + ":" + remainingSeconds.toString().padStart(2, '0');
  
      document.getElementById("tiktok").innerHTML = timeString;
      
      if (countdown==15*60*1000){
        document.getElementById('timeleft').style.background='red'
        document.getElementById('timeleft').style.color='white'
      }
  
      if (countdown <= 0) {
        
        clearInterval(intervalId)
       eyecancer()
      }
    }, 1000); 
  }
  
  function btnk(){
    startTimer(eval((document.getElementsByClassName('number')[0]).value));
    (document.getElementsByClassName('pcont')[0]).style.display='none'
  }

  function eyecancer(){
    (document.getElementsByClassName('pcont1')[0]).style.display='flex'
    
    setInterval(()=>{
      (document.getElementsByClassName('popup1')[0]).style.display='none'
      setTimeout(() => {
      
        (document.getElementsByClassName('popup1')[0]).style.display='flex'
      },500)

    },1000)

   
   
    
    
  }
