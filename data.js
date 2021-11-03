module.exports = {url_func1: url_gather1, url_func2: url_gather2, data_func1: data_gather1, data_func2: data_gather2, 
    comb_table_func1: table_populate1, comb_table_func2: table_populate2, combined_table_func1: combined_table1,
    combined_table_func2: combined_table2, champ_func: gather_champs}

/*
*   Gather the op.gg url for the first summoner.
*/
function url_gather1(ret_func, url, season, purpose){
    const request = require('request')
    request(url, function (
        error,
        response,
        body
    ){
    var index = body.search('data-summoner-id=')
    var string = body.slice(index + 'data-summoner-id='.length, index + 40)

    var counter = 0;
    var id = "";
    // Gather the ID of the user, based on the provided link
    for (i = 0; i < 40; i++){
        if (counter === 2){
            break;
        }
        if (string.charAt(i) === '"'){
            counter++;
        }
        else{
            id += string.charAt(i);
        }
    }

    var url = "";
    switch(season){
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
            url = 'https://na.op.gg/summoner/champions/ajax/champions.rank/summonerId=' + id + '&season=' + season;
            break;
        case '8':
            url = 'https://na.op.gg/summoner/champions/ajax/champions.rank/summonerId=' + id + '&season=11';
            break;
        case '9':
            url = 'https://na.op.gg/summoner/champions/ajax/champions.rank/summonerId=' + id + '&season=13';
            break;
        case '10':
            url = 'https://na.op.gg/summoner/champions/ajax/champions.rank/summonerId=' + id + '&season=15';
            break;
        case '11':
            url = 'https://na.op.gg/summoner/champions/ajax/champions.rank/summonerId=' + id + '&season=17';
            break;
    }

    return ret_func(url, purpose);
    });
}

/*
*   Gather the op.gg url for the second summoner.
*/
function url_gather2(ret_func, url, season, purpose){
    const request = require('request')
    request(url, function (
        error,
        response,
        body
    ){
    var index = body.search('data-summoner-id=')
    var string = body.slice(index + 'data-summoner-id='.length, index + 40)

    var counter = 0;
    var id = "";
    // Gather the ID of the user, based on the provided link
    for (i = 0; i < 40; i++){
        if (counter === 2){
            break;
        }
        if (string.charAt(i) === '"'){
            counter++;
        }
        else{
            id += string.charAt(i);
        }
    }

    var url = "";
    switch(season){
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
            url = 'https://na.op.gg/summoner/champions/ajax/champions.rank/summonerId=' + id + '&season=' + season;
            break;
        case '8':
            url = 'https://na.op.gg/summoner/champions/ajax/champions.rank/summonerId=' + id + '&season=11';
            break;
        case '9':
            url = 'https://na.op.gg/summoner/champions/ajax/champions.rank/summonerId=' + id + '&season=13';
            break;
        case '10':
            url = 'https://na.op.gg/summoner/champions/ajax/champions.rank/summonerId=' + id + '&season=15';
            break;
        case '11':
            url = 'https://na.op.gg/summoner/champions/ajax/champions.rank/summonerId=' + id + '&season=17';
            break;
    }

    return ret_func(url, purpose);
    });
}

