import axios from "axios";

// example api request for protected data (sends error i user isn't logged in)
const getProtectedExample = () => axios.get("/api/protected");
const getfiles = () => axios.get("/api/protected/avatarfiles");
// example api request for public data
const getPublicExample = () => axios.get("/api/unprotected");

const saveSettings =(settingsData) => axios.put("/api/protected", settingsData)

const getSettings = (id) => axios.get("/api/protected/settings"+id)

const saveAudio =(settingsData) => axios.put("/api/protected", settingsData)
const saveAnimation =(settingsData) => axios.put("/api/protected", settingsData)
const saveCaption =(settingsData) => axios.put("/api/protected", settingsData)
const saveAvatarset =(settingsData) => axios.put("/api/protected", settingsData)
const saveEndPage=(settingsData)=>axios.put("/api/protected/time",settingsData)
const API = { getProtectedExample, getPublicExample,saveSettings,getSettings,getfiles,saveEndPage };

export default API;
