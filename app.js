/*
*   DARK MODE/DROPDOWN BUTTON FUNCTIONALITY
*/

window.onload = function(){
    //localStorage.setItem("checked", "0");
    var checkBox = document.getElementById("darkModeCheck");
    console.log("onload: ", localStorage.getItem("checked"));
    console.log(checkBox.checked);
    //checkBox.checked = true;
    if (localStorage.getItem("checked") == "1"){
        checkBox.checked = true;
        //checkBox.classList.add("mine:checked:after");
        if (document.baseURI.includes("index")){
            darkenIndex();
        }
        if (document.baseURI.includes("cumulative-stats")){
            darkenCumulativeStats();
        }
        if (document.baseURI.includes("compare-stats")){
            darkenCompareStats();
        }
        if (document.baseURI.includes("map")){
            darkenMap();
        }
    }

    /*
    console.log(document.baseURI);
    var checkBox = document.getElementById("darkModeCheck");
    if (document.baseURI.includes("index")){
        darkModeIndex();
    }
    if (document.baseURI.includes("cumulative-stats")){
        darkModeCumulativeStats();
    }
    */
}
function darkenIndex(){
    var checkBox = document.getElementById("darkModeCheck");
    // Set the flag for dark mode being activated
    localStorage.setItem("checked", "1");
    checkBox.checked = true;
    // Set the general background color to gray
    document.getElementById("body-id").style.backgroundColor = "rgb(40, 40, 40)";

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

    // Change button colors
    document.getElementById("cumulative-stat-id").classList.add("dark-button");
    document.getElementById("compare-stat-id").classList.add("dark-button");
    document.getElementById("map-id").classList.add("dark-button");
    document.getElementById("contact-id").classList.add("dark-button");
}
function lightenIndex(){
    var checkBox = document.getElementById("darkModeCheck");

    // Set the flag for dark mode being deactivated
    localStorage.setItem("checked", "0");
    checkBox.checked = false;
    // Reset the general background color
    document.getElementById("body-id").style.backgroundColor = "rgb(246, 246, 242)";

    // Reset nav-bar text color
    var listElements = document.getElementsByClassName("nav-text");
    var i;
    for (i = 0; i < listElements.length; i++){
        listElements[i].style.color = "rgb(38, 80, 87)";
    }

    // Reset nav-bar color
    document.getElementById("nav-bar").style.backgroundColor = "rgb(186, 223, 231)";
    
    // Reset hover colors
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
    document.getElementById("compare-stat-id").classList.remove("dark-button");
    document.getElementById("map-id").classList.remove("dark-button");
    document.getElementById("contact-id").classList.remove("dark-button");
}
function darkModeIndex(){
    console.log(localStorage.getItem("checked"));

    var checkBox = document.getElementById("darkModeCheck");
    console.log(checkBox.checked);
    
    if (localStorage.getItem("checked") == "0"){
        darkenIndex();
    }
    else{
        lightenIndex();
    }
}
function darkenCumulativeStats(){

    var checkBox = document.getElementById("darkModeCheck");

    // Set the flag for dark mode being activated
    localStorage.setItem("checked", "1");
    checkBox.checked = true;
    // Set the general background color to gray
    document.getElementById("body-id").style.backgroundColor = "rgb(40, 40, 40)";

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

    // Change top image to a darker theme
    document.getElementById("img6").classList.add('dark-image-6');

    // Change the settings wheel color
    document.getElementById("dropdown-image").classList.add("dropdown-button-dark");

    // Change the main menu text
    document.getElementById("league-title").classList.add("dark-main-title");

    // Darken season scroll bar
    document.getElementById("scroll-id").classList.add("dark-scroll");

    // Darken table
    document.getElementById("cumulative-table").classList.add("dark-table");

    document.getElementById("bare-text1").classList.add("light-text");
    document.getElementById("bare-text2").classList.add("light-text");

    console.log("dark: ", document.getElementsByClassName("green-scroll"));

    // Change the hover color for the current season, if it exists
    if (document.getElementsByClassName("green-scroll").length != 0){
        //document.getElementsByClassName("green-scroll")[0].style.backgroundColor = "rgb(119, 0, 0)";
        document.getElementsByClassName("green-scroll")[0].classList.add("red-scroll");
        document.getElementsByClassName("green-scroll")[0].classList.remove("green-scroll");
    }

    var images1 = document.querySelectorAll('#table1 tbody tr th img');
    var images2 = document.querySelectorAll('#table2 tbody tr th img');
    
    for (i = 0; i < images1.length; i++){
        console.log(images1[i].src);
        if (images1[i].src.includes("up-arrow")){
            images1[i].src = "../pictures/dark-mode-up-arrow.png";
            //console.log(images1[i].src);
        }
        if (images1[i].src.includes("down-arrow")){
            images1[i].src = "../pictures/dark-mode-down-arrow.png";
            //console.log(images1[i].src);
        }
        if (images2[i].src.includes("up-arrow")){
            images2[i].src = "../pictures/dark-mode-up-arrow.png";
            //console.log(images2[i].src);
        }
        if (images2[i].src.includes("down-arrow")){
            images2[i].src = "../pictures/dark-mode-down-arrow.png";
            //console.log(images2[i].src);
        }
    }
}
function lightenCumulativeStats(){
    var checkBox = document.getElementById("darkModeCheck");

    // Set the flag for dark mode being deactivated
    localStorage.setItem("checked", "0");
    checkBox.checked = false;
    // Reset the general background color
    document.getElementById("body-id").style.backgroundColor = "rgb(246, 246, 242)";

    // Reset nav-bar text color
    var listElements = document.getElementsByClassName("nav-text");
    var i;
    for (i = 0; i < listElements.length; i++){
        listElements[i].style.color = "rgb(38, 80, 87)";
    }

    // Reset nav-bar color
    document.getElementById("nav-bar").style.backgroundColor = "rgb(186, 223, 231)";
    
    // Reset hover colors
    document.getElementById("list-text1").classList.remove('dark-list-hover');
    document.getElementById("list-text2").classList.remove('dark-list-hover');
    document.getElementById("list-text3").classList.remove('dark-list-hover');
    document.getElementById("list-text4").classList.remove('dark-list-hover');
    document.getElementById("list-text5").classList.remove('dark-list-hover');

    // Reset top image
    document.getElementById("img6").classList.remove('dark-image-6');

    // Reset the settings wheel color
    document.getElementById("dropdown-image").classList.remove("dropdown-button-dark");

    // Reset the large title text
    document.getElementById("league-title").classList.remove("dark-main-title");

    // Reset season scroll bar color
    document.getElementById("scroll-id").classList.remove("dark-scroll");

    // Reset table color
    document.getElementById("cumulative-table").classList.remove("dark-table");

    // Reset text colors
    document.getElementById("bare-text1").classList.remove("light-text");
    document.getElementById("bare-text2").classList.remove("light-text");

    console.log("light: ", document.getElementsByClassName("red-scroll"));
    // Reset the hover color for the current season, if it exists
    if (document.getElementsByClassName("red-scroll").length != 0){
        //document.getElementsByClassName("red-scroll")[0].style.backgroundColor = "rgb(194, 237, 206)";
        document.getElementsByClassName("red-scroll")[0].classList.add("green-scroll");
        document.getElementsByClassName("red-scroll")[0].classList.remove("red-scroll");
    }

    var images1 = document.querySelectorAll('#table1 tbody tr th img');
    var images2 = document.querySelectorAll('#table2 tbody tr th img');

    for (i = 0; i < images1.length; i++){
        console.log(images1[i].src);
        if (images1[i].src.includes("up-arrow")){
            images1[i].src = "../pictures/up-arrow.png";
            //console.log(images1[i].src);
        }
        if (images1[i].src.includes("down-arrow")){
            images1[i].src = "../pictures/down-arrow.png";
            //console.log(images1[i].src);
        }
        if (images2[i].src.includes("up-arrow")){
            images2[i].src = "../pictures/up-arrow.png";
            //console.log(images2[i].src);
        }
        if (images2[i].src.includes("down-arrow")){
            images2[i].src = "../pictures/down-arrow.png";
            //console.log(images2[i].src);
        }
    }
}
function darkModeCumulativeStats(){

    //reset_scroll_colors("-cumulative");

    var checkBox = document.getElementById("darkModeCheck");
    console.log("cumulative stat: ", localStorage.getItem("checked"));
    if (localStorage.getItem("checked") == "0"){
        darkenCumulativeStats();
    }
    else{
        lightenCumulativeStats();
    }
}
function darkenCompareStats(){
    console.log("top of darkenCompareStats");
    var checkBox = document.getElementById("darkModeCheck");

    // Set the flag for dark mode being activated
    localStorage.setItem("checked", "1");
    checkBox.checked = true;
    // Set the general background color to gray
    document.getElementById("body-id").style.backgroundColor = "rgb(40, 40, 40)";

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

    // Change top image to a darker theme
    document.getElementById("img7").classList.add('dark-image-7');

    // Change the settings wheel color
    document.getElementById("dropdown-image").classList.add("dropdown-button-dark");

    // Change the main menu text
    document.getElementById("league-title").classList.add("dark-main-title");

    // Darken season scroll bar
    document.getElementById("scroll-id").classList.add("dark-scroll");

    // Darken table
    document.getElementById("table1").classList.add("dark-table");
    document.getElementById("table2").classList.add("dark-table");

    // Change the bare text (lying on background) colors to gray
    document.getElementById("bare-text1").classList.add("light-text");
    document.getElementById("bare-text2").classList.add("light-text");
    document.getElementById("bare-text3").classList.add("light-text");

    // Change the hover color for the current season, if it exists
    if (document.getElementsByClassName("green-scroll").length != 0){
        //document.getElementsByClassName("green-scroll")[0].style.backgroundColor = "rgb(119, 0, 0)";
        document.getElementsByClassName("green-scroll")[0].classList.add("red-scroll");
        document.getElementsByClassName("green-scroll")[0].classList.remove("green-scroll");
    }
    
    var images1 = document.querySelectorAll('#table1 tbody tr th img');
    var images2 = document.querySelectorAll('#table2 tbody tr th img');

    for (i = 0; i < images1.length; i++){
        console.log(images1[i].src);
        if (images1[i].src.includes("up-arrow")){
            images1[i].src = "../pictures/dark-mode-up-arrow.png";
        }
        if (images1[i].src.includes("down-arrow")){
            images1[i].src = "../pictures/dark-mode-down-arrow.png";
        }
        if (images2[i].src.includes("up-arrow")){
            images2[i].src = "../pictures/dark-mode-up-arrow.png";
        }
        if (images2[i].src.includes("down-arrow")){
            images2[i].src = "../pictures/dark-mode-down-arrow.png";
        }
    }
}
function lightenCompareStats(){
    console.log("top of lightenCompareStats");

    var checkBox = document.getElementById("darkModeCheck");

    // Set the flag for dark mode being deactivated
    localStorage.setItem("checked", "0");
    checkBox.checked = false;
    // Reset the general background color
    document.getElementById("body-id").style.backgroundColor = "rgb(246, 246, 242)";

    // Reset nav-bar text color
    var listElements = document.getElementsByClassName("nav-text");
    var i;
    for (i = 0; i < listElements.length; i++){
        listElements[i].style.color = "rgb(38, 80, 87)";
    }

    // Reset nav-bar color
    document.getElementById("nav-bar").style.backgroundColor = "rgb(186, 223, 231)";
    
    // Reset hover colors
    document.getElementById("list-text1").classList.remove('dark-list-hover');
    document.getElementById("list-text2").classList.remove('dark-list-hover');
    document.getElementById("list-text3").classList.remove('dark-list-hover');
    document.getElementById("list-text4").classList.remove('dark-list-hover');
    document.getElementById("list-text5").classList.remove('dark-list-hover');

    // Reset top image
    document.getElementById("img7").classList.remove('dark-image-7');

    // Reset the settings wheel color
    document.getElementById("dropdown-image").classList.remove("dropdown-button-dark");

    // Reset the large title text
    document.getElementById("league-title").classList.remove("dark-main-title");

    // Reset season scroll bar color
    document.getElementById("scroll-id").classList.remove("dark-scroll");

    // Reset table color
    document.getElementById("table1").classList.remove("dark-table");
    document.getElementById("table2").classList.remove("dark-table");

    // Reset text colors
    document.getElementById("bare-text1").classList.remove("light-text");
    document.getElementById("bare-text2").classList.remove("light-text");
    document.getElementById("bare-text3").classList.remove("light-text");

    // Reset the hover color for the current season, if it exists
    if (document.getElementsByClassName("red-scroll").length != 0){
        //document.getElementsByClassName("red-scroll")[0].style.backgroundColor = "rgb(194, 237, 206)";
        document.getElementsByClassName("red-scroll")[0].classList.add("green-scroll");
        document.getElementsByClassName("red-scroll")[0].classList.remove("red-scroll");
    }

    var images1 = document.querySelectorAll('#table1 tbody tr th img');
    var images2 = document.querySelectorAll('#table2 tbody tr th img');

    for (i = 0; i < images1.length; i++){
        console.log(images1[i].src);
        if (images1[i].src.includes("up-arrow")){
            images1[i].src = "../pictures/up-arrow.png";
        }
        if (images1[i].src.includes("down-arrow")){
            images1[i].src = "../pictures/down-arrow.png";
        }
        if (images2[i].src.includes("up-arrow")){
            images2[i].src = "../pictures/up-arrow.png";
        }
        if (images2[i].src.includes("down-arrow")){
            images2[i].src = "../pictures/down-arrow.png";
        }
    }
}
function darkModeCompareStats(){
    console.log("inside darkModeCompareStats");
    var checkBox = document.getElementById("darkModeCheck");
    console.log("compare stats: ", localStorage.getItem("checked"));

    if (localStorage.getItem("checked") == "0"){
        darkenCompareStats();
    }
    else{
        lightenCompareStats();
    }
}
function darkModeMap(){
    console.log("darkModeMap", localStorage.getItem("checked"));
    if (localStorage.getItem("checked") == "0"){
        darkenMap();
    }
    else{
        lightenMap();
    }
}