/*
*   Gather data on the first summoner.
*/
function data_gather1(ret_func, error_func, url, champ){
    const request = require('request')
    request(url, function (
        error,
        response,
        body
    ){
        champ = champ.replace("'", "&#039;");

        // Does this account exist?
        var exist = body.indexOf('404 Not Found');
        if (exist != -1){
            console.log("this account does not exist");
            error_func(1);
        }

        champ = champ.replace("'", "&#039;");
        // Locate this champions info
        var pos_champ = body.indexOf(`data-value=\"${champ}\"`);
        if (pos_champ < 0){
            var arr = ['0% (0W/0L)', '0', '0', '0 (0.0)', '0', '0', '0', '0', '0',
                    '0', '0', '0'];
            return ret_func(arr);
        }
        champ_substr = body.substr(pos_champ, 1500);
        // Store the # of wins
        var pos_wins = champ_substr.indexOf("Text Left");
        var wins = '0W';
        if (pos_wins > -1){
            wins = champ_substr.substr(pos_wins, 30).match('\>(.*?)\<')[1];
        }
        // Store the # of losses
        var pos_losses = champ_substr.indexOf("Text Right");
        var losses = '0L';
        if (pos_losses > -1){
            losses = champ_substr.substr(pos_losses, 30).match('\>(.*?)\<')[1];
        }
        // Store it's winrate
        var pos_winrate = champ_substr.indexOf("WinRatio ");
        var winrate = champ_substr.substr(pos_winrate + 14, 7).match('[+-]?(?:[0-9]+(?:[.][0-9]*)?|[.][0-9]+)')[0] + '%';
        // Store it's KDA
        var pos_kda = champ_substr.indexOf("KDA Cell");
        var kda = champ_substr.substr(pos_kda, 40).match('[+-]?(?:[0-9]+(?:[.][0-9]*)?|[.][0-9]+)')[0];
        /* 
        Store the elements falling under a "Value Cell"
        * Gold, CS, Max Kills, Max Deaths, Average DMG Dealt/Taken,
        * Double/Triple/Quadra/Penta Kills.
        */
        var pos_rank = champ_substr.indexOf("Rank Cell");
        var pos_value = champ_substr.indexOf("<td class=\"Value Cell\">");
        // Only document the Champ's info until its relative rank
        var value_substr = champ_substr.substr(pos_value + 24, (pos_rank + 9) - (pos_value + 24)).replace(/\s/g, "");
        var value = value_substr.split("</td><tdclass=\"ValueCell\">");
        console.log("val ", value[1]);
        // Create an array to store all of these stats
        arr = []

        // Filter if the KDA is stored as "Perfect" (as opposed to a number)
        if (champ_substr.substr(pos_kda, 70).includes("Perfect")){
            kda = "Perfect";
        }
        else{
            kda = champ_substr.substr(pos_kda, 70).match('[+-]?(?:[0-9]+(?:[.][0-9]*)?|[.][0-9]+)')[0];
        }
        // If a "Value Cell" is null, assume it is 0
        for (var i = 0; i < 10; i++){
            if (i == 1){
                val_split = value[i].split("(");
                val_split[1] = " (" + val_split[1];
                value[i] = val_split[0] + val_split[1];
            }
            else{
                if (value[i].match('[+-]?(?:[0-9]+(?:[.,][0-9]*)?|[.,][0-9]+)') == null){
                    value[i] = '0';
                }
                else{
                    value[i] = value[i].match('[+-]?(?:[0-9]+(?:[.,][0-9]*)?|[.,][0-9]+)')[0];
                }
            }
        }

        winrate += " (" + wins + "/" + losses + ")";

        arr = [winrate, kda, value[0], value[1], value[2], value[3], value[4], 
        value[5], value[6], value[7], value[8], value[9]];
        return ret_func(arr);
    });
}

