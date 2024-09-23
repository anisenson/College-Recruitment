const teamMembers = [
    {
        name: 'Scott Norwood',
        accomplishments: 'Played in Super Bowl XXV, NFL All-Pro.',
        career: 'Former NFL placekicker for the Buffalo Bills.',
        years: '1978-1982',
        img: '/images/jmu-alumni-1.jpg'
    },
    {
        name: 'Phil Vassar',
        accomplishments: 'Chart-topping country music artist; multiple No. 1 songs.',
        career: 'Country music singer-songwriter.',
        years: 'Mid-1980s',
        img: '/images/jmu-alumni-2.jpg'
    },
    {
        name: 'Tamera Young',
        accomplishments: 'JMU’s all-time leading scorer in women’s basketball; WNBA star.',
        career: 'Former WNBA player (Atlanta Dream, Chicago Sky).',
        years: '2004-2008',
        img: '/images/jmu-alumni-3.jpg'
    },

    {
        name: 'Akeem Jordan',
        accomplishments: 'NFL linebacker with 10+ years of professional experience.',
        career: 'Played for the Philadelphia Eagles and Kansas City Chiefs.',
        years: '2003-2007',
        img: '/images/jmu-alumni-4.jpg'
    },

]


function generateTeamCards() {
    const teamCardsContainer = document.getElementById('alumniCards')

    teamMembers.forEach(member => {
        const card = document.createElement('div')
        card.classList.add('col-md-5')

        card.innerHTML =
            `
        <div class = "card h-100 shadow">
            <div class = "card-header">
            <h3> ${member.name} </h3>
            </div>
            
            <div class = "card-body">
            <img style="width: 200px" class="shadow rounded grow" src=${member.img}><br><br>
                <p><b>Years attended: </b> ${member.years}</p>
                <p><b>Accomplishments: </b> ${member.accomplishments}</p>
                <p><b>Career: </b> ${member.career}</p>
                
            </div>
        </div>
        `
        teamCardsContainer.appendChild(card)
    })
}

window.onload = generateTeamCards





















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
window.onscroll = function () { scrollFunction() };

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

