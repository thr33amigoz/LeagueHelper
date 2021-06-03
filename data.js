module.exports = {url_func1: url_gather1, url_func2: url_gather2, data_func1: data_gather1, data_func2: data_gather2, 
                    table_func1: table_populate1, table_func2: table_populate2}

function url_gather1(ret_func, url, season){
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
        console.log(id);

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

        console.log(url);
        return ret_func(url);

        var url_dict = {1: 'https://na.op.gg/summoner/champions/ajax/champions.rank/summonerId=' + id + '&season=1',
                        2: 'https://na.op.gg/summoner/champions/ajax/champions.rank/summonerId=' + id + '&season=2',
                        3: 'https://na.op.gg/summoner/champions/ajax/champions.rank/summonerId=' + id + '&season=3',
                        4: 'https://na.op.gg/summoner/champions/ajax/champions.rank/summonerId=' + id + '&season=4',
                        5: 'https://na.op.gg/summoner/champions/ajax/champions.rank/summonerId=' + id + '&season=5',
                        6: 'https://na.op.gg/summoner/champions/ajax/champions.rank/summonerId=' + id + '&season=6',
                        7: 'https://na.op.gg/summoner/champions/ajax/champions.rank/summonerId=' + id + '&season=7',
                        8: 'https://na.op.gg/summoner/champions/ajax/champions.rank/summonerId=' + id + '&season=11',
                        9: 'https://na.op.gg/summoner/champions/ajax/champions.rank/summonerId=' + id + '&season=13',
                        10: 'https://na.op.gg/summoner/champions/ajax/champions.rank/summonerId=' + id + '&season=15',
                        11: 'https://na.op.gg/summoner/champions/ajax/champions.rank/summonerId=' + id + '&season=17'}

        

        return ret_func(url_dict);
    });
}

function url_gather2(ret_func, url, season){
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
        console.log(id);

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

        console.log(url);

        return ret_func(url);

        var url_dict = {1: 'https://na.op.gg/summoner/champions/ajax/champions.rank/summonerId=' + id + '&season=1',
                        2: 'https://na.op.gg/summoner/champions/ajax/champions.rank/summonerId=' + id + '&season=2',
                        3: 'https://na.op.gg/summoner/champions/ajax/champions.rank/summonerId=' + id + '&season=3',
                        4: 'https://na.op.gg/summoner/champions/ajax/champions.rank/summonerId=' + id + '&season=4',
                        5: 'https://na.op.gg/summoner/champions/ajax/champions.rank/summonerId=' + id + '&season=5',
                        6: 'https://na.op.gg/summoner/champions/ajax/champions.rank/summonerId=' + id + '&season=6',
                        7: 'https://na.op.gg/summoner/champions/ajax/champions.rank/summonerId=' + id + '&season=7',
                        8: 'https://na.op.gg/summoner/champions/ajax/champions.rank/summonerId=' + id + '&season=11',
                        9: 'https://na.op.gg/summoner/champions/ajax/champions.rank/summonerId=' + id + '&season=13',
                        10: 'https://na.op.gg/summoner/champions/ajax/champions.rank/summonerId=' + id + '&season=15',
                        11: 'https://na.op.gg/summoner/champions/ajax/champions.rank/summonerId=' + id + '&season=17'}

        return ret_func(url_dict);
    });
}

function data_gather1(ret_func, url, champ){
    const request = require('request')
    request(url, function (
        error,
        response,
        body
    ){
        // Locate this champions info
        var pos_champ = body.indexOf(`data-value=\"${champ}\"`);
        console.log("pos1: ", pos_champ);
        if (pos_champ < 0){
            var arr = ['0% (0W/0L)', '0', '0', '0 (0.0)', '0', '0', '0', '0', '0',
                        '0', '0', '0'];
            return ret_func(arr);
        }
        champ_substr = body.substr(pos_champ, 1500);
        //console.log("body1: ", champ_substr);
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

function data_gather2(ret_func, url, champ){
    const request = require('request')
    request(url, function (
        error,
        response,
        body
    ){
        // Locate this champions info
        var pos_champ = body.indexOf(`data-value=\"${champ}\"`);
        console.log("pos2: ", pos_champ);
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

function table_populate1(my_arr){
    console.log("table1: ", my_arr);

    buildTable1(my_arr);

    function buildTable1(data){
        
        for (var i = 0; i < data.length; i++){
            // Insert data into the first table (left)
            var tds = document.querySelectorAll('#table1 tbody td');

            for (var i = 0; i < tds.length; i++){
                tds[i].textContent = data[i];
            }
        }
    }
}
function table_populate2(my_arr){
    console.log("table 2: ", my_arr);

    buildTable2(my_arr);

    function buildTable2(data){   
        for (var i = 0; i < data.length; i++){
            // Insert data into the second table (right)
            var tds = document.querySelectorAll('#table2 tbody td');

            for (var i = 0; i < tds.length; i++){
                tds[i].textContent = data[i];
            }
        }
    }
}