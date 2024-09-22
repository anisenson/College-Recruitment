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


