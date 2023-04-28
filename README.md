## README

This is a wrapper for the steam api. I am working to add more functionality to it.

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
