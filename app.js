/*
*   DARK MODE/DROPDOWN BUTTON FUNCTIONALITY
*/
function darkMode(){
    // Set the general background color to gray
    document.getElementById("body-id").style.backgroundColor = "rgb(51, 51, 51)";
    
    var checkBox = document.getElementById("darkModeCheck");
    if (checkBox.checked == true){
        // Change nav-bar text color to black
        var listElements = document.getElementsByClassName("nav-text");
        var i;
        for (i = 0; i < listElements.length; i++){
            listElements[i].style.color = "rgb(21, 21, 21)";
        }
        
        // Change nav-bar color to a darker color
        document.getElementById("nav-bar").style.backgroundColor = "rgb(141, 24, 24)";

        // Change hover colors to maroon
        document.getElementById("list-text1").classList.add('dark-list-hover');
        document.getElementById("list-text2").classList.add('dark-list-hover');
        document.getElementById("list-text3").classList.add('dark-list-hover');
        document.getElementById("list-text4").classList.add('dark-list-hover');
        document.getElementById("list-text5").classList.add('dark-list-hover');

        // Change home page images to a darker theme
        document.getElementById("img1").classList.add('dark-image-1');
        document.getElementById("img2").classList.add('dark-image-2');
        document.getElementById("img3").classList.add('dark-image-3');
        document.getElementById("img4").classList.add('dark-image-4');
        document.getElementById("img5").classList.add('dark-image-5');
        
        // Change the settings wheel color
        document.getElementById("dropdown-image").classList.add("dropdown-button-dark");

        // Change the main menu text
        document.getElementById("league-title").classList.add("dark-main-title");

        document.getElementById("cumulative-stat-id").classList.add("dark-button");
        document.getElementById("combined-stat-id").classList.add("dark-button");
        document.getElementById("map-id").classList.add("dark-button");
        document.getElementById("contact-id").classList.add("dark-button");
    }
    else{
        // Reset the general background color
        document.getElementById("body-id").style.backgroundColor = "rgb(246, 246, 242)";

        // Change nav-bar text color
        var listElements = document.getElementsByClassName("nav-text");
        var i;
        for (i = 0; i < listElements.length; i++){
            listElements[i].style.color = "rgb(38, 80, 87)";
        }

        // Change nav-bar color
        document.getElementById("nav-bar").style.backgroundColor = "rgb(186, 223, 231)";
        
        // Change hover colors to maroon
        document.getElementById("list-text1").classList.remove('dark-list-hover');
        document.getElementById("list-text2").classList.remove('dark-list-hover');
        document.getElementById("list-text3").classList.remove('dark-list-hover');
        document.getElementById("list-text4").classList.remove('dark-list-hover');
        document.getElementById("list-text5").classList.remove('dark-list-hover');

        // Reset the home page images
        document.getElementById("img1").classList.remove('dark-image-1');
        document.getElementById("img2").classList.remove('dark-image-2');
        document.getElementById("img3").classList.remove('dark-image-3');
        document.getElementById("img4").classList.remove('dark-image-4');
        document.getElementById("img5").classList.remove('dark-image-5');

        // Reset the settings wheel color
        document.getElementById("dropdown-image").classList.remove("dropdown-button-dark");

        // Reset the main menu text color
        document.getElementById("league-title").classList.remove("dark-main-title");

        // Reset the button colors
        document.getElementById("cumulative-stat-id").classList.remove("dark-button");
        document.getElementById("combined-stat-id").classList.remove("dark-button");
        document.getElementById("map-id").classList.remove("dark-button");
        document.getElementById("contact-id").classList.remove("dark-button");
    }
}
function showDropdown(){
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event){
    if (!event.target.matches('.dropdown-button') && !document.getElementsByClassName('dropdown-content')[0].contains(event.target)){
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
}

/*
*   INFORMATION GATHERING
*/

