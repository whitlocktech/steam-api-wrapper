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

module.exports = {
    getProfile,
    getMultipleProfiles
}