
  $(document).ready(function(){
    $('.counter').counterUp({
      delay: 10,
      time: 1200
    });




// scroll starts
var scrollToTopBtn = document.getElementById("scrollToTopBtn");
var rootElement = document.documentElement;

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);

//end 


$("#exampleModal").modal('show');

  });
