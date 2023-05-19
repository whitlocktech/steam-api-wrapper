## README
![Known Vulnerabilities](https://snyk.io/test/github/whitlocktech/steam-api-wrapper/badge.svg)]


This is a wrapper for the steam api. I am working to add more functionality to it.

The getMultipeProfiles function is currently non operational. Other functions might retrun an error if the user has a private profile

To Add it to your project

npm i @whitlocktech/steam-api-wrapper

```javascript
const {
  getProfile,
  getMultipleProfiles,
} = require("@whitlocktech/steam-api-wwrapper");
```

Both functions require you to pass the steamApiKey you get from steam.

### getProfile()

```javascript
getProfile(steamApiKey, steamId);
```

steamId is the 64bit steam id of the user profile that you wish to obtain

### getMultipleProfiles()

```javascript
getMultipleProfiles(steamApiKey, steamIds);
```

steamIds is passed in as an array. The function will join and then request multiple user profiles.

```javascript
getNewsForApp(appId, count, maxLength);
```

You must pass in the appId which is the id that steam uses to identify games, the count of the articles, and the maxLength of characters for the articles.
count defaults to 3 if not passed in
maxLength defaults to 300

```javascript
getGlobalAchievementPercentageForApp(appId);
```

appId is the id used by steam for apps. It will return the global percentages of
acheivemnts

```javascript
getFriendList(steaApiKey, steamId);
```

Requires your steam API key and the 64bit steamId of the person you wish to get the friends list of

```javascript
getPlayerAchievements(appId, steamApiKey, steamId);
```

This is a v0001 api call maybe deperacated in the future
get the achievements for a single user for specific game
Requires appId = steam app id
steamApiKey your steam api key
64bit steamId of the user you are targeting

```javascript
getUserStatsForGame(appId, steamApiKey, steamId);
```

This returns the same data and has the same getPlayerAchievements function but it is the v0002(current) steam api call

```javascript
getOwnedGames(steamApiKey, steamId);
```

This get the owned games list of the targeted player
requires your steam api key, and the 64bit steam id of the player you are targeting.