function darkenMap(){
    console.log("top of darkenMap");
    var checkBox = document.getElementById("darkModeCheck");

    // Set the flag for dark mode being activated
    localStorage.setItem("checked", "1");
    checkBox.checked = true;
    // Set the general background color to gray
    document.getElementById("body-id").style.backgroundColor = "rgb(40, 40, 40)";

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

    // Change the settings wheel color
    document.getElementById("dropdown-image").classList.add("dropdown-button-dark");
}

function lightenMap(){
    console.log("top of lightenMap");

    var checkBox = document.getElementById("darkModeCheck");

    // Set the flag for dark mode being deactivated
    localStorage.setItem("checked", "0");
    checkBox.checked = false;
    // Reset the general background color
    document.getElementById("body-id").style.backgroundColor = "rgb(246, 246, 242)";

    // Reset nav-bar text color
    var listElements = document.getElementsByClassName("nav-text");
    var i;
    for (i = 0; i < listElements.length; i++){
        listElements[i].style.color = "rgb(38, 80, 87)";
    }

    // Reset nav-bar color
    document.getElementById("nav-bar").style.backgroundColor = "rgb(186, 223, 231)";
    
    // Reset hover colors
    document.getElementById("list-text1").classList.remove('dark-list-hover');
    document.getElementById("list-text2").classList.remove('dark-list-hover');
    document.getElementById("list-text3").classList.remove('dark-list-hover');
    document.getElementById("list-text4").classList.remove('dark-list-hover');
    document.getElementById("list-text5").classList.remove('dark-list-hover');

    // Change the settings wheel color
    document.getElementById("dropdown-image").classList.remove("dropdown-button-dark");
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
function complete_comp_func(season){
    var name_arr = name_gather();
    /*
    Because of the asynchronous nature of request calls (a value can't 
    simply be returned), the process of generating the data for these 
    comparisons occurs in the following order for the first and second table:
        * url func --> gathers the url's pertaining to the users data
        * season gather --> returns the url for the specific season
        * data func --> extracts the data for the specific season
        * table func --> inserts the data into a table
    */
    var url1 = 'https://na.op.gg/summoner/userName=' + name_arr[0];
    myBundle.url_func1(season_gather1, url1, season, "comp");
    var url2 = 'https://na.op.gg/summoner/userName=' + name_arr[1];
    myBundle.url_func2(season_gather2, url2, season, "comp");
    setTimeout(()=>{
        compare_values();
    }, 3000);

}

function season_gather1(url, purpose){
    var champ = document.getElementById('champion').value;

    // Define two different paths for comparisons vs cumulative
    if (purpose == "comp"){
        myBundle.data_func1(myBundle.comb_table_func1, url, champ);
    }
    if (purpose == "cumulative"){
        myBundle.data_func1(myBundle.cumulative_table_func1, url, champ);
    }
}

function season_gather2(url, purpose){
    var champ = document.getElementById('champion').value;

    // Define two different paths for comparisons vs cumulative
    if (purpose == "comp"){
        myBundle.data_func2(myBundle.comb_table_func2, url, champ);
    }
    if (purpose == "cumulative"){
        myBundle.data_func2(myBundle.cumulative_table_func2, url, champ);
    }
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

    return [name1_final, name2_final];
}
/*
    Resets all seasons (other than season) to the base blue color,
    suffix defines whether this is being done for compare or cumulatives
    scroll bar.
*/
function set_other_colors(season, suffix){

    if (localStorage.getItem("checked") == "0"){
        console.log("Green");
        color = "green-scroll"
    }
    else{
        console.log("Red");
        color = "red-scroll"
    }

    for (var i = 1; i < 12; i++){
        if (i != parseInt(season)){
            document.getElementById("season-" + String(i) + suffix).classList.remove(color);
        }
    }
    document.getElementById("season-" + season + suffix).classList.add(color);
}

/*
    Compares the values in each table, uses different images to represent the
    result of each comparison.
*/
function compare_values(){
    var tds1 = document.querySelectorAll('#table1 tbody td');
    var tds2 = document.querySelectorAll('#table2 tbody td');
    var images1 = document.querySelectorAll('#table1 tbody tr th img');
    var images2 = document.querySelectorAll('#table2 tbody tr th img');
    
    if (localStorage.getItem("checked") == "0"){
        up_string = "up-arrow.png";
        down_string = "down-arrow.png";
    }
    else{
        up_string = "dark-mode-up-arrow.png";
        down_string = "dark-mode-down-arrow.png"
    }

    // Win Rate
    if (parseInt(tds1[0].textContent.substr(0, 3)) > parseInt(tds2[0].textContent.substr(0, 3))){
        images1[0].src = "../pictures/" + up_string;
        images2[0].src = "../pictures/" + down_string;
    }
    else if(parseInt(tds1[0].textContent.substr(0, 3)) < parseInt(tds2[0].textContent.substr(0, 3))){
        images2[0].src = "../pictures/" + up_string;
        images1[0].src = "../pictures/" + down_string;
    }
    else{
        images1[0].src = "../pictures/gray-bar.png";
        images2[0].src = "../pictures/gray-bar.png";
    }
    // KDA
    if (parseFloat(tds1[1].textContent) > parseFloat(tds2[1].textContent)){
        images1[1].src = "../pictures/" + up_string;
        images2[1].src = "../pictures/" + down_string;
    }
    else if(parseFloat(tds1[1].textContent) < parseFloat(tds2[1].textContent)){
        images2[1].src = "../pictures/" + up_string;
        images1[1].src = "../pictures/" + down_string;
    }
    else{
        images1[1].src = "../pictures/gray-bar.png";
        images2[1].src = "../pictures/gray-bar.png";
    }
    // Gold
    var gold1 = parseInt(tds1[2].textContent.replace(',', ''));
    var gold2 = parseInt(tds2[2].textContent.replace(',', ''));
    if (gold1 > gold2){
        images1[2].src = "../pictures/" + up_string;
        images2[2].src = "../pictures/" + down_string;
    }
    else if(gold1 < gold2){
        images2[2].src = "../pictures/" + up_string;
        images1[2].src = "../pictures/" + down_string;
    }
    else{
        images1[2].src = "../pictures/gray-bar.png";
        images2[2].src = "../pictures/gray-bar.png";
    }
    // CS
    var cs_stat1 = tds1[3].textContent.split("(");
    var cs_stat2 = tds2[3].textContent.split("(");
    // Use the provided CPM if provided(1) (season 9 and onward)
    // otherwise, use raw CS number(0)
    var cs_index = 0;
    if (parseFloat(cs_stat1[1]) != 0){
        cs_index = 1;
    }
    if (parseFloat(cs_stat1[cs_index]) > parseFloat(cs_stat2[cs_index])){
        images1[3].src = "../pictures/" + up_string;
        images2[3].src = "../pictures/" + down_string;
    }
    else if (parseFloat(cs_stat1[cs_index]) < parseFloat(cs_stat2[cs_index])){
        images2[3].src = "../pictures/" + up_string;
        images1[3].src = "../pictures/" + down_string;
    }
    else{
        images1[3].src = "../pictures/gray-bar.png";
        images2[3].src = "../pictures/gray-bar.png";
    }
    // Max Kills, Max Deaths, AVG DMG Dealt/Taken, Double/Triple/Quadra/Penta Kills
    for (var i = 4; i < 12; i++){
        var comp1 = parseInt(tds1[i].textContent.replace(',', ''));
        var comp2 = parseInt(tds2[i].textContent.replace(',', ''));
        if (comp1 > comp2){
            images1[i].src = "../pictures/" + up_string;
            images2[i].src = "../pictures/" + down_string;
        }
        else if (comp1 < comp2){
            images2[i].src = "../pictures/" + up_string;
            images1[i].src = "../pictures/" + down_string;
        }
        else{
            images1[i].src = "../pictures/gray-bar.png";
            images2[i].src = "../pictures/gray-bar.png";
        }
    }
}
function complete_cumulative_func(season){
    var name_arr = name_gather();

    var url1 = 'https://na.op.gg/summoner/userName=' + name_arr[0];
    myBundle.url_func1(season_gather1, url1, season, "cumulative");
    var url2 = 'https://na.op.gg/summoner/userName=' + name_arr[1];
    myBundle.url_func2(season_gather2, url2, season, "cumulative");
}
