const axios = require('axios');

async function getProfile(STEAM_API_KEY, steamId) {
    try {
        const response = await axios.get(`https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${STEAM_API_KEY}&steamids=${steamId}&format=json`);
        console.log(response.data.response.players);
        return
    } catch (error) {
        console.error(error);
    }
}

async function getMultipleProfiles(STEAM_API_KEY, steamIds) {
    const steamIDS = steamIds.join(',')
    console.log(steamIDS)
    try {
        const response = await axios.get(`https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${STEAM_API_KEY}&steamids=${steamIDS}&format=json`)
        console.log(response.data.response.players)
        return
    } catch (error) {
        console.error(error)
    }
}

getProfile(STEAM_API_KEY, steamId);

getMultipleProfiles(STEAM_API_KEY, steamIds)

module.export = {
    getProfile,
    getMultipleProfiles
}