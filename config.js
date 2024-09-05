//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaqgxNt5q08c9XMItG3P";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaqgxNt5q08c9XMItG3P";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/zdD9xsf.mp4";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2348121373516";
global.owner = process.env.OWNER_NUMBER || "2348121373516";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU9DSFJ2WC9xUGl6NDJRaGYrUStlU0xpQy9VelpQbEdqMTVLU0VHNTFYST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicTlMNjlBQUNHT1NyOEM5cTZaTURpNXR6SmtjWDM2Z3B2VFZKZ2xRWkhEaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBTDVyUGhnUDA1S2VaYS93QjRTVEEzM01iQ2QwMGNvekJXWmlxTWdaK2tjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaL3hwbm1paXk1T01XVXlHOE5hMjhNQ3ZDNTRnOCtQdG1hVUJDZlRvZXdFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtDVDNKWG5KNnE2MUlXeGFtMjQvcHFhYXNmV003R1dkdVR2Y29UTVVpSHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdTRk1LSWhnWHpnVUdVMnNVbUZUN2NhTWp5NElkQVh3SGpqT0JzM2Rqd289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY05LM0hVMEpDTGdURjZ4bFBiUW4rU3RQYWxBTkp1U2Qxa1hiN2FTd0NWbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUdlVzRZVXVQanNuV3Zpc2Z2MVJRdWt1eUNCTU1jdE9VS21DQVhJWFZsRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkplSXY0REpQZUgyY2JnUXowU01MRXorTGVBbFJibXBWS25FcUd6a3orZ0YvNERoSEZueFphZUJDMFErZXhEYm0xdDJwblRSZHYzbElkY3RKVm5mU2lnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQxLCJhZHZTZWNyZXRLZXkiOiJvaWIwQUp4QSsrcGRwdmZBN0VVRGY4MGNqY1RhQndpRjFZTjRGL1QrRUdjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJFOFBpNWJ6RlQxU0JaeWx5SWpSSVZRIiwicGhvbmVJZCI6IjRkNmFjMmNkLTlhOGEtNDc4Mi1hNDFiLTllODA2MTE5ZTEzNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLRGptS2lpaS9URytJUklPT3ZmSmZHbXFtYjg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQVRnd0ZYbzZmWkNlSE9DT1dDWm9DRTJkcVJzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjNSWEtMUUVDIiwibWUiOnsiaWQiOiIyMzQ5MDEzMzU4MzcwOjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoid3VubmEx77iP4oOjIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOTzdrcGtHRU1UazViWUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJWRWk2d3VGT2RWYlJWODlvVFhUYmZxYVhrY0xBZkl4aUZEODFtbVVpU1RrPSIsImFjY291bnRTaWduYXR1cmUiOiJHbnFWS2w1VzVSbXBDKy9Wckl4K2JoakZ3R2xhWEdheSszY2syRGNOdFE4ZngzZnhiMW90bHJ6ZmxRWkFaREtVZ2FSS2Z6ZzBkT1Y1RnVzMy84eThqUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoibnBZT2QvYkJTOEhSNlBKWkVIMkdqMzEyVlN6WGIxNk5hbGdFNjI0bXY0czFXTnkyNUNDd1NSdktVci9JMkNvcWNaQ3Z0WW9tWkM5NHB3UTNlVUw0aEE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDEzMzU4MzcwOjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVlJJdXNMaFRuVlcwVmZQYUUxMDIzNm1sNUhDd0h5TVloUS9OWnBsSWtrNSJ9fV0sInBsYXRmb3JtIjoic21iaSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNTUyNjYwOX0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "QUEEN_NIKKA",
  packname: process.env.PACK_NAME || "N I K K A",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
