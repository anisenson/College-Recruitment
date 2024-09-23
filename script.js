// Javascript from https://www.w3schools.com/howto/howto_js_search_menu.asp 

function myFunction() {
    // Declare variables
    var input, filter, div, majors, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDiv");
    majors = div.getElementsByClassName("major");

    // Loop through all major items and hide those that don't match the search query
    for (i = 0; i < majors.length; i++) {
        a = majors[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            majors[i].style.display = "";
        } else {
            majors[i].style.display = "none";
        }
    }
}


//back to top button from https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

