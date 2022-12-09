var a;


document.addEventListener("DOMContentLoaded", function() {
    show();
  });
  function show()
  {
  	if(a==1){
  		document.getElementById("joke").style.display="inline"
  		return a=0;
  	}
  else{
  		document.getElementById("joke").style.display="none"
  		return a=1;
  	}
  }