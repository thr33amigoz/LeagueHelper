from flask import Flask, jsonify, render_template, request
app = Flask(__name__)
from bs4 import BeautifulSoup
from urllib.request import urlopen

@app.route('/info_gather_season', methods=['GET', 'POST'])
def info_gather_season(url):
    page = urlopen(url)
    html = page.read().decode("utf-8")
    soup = BeautifulSoup(html, "html.parser")

    # detect an error message, and store it instead of stats if needed
    error_message = soup.find(class_ = "ErrorMessage")
    if error_message:
        return error_message.string.strip()

    champ_info = {}
    champ_names = soup.find_all(class_ = "ChampionName Cell")
    champ_winrates = soup.find_all(True, {"class": ["WinRatio normal", "WinRatio red"]})
    champ_kdas = soup.find_all(class_ = "KDA Cell normal")
    champ_metrics = soup.find_all(class_ = "Value Cell")

    metric_index = 0
    # iterate through each champion played
    for i in range(len(champ_names)):
        # add the champions name
        champ_info[i] = [champ_names[i].attrs['data-value']]
        # add the champions winrate
        champ_info[i].append(champ_winrates[i].contents[0])
        # add the champions KDA (kill/death/assist ratio)
        champ_info[i].append(champ_kdas[0].attrs['data-value'])
        # iterate through the 10 remaining metrics
        for j in range(10):
            temp = champ_metrics[metric_index].string.strip()
            # if the field is empty, consider it 0
            if temp == "":
                champ_info[i].append('0')
            else:
                champ_info[i].append(temp)
            metric_index += 1

    return champ_info

@app.route('/info_gather', methods=['GET', 'POST'])
def info_gather():
    url = "https://na.op.gg/summoner/champions/userName=AND%201%20AIDAN"
    page = urlopen(url)
    html = page.read().decode("utf-8")
    soup = BeautifulSoup(html, "html.parser")

    season_11 = info_gather_season(url)

    season_urls = {}
    op = 'https://na.op.gg'
    
    season_urls[1] = op + soup.find(class_ = "tabItem season-1").attrs['data-tab-data-url']
    season_urls[2] = op + soup.find(class_ = "tabItem season-2").attrs['data-tab-data-url']
    season_urls[3] = op + soup.find(class_ = "tabItem season-3").attrs['data-tab-data-url']
    season_urls[4] = op + soup.find(class_ = "tabItem season-4").attrs['data-tab-data-url']
    season_urls[5] = op + soup.find(class_ = "tabItem season-5").attrs['data-tab-data-url']
    season_urls[6] = op + soup.find(class_ = "tabItem season-6").attrs['data-tab-data-url']
    season_urls[7] = op + soup.find(class_ = "tabItem season-7").attrs['data-tab-data-url']
    season_urls[8] = op + soup.find(class_ = "tabItem season-11").attrs['data-tab-data-url']
    season_urls[9] = op + soup.find(class_ = "tabItem season-13").attrs['data-tab-data-url']
    season_urls[10] = op + soup.find(class_ = "tabItem season-15").attrs['data-tab-data-url']
    print(season_urls)

    info_dict = {}
    season_1 = info_gather_season(season_urls[1])
    info_dict["S1"] = season_1
    season_2 = info_gather_season(season_urls[2])
    info_dict["S2"] = season_2
    season_3 = info_gather_season(season_urls[3])
    info_dict["S3"] = season_3
    season_4 = info_gather_season(season_urls[4])
    info_dict["S4"] = season_4
    season_5 = info_gather_season(season_urls[5])
    info_dict["S5"] = season_5
    season_6 = info_gather_season(season_urls[6])
    info_dict["S6"] = season_6
    season_7 = info_gather_season(season_urls[7])
    info_dict["S7"] = season_7
    season_8 = info_gather_season(season_urls[8])
    info_dict["S8"] = season_8
    season_9 = info_gather_season(season_urls[9])
    info_dict["S9"] = season_9
    season_10 = info_gather_season(season_urls[10])
    info_dict["S10"] = season_10
    info_dict["S11"] = season_11
    
    return info_dict

print(info_gather())