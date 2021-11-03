/*
*   Initial function which initiates the comparisons of summoners.
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

    // Remove previous errors
    error = document.getElementById('error');
    while (error != null){
        console.log("error: ", error);
        error.remove();
        error = document.getElementById('error');
    }

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

    // Define two different paths for comparisons vs combined
    if (purpose == "comp"){
        myBundle.data_func1(myBundle.comb_table_func1, error_notify, url, champ);
    }
    if (purpose == "combined"){
        myBundle.data_func1(myBundle.combined_table_func1, error_notify, url, champ);
    }
}

function season_gather2(url, purpose){
    var champ = document.getElementById('champion').value;

    // Check that the champion exists
    myBundle.champ_func(champ_check, champ);

    // Define two different paths for comparisons vs combined
    if (purpose == "comp"){
        myBundle.data_func2(myBundle.comb_table_func2, error_notify, url, champ);
    }
    if (purpose == "combined"){
        myBundle.data_func2(myBundle.combined_table_func2, error_notify, url, champ);
    }
}

/*
    Create the html which will notify the user that their input is invalid.
*/
function error_notify(summoner){
    var tag = document.createElement("div");
    tag.id = "error";

    tag_img = document.createElement("div");
    tag_img.id = "error-img";
    tag.appendChild(tag_img);

    tag_text = document.createElement("p");
    tag_text.id = "error-text";
    tag_text.innerHTML = "An invalid name was entered for Summoner " +  summoner + ".";
    tag.appendChild(tag_text);

    var element = document.getElementById("error-div");
    element.appendChild(tag);
}

/*
*   Checks that the champion which was input exists.
*/
function champ_check(data, champ){
    // Make champion name match that gathered by champions.json
    champ = champ.toLowerCase();
    champ = champ.replace("'", "");
    champ = champ.replace(" ", "");

    exist = false;

    // Iterate through every champion name
    for (i = 0; i < data.length; i++){
        // If the champion exists, set exist to true
        if (champ == data[i].id){
            exist = true;
        }
    }
    // If the champion does not exist, notify the user
    if (exist == false){
        var tag = document.createElement("div");
        tag.id = "error";

        tag_img = document.createElement("div");
        tag_img.id = "error-img";
        tag.appendChild(tag_img);

        tag_text = document.createElement("p");
        tag_text.id = "error-text";
        tag_text.innerHTML = "An invalid champion name was entered.";
        tag.appendChild(tag_text);

        var element = document.getElementById("error-div");
        element.appendChild(tag);
    }
}

/*
    Return the names as a pair which are useable for urls
*/
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

/*
*   Initial function which initiates the combination of summoners.
*/
function complete_combined_func(season){
    // Remove previous errors
    error = document.getElementById('error');
    while (error != null){
        console.log("error: ", error);
        error.remove();
        error = document.getElementById('error');
    }

    var name_arr = name_gather();

    var url1 = 'https://na.op.gg/summoner/userName=' + name_arr[0];
    myBundle.url_func1(season_gather1, url1, season, "combined");
    var url2 = 'https://na.op.gg/summoner/userName=' + name_arr[1];
    myBundle.url_func2(season_gather2, url2, season, "combined");
}
