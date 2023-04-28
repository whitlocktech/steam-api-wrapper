const axios = require('axios');

async function getProfile(steamApiKey, steamId) {
    try {
        const response = await axios.get(`https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${steamApiKey}&steamids=${steamId}&format=json`);
        console.log(response.data.response.players);
        return response.data.response.players
    } catch (error) {
        console.error(error);
    }
}

async function getMultipleProfiles(steamApiKey, steamIds) {
    const steamIDS = steamIds.join(',')
    console.log(steamIDS)
    try {
        const response = await axios.get(`https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${steamApiKey}&steamids=${steamIDS}&format=json`)
        console.log(response.data.response.players)
        return response.data.response.players
    } catch (error) {
        console.error(error)
    }
}

async function getNewsForApp(appId, count, maxLength) {
    newsCount = count || 3
    totalLength = maxLength || 300
    console.log(appId)
    try {
        const response = await axios.get(`https://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=${appId}&count=${newsCount}&maxlength=${totalLength}&format=json`)
        return response.appnews.appid.newsitems
    } catch (error) {
        console.error(error)
    }
}

async function getGlobalAchievementPercentageForApp(appId) {
    try {
        const response = await axios.get(`https://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=${appId}&format=json`)
        return response.achievementpercentages.achievements
    } catch (error) {
        console.error(error)
    }
}

async function getFriendList(steamApiKey, steamId) {
    try {
        const response = await axios.get(`https://api.steapowered.com/ISteamUser/GetFriendList/v0001/?key=${steamApiKey}&steamid=${steamId}&format=json`)
        return response.friendslist.friends
    } catch (error) {
        console.error(error)
    }
}

async function getPlayerAchievements(appId, steamApiKey, steamId) {
    try {
        const response = await axios.get(`https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=${appId}&key=${steamApiKey}&steamid=${steamId}&format=json`)
        return response.playerstats.achievements
    } catch (error) {
        console.error(error)
    }
}

async function getUserStatsForGame(appId, steamApiKey, steamId) {
    try {
        const response = await axios.get(`https://api.steampowered.com/ISteamUser/Stats/GetUserStatsForGame/v0002/?appid=${appId}&key=${steamApiKey}&steamid=${steamId}`)
        return response.playerstats.achievements
    } catch (error) {
        console.error(error)
    }
}

async function getOwnedGames(steamApiKey, steamId) {
    try {
        const response = await axios.get(`https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${steamApiKey}&steamid=${steamId}&format=json`)
        return response.response.games
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getProfile,
    getMultipleProfiles,
    getNewsForApp,
    getGlobalAchievementPercentageForApp,
    getFriendList,
    getPlayerAchievements,
    getUserStatsForGame,
    getOwnedGames
}