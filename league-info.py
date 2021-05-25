from riotwatcher import LolWatcher, ApiError
import importlib

lol_watcher = LolWatcher('RGAPI-3bceec1c-05a3-4df2-9b25-962f0f73e216')

def stat_gather(name, region):
    # locate the user based on their summoner name/region
    user = lol_watcher.summoner.by_name(region, name)
    # store statistics on said user
    user_stats = lol_watcher.league.by_summoner(region, user['id'])
    print(user['id'])
    print(user_stats)
    #versions = lol_watcher.data_dragon.versions_for_region(region)
    #champions_version = versions['n']['champion']

    #current_champ_list = lol_watcher.data_dragon.champions(champions_version)

stat_gather("And 1 Aidan", "na1")
