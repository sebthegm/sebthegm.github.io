function checkUrl(url) {
    var hash = url || window.location.hash;
    var frames = document.querySelectorAll('.content');
    if(hash && hash != "" && hash != "#" && hash != "#home"){
        frames.forEach(function(frame){
            console.log(hash, frame.id)
            if( hash == frame.id ) {
              frame.style.display = "flex";
              frame.classList.add("active");
            } else {
              frame.style.display = "none";
              frame.classList.remove("active");
            }
        })
    } else {
        frames.forEach(function(frame){
            if(frame.id == "#home"){
                frame.style.display = "flex";
                frame.classList.add("active");
            } else {
                frame.style.display = "none";
                frame.classList.remove("active");
            }
        })
    }
  }
  
  window.onload = function(){
    checkUrl();
  }