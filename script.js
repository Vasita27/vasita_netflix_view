function showMainContent() {
    document.getElementById("video-container").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  }
  function scrollToFirstPage() {
    // Scroll to the element with id "firstPage"
    document.getElementById("firstPage").scrollIntoView({ behavior: "smooth" });
  }
function scrollToAnimated() {
    document.getElementById("Zero").scrollIntoView({ behavior: "smooth" });
}  
function scrollToHp(){
    document.getElementById("hp").scrollIntoView({ behavior: "smooth" });
}
function lesgo(event){
    event.preventDefault();
    var a=document.getElementById("search").value;
    if (a=='Horror' || a=='horror'){
        scrollToFirstPage();
    }
    else if (a=='Animated' || a=='animated'){
        scrollToAnimated();
    }
    else{
        scrollToHp();
    }
    document.getElementById("search").value='';
}