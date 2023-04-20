let handler = async (m, { conn, command, text, usedPrefix }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

const sections = [{
title: comienzo + ' 🗂️ 𝙏𝙄𝙋𝙊𝙎 𝘿𝙀 𝙇𝙄𝙎𝙏𝘼𝙎 ' + fin,
rows: [
{title: "📛 𝗕𝗟𝗢𝗤𝗨𝗘𝗔𝗗𝗢𝗦 : 𝗕𝗟𝗢𝗖𝗞𝗘𝗗", rowId: `${usedPrefix}listablock`, description: `පරිශීලකයන් අවහිර කර ඇත`},
{title: "⚠️ 𝗔𝗗𝗩𝗘𝗥𝗧𝗜𝗗𝗢𝗦 : 𝗪𝗔𝗥𝗡𝗘𝗗", rowId: `${usedPrefix}listadv`, description: `පරිශීලකයින් නරක වචන සඳහා ප්‍රකාශ කර ඇත.`},
{title: "📵 𝗖𝗛𝗔𝗧 𝗕𝗔𝗡𝗘𝗔𝗗𝗢𝗦 : 𝗕𝗔𝗡𝗡𝗘𝗗 𝗖𝗛𝗔𝗧𝗦", rowId: `${usedPrefix}chatsbaneados`, description: `ඔවුන්ට Dark Angel භාවිතා කළ නොහැකි කතාබස්`},
{title: "🚷 𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 𝗕𝗔𝗡𝗘𝗔𝗗𝗢𝗦 : 𝗕𝗔𝗡𝗡𝗘𝗗 𝗨𝗦𝗘𝗥𝗦", rowId: `${usedPrefix}listbanuser`, description: `Dark Angel භාවිතා කළ නොහැකි පරිශීලකයින්`},
{title: "🎟️ 𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 : 𝗩𝗜𝗣 𝗨𝗦𝗘𝗥𝗦", rowId: `${usedPrefix}listapremium`, description: `VIP සහිත පරිශීලකයන්`},
{title: "💞 𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 𝗘𝗡 𝗥𝗘𝗟𝗔𝗖𝗜𝗢𝗡 : 𝗥𝗘𝗟𝗔𝗧𝗜𝗢𝗡𝗦𝗛𝗜𝗣", rowId: `${usedPrefix}listaparejas`, description: `ආදර සබඳතාවයක සිටින පරිශීලකයින්.`}]}]

const listMessage = {
  text: `𝙏𝙄𝙋𝙊𝙎 𝘿𝙀 𝙇𝙄𝙎𝙏𝘼𝙎 𝘿𝙀 𝙐𝙎𝙐𝘼𝙍𝙄𝙊𝙎\n𝙏𝙔𝙋𝙀𝙎 𝙊𝙁 𝙐𝙎𝙀𝙍 𝙇𝙄𝙎𝙏𝙎`,
  footer: wm,
  title: `${htki} 𝙇𝙄𝙎𝙏𝘼 𝙑𝘼𝙍𝙄𝘼𝘿𝘼𝙎 📃`,
  buttonText: `📑 මෙතන බලන්න 📑`,
  sections
}
await conn.sendMessage(m.chat, listMessage, {quoted: fkontak})}
handler.command = /^listas|lists?$/i
export default handler
