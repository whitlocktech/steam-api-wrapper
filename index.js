const axios = require('axios');
/* Code used for manual testing only not needed
require('dotenv').config()

const steamApiKey = process.env.STEAM_API_KEY
const steamId = '76561198038695920'
const steamIds = process.env.STEAM_IDS
const appId = '252490'
const count = 3
const maxLength = 300
*/
async function getProfile(steamApiKey, steamId) {
    try {
        const response = await axios.get(`https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${steamApiKey}&steamids=${steamId}&format=json`);
        console.log(response.data.response.players);
        return response.data.response.players
    } catch (error) {
        console.error(error);
    }
}

// async function getMultipleProfiles(steamApiKey, steamIds) {
//     const steamIDS = steamIds.join(',')
//     console.log(steamIDS)
//     try {
//         const response = await axios.get(`https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${steamApiKey}&steamids=${steamIDS}&format=json`)
//         console.log(response.data.response.players)
//         return response.data.response.players
//     } catch (error) {
//         console.error(error)
//     }
// }

async function getNewsForApp(appId, count, maxLength) {
    newsCount = count || 3
    totalLength = maxLength || 300
    console.log(appId)
    try {
        const response = await axios.get(`http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=${appId}&count=${count}&maxlength=${maxLength}&format=json`)
        console.log(response.data.appnews)
        return response.data.appnews
    } catch (error) {
        console.error(error)
    }
}

async function getGlobalAchievementPercentageForApp(appId) {
    try {
        const response = await axios.get(`https://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=${appId}&format=json`)
        console.log(response.data.achievementpercentages)
        return response.data.achievementpercentages
    } catch (error) {
        console.error(error)
    }
}

async function getFriendList(steamApiKey, steamId) {
    try {
        const response = await axios.get(`https://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=${steamApiKey}&steamid=${steamId}&relationship=friend&format=json`)
        console.log(response)
        return response.data.friendslist.friends
    } catch (error) {
        console.error(error)
    }
}

async function getPlayerAchievements(appId, steamApiKey, steamId) {
    try {
        const response = await axios.get(`https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=${appId}&key=${steamApiKey}&steamid=${steamId}&format=json`)
        console.log(response.data.playerstats)
        return response.playerstats.achievements
    } catch (error) {
        console.error(error)
    }
}

async function getUserStatsForGame(appId, steamApiKey, steamId) {
    try {
        const response = await axios.get(`http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=${appId}&key=${steamApiKey}&steamid=${steamId}`)
        console.log(response.data)
        return response.playerstats.achievements
    } catch (error) {
        console.error(error)
    }
}

async function getOwnedGames(steamApiKey, steamId) {
    try {
        const response = await axios.get(`https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${steamApiKey}&steamid=${steamId}&format=json`)
        console.log(response.response.games)
        return response.response.games
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getProfile,
    getNewsForApp,
    getGlobalAchievementPercentageForApp,
    getFriendList,
    getPlayerAchievements,
    getUserStatsForGame,
    getOwnedGames
}