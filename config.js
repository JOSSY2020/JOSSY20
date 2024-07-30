//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "frediezra60@gmail.com";
global.location = "Dar Es Salam,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Frecyber/Frecyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1d4a42b28790d0f7a7195.jpg";
global.devs = "255620814108,255764182801,255776663848";
global.sudo = process.env.SUDO || "255620814108,255764182801,255776663848";
global.owner = process.env.OWNER_NUMBER || "255768152649";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk42T0NUNFZ1V2lRczk2bms2MEZJMmE3RlNMR21CRTRUdHFWZ0I3YWczMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYk4wbmRUOHdtNWxCS0o5anBwTXBJMU0wcWZkUTJqVUo0UHViUHJsZFRRST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5UEFJT01mQmpDS284TFJTS3Ixdm5lSnJHMDF4ZThGRjNEYzdsUnNSYzBRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCLzhxOWx5dlM1RXN1Y0RnU0daQnZPSmJNeUJENnlVNlVtNnlEV1lBRG1zPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlMSTFUQVRhaVJaNnJxdTYyTkNhZVpqTlpTMHZhN0F4QitNZGlGM1Bvbk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InF6a3JPZ1ZXL2h0aEQ2bzlFRlFqWUcwT1dmKy9Sek5QUHVORGVqMlZZQ289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUhVZnlNbDhGb0h6RFQ1MTJZTWlaL29xNWF1MzNDM1RvZ3RjdG9tZDkxaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicTZzZ0RKZ0hOelNOVkE5MGJ4QmJKK0dLYm0xSVlwQlFib3ZWTHRtc3ZXOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImQxdGdiSUZnRG10SXJaQlhRZC9IQ0hEaW15U2FlNEFOVFlGODB5K2gydVVaVWdrajYvVTRiOEpvQitaVnBMaXhzRGdQWWtMbUJXV293NXg1eTU0bmdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDMsImFkdlNlY3JldEtleSI6InVtdUowL1ljNlV1T3UzbW9OMExkTDhTRjlSeWsrUEhEZGp2RGdZVUFxNGc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU1NzY4MTUyNjQ5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkQzRkY1OUVCQUFCM0ZDNkM4RjIwQUY2N0I3ODlEQ0Y5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjIzMTU5NDd9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Inl6Z2VjOTE4UUQ2dlJlcjJKZ1RTcFEiLCJwaG9uZUlkIjoiNTJjZjUwNTUtYTVlOC00OGJmLWI0ZDQtOTRkZWIyMDczZjYwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjQyQ3NkNEVGK2twa2pXREh0Y2VBYlRqQ2kwaz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaQ0o4T2ZFam4vZTZBSW92RENhMkcxZlRrNk09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRVNGNEo2UDEiLCJtZSI6eyJpZCI6IjI1NTc2ODE1MjY0OTozM0BzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSWJ2eFRvUW11bWh0UVlZQlNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTFBWYzBlUWViQXB2NUNYMUIwV0FnM2t1czhnZ1VxMjlpVHNXT1FYbVVWTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNzU2c3pULy9JbnppbC9yN0dGcVh0cUpOTm9QcVhLRkN4dU1mOUlsWXI1NHJtT2t6NklRd1U1YXMrclowcTIrL0wya3dvZGlwTnN4NGpJSmpZOUFNQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6IldTaUxteS9sdFVkbVRVTHVjQnN5U0tXb1NhN1lwZUZDcjg0Wk10R2ZQdVY4M1JwQlVVYnVoRDdTMEVaWlo0TS9hdUhPdytWNVRQTWVPSHhCdHNRM2lnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU1NzY4MTUyNjQ5OjMzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlN6MVhOSGtIbXdLYitRbDlRZEZnSU41THJQSUlGS3R2WWs3RmprRjVsRlQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjIzMTU5NDQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQlRzIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐅𝚪𝚵𝐂𝐘𝚩𝚵𝚪 𝚳𝐃",
  author: process.env.PACK_AUTHER || "FRECYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "FRECYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "JOSSY2020",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
