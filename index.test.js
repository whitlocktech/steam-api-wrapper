const {
  getProfile,
  getNewsForApp,
  getGlobalAchievementPercentageForApp,
  getFriendList,
  getPlayerAchievements,
  getUserStatsForGame,
  getOwnedGames,
} = require('./index.js');
require('dotenv').config();

const config = {
    steamApiKey: process.env.STEAM_API_KEY,
    steamId: process.env.STEAM_ID,
    steamIds: process.env.STEAM_IDS,
    appId: process.env.APP_ID,
}

describe('API functions', () => {
  const steamApiKey = config.steamApiKey;
  const steamId = config.steamId;
  const steamIds = config.steamIds;
  const appId = config.appId;

  it('should retrieve player profile', async () => {
    const response = await getProfile(steamApiKey, steamId);
    expect(response.length).toBe(1);
    expect(response[0]).toHaveProperty('steamid', steamId);
  });

  it('should retrieve news for app', async () => {
    const response = await getNewsForApp(appId);
    expect(response).toHaveProperty('appid', parseInt(appId));
    expect(Array.isArray(response.newsitems)).toBe(true);
  });

  it('should retrieve global achievement percentages for app', async () => {
    const response = await getGlobalAchievementPercentageForApp(appId);
    expect(response).toHaveProperty('achievements');
    expect(Array.isArray(response.achievements)).toBe(true);
  });

  it('should retrieve friend list', async () => {
    const response = await getFriendList(steamApiKey, steamId);
    expect(Array.isArray(response)).toBe(true);
    expect(response[0]).toHaveProperty('steamid');
  });

  it('should retrieve player achievements', async () => {
    const response = await getPlayerAchievements(appId, steamApiKey, steamId);
    expect(Array.isArray(response)).toBe(true);
    expect(response[0]).toHaveProperty('apiname');
  });

  it('should retrieve user stats for game', async () => {
    const response = await getUserStatsForGame(appId, steamApiKey, steamId);
    expect(Array.isArray(response)).toBe(true);
    expect(response[0]).toHaveProperty('name');
  });

  it('should retrieve owned games', async () => {
    const response = await getOwnedGames(steamApiKey, steamId);
    expect(Array.isArray(response)).toBe(true);
    expect(response[0]).toHaveProperty('appid');
  });
});
