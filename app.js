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
*   COMPARISON
*/
function complete_func(season){
    var name_arr = name_gather();
    var url1 = 'https://na.op.gg/summoner/userName=' + name_arr[0];
    /*
    Because of the asynchronous nature of request calls (a value can't 
    simply be returned), the process of generating the data for these 
    comparisons occurs in the following order for the first and second table:
        * url func --> gathers the url's pertaining to the users data
        * season gather --> returns the url for the specific season
        * data func --> extracts the data for the specific season
        * table func --> inserts the data into a table
    */
    myBundle.url_func1(season_gather1, url1, season);
    var url2 = 'https://na.op.gg/summoner/userName=' + name_arr[1];
    myBundle.url_func2(season_gather2, url2, season);
    setTimeout(()=>{
        compare_values();
    }, 1500);

}

function season_gather1(url){
    console.log('inside: ', url);

    var champ = document.getElementById('champion').value;
    console.log("link1: ", url);
    myBundle.data_func1(myBundle.table_func1, url, champ);
}

function season_gather2(url){
    console.log('inside: ', url);

    var champ = document.getElementById('champion').value;
    console.log("link2: ", url);
    myBundle.data_func2(myBundle.table_func2, url, champ);
}

function name_gather(){
    var name1 = document.getElementById('first-name').value;
    var name2 = document.getElementById('second-name').value;
    var name1_arr = name1.split(" ");
    var name2_arr = name2.split(" ");
    var name1_final = "";
    var name2_final = "";

    // Convert name 1 and 2 to proper URL format
    for (var i = 0; i < name1_arr.length; i++){
        name1_final += name1_arr[i];
        if (i != name1_arr.length - 1){
            name1_final += "+"
        }
    }
    for (var i = 0; i < name2_arr.length; i++){
        name2_final += name2_arr[i];
        if (i != name2_arr.length - 1){
            name2_final += "+"
        }
    }
    //console.log(name1_final);
    //console.log(name2_final);
    return [name1_final, name2_final];
}
// Resets all seasons (other than season) to the base blue color
function set_other_colors(season){
    for (var i = 1; i < 12; i++){
        if (i != parseInt(season)){
            //console.log("changing season-" + String(i));
            document.getElementById("season-" + String(i)).classList.remove("green-scroll");
        }
    }
    //console.log("season-" + season);
    document.getElementById("season-" + season).classList.add("green-scroll");
}

function compare_values(){
    console.log("COMPARE VALS");
    var tds1 = document.querySelectorAll('#table1 tbody td');
    var tds2 = document.querySelectorAll('#table2 tbody td');
    var images = document.querySelectorAll('#table1 tbody tr th img');
    console.log(images);
    
    // Special cases: 0 and 3, possibly DMG things
    console.log(tds1[0].textContent);
    console.log(tds1[0].textContent.match(/^\d+$/));

    /*
    for (var i = 0; i < tds1.length; i++){
        
        images[i].src = "../pictures/up-arrow.png";
        console.log(tds1[i].textContent, tds2[i].textContent);
    }
    */
}

document.getElementById('season-11').onclick =  function season11_pop(){set_other_colors('11');complete_func('11');}
document.getElementById('season-10').onclick =  function season10_pop(){set_other_colors('10');complete_func('10');}
document.getElementById('season-9').onclick =  function season9_pop(){set_other_colors('9');complete_func('9');}
document.getElementById('season-8').onclick =  function season8_pop(){set_other_colors('8');complete_func('8');}
document.getElementById('season-7').onclick =  function season7_pop(){set_other_colors('7');complete_func('7');}
document.getElementById('season-6').onclick =  function season6_pop(){set_other_colors('6');complete_func('6');}
document.getElementById('season-5').onclick =  function season5_pop(){set_other_colors('5');complete_func('5');}
document.getElementById('season-4').onclick =  function season4_pop(){set_other_colors('4');complete_func('4');}
document.getElementById('season-3').onclick =  function season3_pop(){set_other_colors('3');complete_func('3');}
document.getElementById('season-2').onclick =  function season2_pop(){set_other_colors('2');complete_func('2');}
document.getElementById('season-1').onclick =  function season1_pop(){set_other_colors('1');complete_func('1');}