/*
*   Gathers data on the second summoner.
*/
function data_gather2(ret_func, error_func, url, champ){
    const request = require('request')
    request(url, function (
        error,
        response,
        body
    ){
        champ = champ.replace("'", "&#039;");

        // Does this account exist?
        var exist = body.indexOf("404 Not Found");
        if (exist != -1){
            console.log("this account does not exist");
            error_func(2);
        }

        // Locate this champions info
        var pos_champ = body.indexOf(`data-value=\"${champ}\"`);
        if (pos_champ < 0){
            var arr = ['0% (0W/0L)', '0', '0', '0 (0.0)', '0', '0', '0', '0', '0',
                    '0', '0', '0'];
            return ret_func(arr);
        }
        champ_substr = body.substr(pos_champ, 1500);
        // Store the # of wins
        var pos_wins = champ_substr.indexOf("Text Left");
        var wins = '0W';
        if (pos_wins > -1){
            wins = champ_substr.substr(pos_wins, 30).match('\>(.*?)\<')[1];
        }
        // Store the # of losses
        var pos_losses = champ_substr.indexOf("Text Right");
        var losses = '0L';
        if (pos_losses > -1){
            losses = champ_substr.substr(pos_losses, 30).match('\>(.*?)\<')[1];
        }
        // Store it's winrate
        var pos_winrate = champ_substr.indexOf("WinRatio ");
        var winrate = champ_substr.substr(pos_winrate + 14, 7).match('[+-]?(?:[0-9]+(?:[.][0-9]*)?|[.][0-9]+)')[0] + '%';
        // Store it's KDA
        var pos_kda = champ_substr.indexOf("KDA Cell");
        var kda = champ_substr.substr(pos_kda, 40).match('[+-]?(?:[0-9]+(?:[.][0-9]*)?|[.][0-9]+)')[0];
        /* 
        Store the elements falling under a "Value Cell"
        * Gold, CS, Max Kills, Max Deaths, Average DMG Dealt/Taken,
        * Double/Triple/Quadra/Penta Kills.
        */
        var pos_rank = champ_substr.indexOf("Rank Cell");
        var pos_value = champ_substr.indexOf("<td class=\"Value Cell\">");
        // Only document the Champ's info until its relative rank
        var value_substr = champ_substr.substr(pos_value + 24, (pos_rank + 9) - (pos_value + 24)).replace(/\s/g, "");
        var value = value_substr.split("</td><tdclass=\"ValueCell\">");
        // Create an array to store all of these stats
        arr = []

        // Filter if the KDA is stored as "Perfect" (as opposed to a number)
        if (champ_substr.substr(pos_kda, 70).includes("Perfect")){
            kda = "Perfect";
        }
        else{
            kda = champ_substr.substr(pos_kda, 70).match('[+-]?(?:[0-9]+(?:[.][0-9]*)?|[.][0-9]+)')[0];
        }
        // If a "Value Cell" is null, assume it is 0
        for (var i = 0; i < 10; i++){
            if (i == 1){
                val_split = value[i].split("(");
                val_split[1] = " (" + val_split[1];
                value[i] = val_split[0] + val_split[1];
            }
            else{
                if (value[i].match('[+-]?(?:[0-9]+(?:[.,][0-9]*)?|[.,][0-9]+)') == null){
                    value[i] = '0';
                }
                else{
                    value[i] = value[i].match('[+-]?(?:[0-9]+(?:[.,][0-9]*)?|[.,][0-9]+)')[0];
                }
            }
        }

        winrate += " (" + wins + "/" + losses + ")";

        arr = [winrate, kda, value[0], value[1], value[2], value[3], value[4], 
        value[5], value[6], value[7], value[8], value[9]];
        return ret_func(arr);
    });
}

/*
*   Populates the first summoner's compare table.
*/
function table_populate1(data){    
    // Insert data into the first table (left)
    var tds = document.querySelectorAll('#table1 tbody td');
    for (var i = 0; i < data.length; i++){
        tds[i].textContent = data[i];
    }
}

/*
*   Populates the second summoner's compare table
*/
function table_populate2(data){
    // Insert data into the second table (right)
    var tds = document.querySelectorAll('#table2 tbody td');
    for (var i = 0; i < data.length; i++){
        tds[i].textContent = data[i];
    }
}

/*
*   Populates the combined table with the first summoner's information.
*/
function combined_table1(data){
    // Insert data into the second table (right)
    var tds = document.querySelectorAll('#combined-table tbody td');
    console.log(tds[0].textContent);
    if (tds[0].textContent == ""){
        for (var i = 0; i < data.length; i++){
        tds[i].textContent = data[i];
        }
    }
    else{
        var data2 = []
        for (var i = 0; i < data.length; i++){
            data2.push(tds[i].textContent);
        }
        data_combine(data, data2, tds);
    }
}

/*
*   Populates the combined table with the second summoner's information.
*/
function combined_table2(data){
    // Insert data into the second table (right)
    var tds = document.querySelectorAll('#combined-table tbody td');
    console.log(tds[0].textContent);
    if (tds[0].textContent == ""){
        for (var i = 0; i < data.length; i++){
            tds[i].textContent = data[i];
        }
    }
    else{
        var data2 = []
        for (var i = 0; i < data.length; i++){
            data2.push(tds[i].textContent);
        }
        data_combine(data, data2, tds);
    }
}

/*
*   Adds combined data to the table.
*/
function table_combined(data, table){
    for (var i = 0; i < data.length; i++){
        table[i].textContent = data[i];
    }
}

/*
*   Combines the data existing within the table with the newly added data.
*/
function data_combine(data1, data2, table){
    // Win Rate
    var winrate = (parseInt(data2[0].split("% ")[0]) + parseInt(data1[0].split("% ")[0])) / 2;
    var wins = parseInt(data2[0].split("% ")[1].split("/")[0].match(/\d+/)[0]) + 
    parseInt(data1[0].split("% ")[1].split("/")[0].match(/\d+/)[0]);
    var losses = parseInt(data2[0].split("% ")[1].split("/")[1].match(/\d+/)[0]) + 
    parseInt(data1[0].split("% ")[1].split("/")[1].match(/\d+/)[0]);
    var winrate_final = winrate + "% (" + wins + "W/" + losses + "L)";

    // KDA
    var kda = ((parseFloat(data1[1]) + parseFloat(data2[1])) / 2).toFixed(2);

    // Gold
    var gold = ((parseInt(data1[2].replace(',', '')) + parseInt(data2[2].replace(',', ''))) / 2);
    gold = gold.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // CS
    var cs_total = ((parseFloat(data1[3].split(" (")[0])+ parseFloat(data2[3].split(" (")[0])) / 2).toFixed(1);
    var cspm = ((parseFloat(data1[3].split(" (")[1])+ parseFloat(data2[3].split(" (")[1])) / 2).toFixed(1);
    var cs_final = cs_total + " (" + cspm + ")";

    // Max Kills
    var kills = 0;
    if (parseInt(data1[4]) > parseInt(data2[4])){
        kills = parseInt(data1[4]);
    }
    else{
        kills = parseInt(data2[4]);
    }

    // Max Deaths
    var deaths = 0;
    if (parseInt(data1[5]) > parseInt(data2[5])){
        deaths = parseInt(data1[5]);
    }
    else{
        deaths = parseInt(data2[5]);
    }

    // Average DMG Dealt
    var dmg_dealt = ((parseInt(data1[6].replace(',', '')) + parseInt(data2[6].replace(',', ''))) / 2).toFixed(0);
    dmg_dealt = dmg_dealt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // Average DMG Taken
    var dmg_taken = ((parseInt(data1[7].replace(',', '')) + parseInt(data2[7].replace(',', ''))) / 2).toFixed(0);
    dmg_taken = dmg_taken.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // Double/triple/quadra/penta kills
    var double = (parseInt(data1[8].replace(',', '')) + parseInt(data2[8].replace(',', '')));
    double = double.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    var triple = (parseInt(data1[9].replace(',', '')) + parseInt(data2[9].replace(',', '')));
    triple = triple.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    var quadra = (parseInt(data1[10].replace(',', '')) + parseInt(data2[10].replace(',', '')));
    quadra = quadra.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    var penta = (parseInt(data1[11].replace(',', '')) + parseInt(data2[11].replace(',', '')));
    penta = penta.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return table_combined([winrate_final, kda, gold, cs_final, kills, deaths, dmg_dealt, dmg_taken, double, triple, quadra, penta], table);
}

/*
*   Return a list of all champions in League of Legends.
*/
function gather_champs(ret_func, champ){
    var myFunc = require('./node_modules/lol-champions');
    return ret_func(myFunc, champ);
}