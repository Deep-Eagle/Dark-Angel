import { areJidsSameUser } from '@adiwajshing/baileys'
let toM = a => '@' + a.split('@')[0]
let handler = async (m, { conn, usedPrefix, command, text, participants, groupMetadata}) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let name = await conn.getName(m.sender)
if(!text) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
    
if (command == 'futurarelacion') {    
let caption = `💗 𝗙𝗨𝗧𝗨𝗥𝗔 𝗣𝗔𝗥𝗘𝗝𝗔 💗\n${toM(a)} 💞 ${toM(b)}\n\n💌 𝗠𝗘𝗡𝗦𝗔𝗝𝗘 𝗗𝗘 𝗔𝗠𝗢𝗥\n*_${await ktnmbk.getRandom()}_*`
await conn.sendButton(m.chat, caption, `*_Si quiere tener una pareja use el comando ${usedPrefix}pareja etiquetando a tu futura Pareja._*\n\n` + wm, null, [
['🤭 𝙌𝙐𝙀 𝙎𝙀 𝘿𝙀𝘾𝙇𝘼𝙍𝙀𝙉', `amor`],
['🧐 𝙊𝙏𝙍𝘼 𝙋𝘼𝙍𝙀𝙅𝘼', `${usedPrefix}futurarelacion`],
['😆 𝙀𝙎 𝙐𝙉𝘼 𝙋𝘼𝙍𝙀𝙅𝘼 𝙍𝘼𝙉𝘿𝙊𝙈', `😂`]], m, { mentions: conn.parseMention(caption) })
}}
	
if(isNaN(text)) {
var number = text.split`@`[1]
} else if(!isNaN(text)) {
var number = text
}

if(!text && !m.quoted) return await conn.sendButton(m.chat, `${mg}𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝙀 𝙊 𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝙀 𝘼𝙇 𝙈𝙀𝙉𝙎𝘼𝙅𝙀 𝘿𝙀 𝙇𝘼 𝙋𝙀𝙍𝙎𝙊𝙉𝘼 𝙌𝙐𝙀 𝙌𝙐𝙄𝙀𝙍𝙀 𝙌𝙐𝙀 𝙎𝙀𝘼 𝙎𝙐 𝙋𝘼𝙍𝙀𝙅𝘼\n\n𝙏𝘼𝙂 𝙊𝙍 𝙍𝙀𝙋𝙇𝙔 𝙏𝙊 𝙏𝙃𝙀 𝙈𝙀𝙎𝙎𝘼𝙂𝙀 𝙁𝙍𝙊𝙈 𝙏𝙃𝙀 𝙋𝙀𝙍𝙎𝙊𝙉 𝙔𝙊𝙐 𝙒𝘼𝙉𝙏 𝙏𝙊 𝘽𝙀 𝙔𝙊𝙐𝙍 𝙋𝘼𝙍𝙏𝙉𝙀𝙍`, wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)
	
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = conn.getName(m.quoted.sender)
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
}  
} catch (e) {
} finally {
let users = m.isGroup ? participants.find(v => areJidsSameUser(v.jid == user)) : {}
	
if(!users) return await conn.sendButton(m.chat, `${fg}𝙉𝙊 𝙎𝙀 𝙀𝙉𝘾𝙊𝙉𝙏𝙍𝙊 𝘼 𝙇𝘼 𝙋𝙀𝙍𝙎𝙊𝙉𝘼, 𝘿𝙀𝘽𝙀 𝘿𝙀 𝙀𝙎𝙏𝘼𝙍 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝙏𝙃𝙀 𝙋𝙀𝙍𝙎𝙊𝙉 𝙒𝘼𝙎 𝙉𝙊𝙏 𝙁𝙊𝙐𝙉𝘿, 𝙏𝙃𝙀𝙔 𝙈𝙐𝙎𝙏 𝘽𝙀 𝙄𝙉 𝙏𝙃𝙄𝙎 𝙂𝙍𝙊𝙐𝙋`, wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)
	
if(user === m.sender) return await conn.sendButton(m.chat, `${fg}𝙐𝙎𝙏𝙀𝘿 𝙈𝙄𝙎𝙈𝙊 𝙉𝙊 𝙋𝙐𝙀𝘿𝙀 𝙎𝙀𝙍 𝙋𝘼𝙍𝙀𝙅𝘼\n\n𝙔𝙊𝙐 𝙔𝙊𝙐𝙍𝙎𝙀𝙇𝙁 𝘾𝘼𝙉𝙉𝙊𝙏 𝘽𝙀 𝘼 𝙋𝘼𝙍𝙏𝙉𝙀𝙍`, wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)
	
if(user === conn.user.jid) return await conn.sendButton(m.chat, `${fg}𝙔𝙊 𝙉𝙊 𝙋𝙐𝙀𝘿𝙊 𝙎𝙀𝙍 𝙎𝙐 𝙋𝘼𝙍𝙀𝙅𝘼 😹\n\n𝙒𝙄𝙏𝙃 𝙈𝙀 𝙔𝙊𝙐 𝘾𝘼𝙉𝙉𝙊𝙏 𝘽𝙀 𝘼 𝘾𝙊𝙐𝙋𝙇𝙀`, wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)

if (typeof global.db.data.users[user] == "undefined") return await conn.sendButton(m.chat, `${fg}𝙇𝘼 𝙋𝙀𝙍𝙎𝙊𝙉𝘼 𝙌𝙐𝙀 𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝙊 𝙉𝙊 𝙀𝙎𝙏𝘼 𝙀𝙉 𝙈𝙄 𝘽𝘼𝙎𝙀 𝘿𝙀 𝘿𝘼𝙏𝙊𝙎\n\n𝙏𝙃𝙀 𝙋𝙀𝙍𝙎𝙊𝙉 𝙄 𝙏𝘼𝙂 𝙄𝙎 𝙉𝙊𝙏 𝙄𝙉 𝙈𝙔 𝘿𝘼𝙏𝘼𝘽𝘼𝙎𝙀`, wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)
	
let pacar = global.db.data.users[user].pasangan
let spac = global.db.data.users[m.sender].pasangan
let yo = conn.getName(m.sender)
let tu = conn.getName(who)

if(global.db.data.users[m.sender].pasangan != "" && global.db.data.users[global.db.data.users[m.sender].pasangan].pasangan == m.sender && global.db.data.users[m.sender].pasangan != user){
await conn.sendButton(m.chat, `𝙀𝙍𝙀𝙎 𝙄𝙉𝙁𝙄𝙀𝙇 🙀😠 𝙋𝙀𝙍𝙊 𝙎𝙄 𝙔𝘼 𝙀𝙎𝙏𝘼𝙎 𝙀𝙉 𝙐𝙉𝘼 𝙍𝙀𝙇𝘼𝘾𝙄𝙊𝙉 𝘾𝙊𝙉 *${await conn.getName(spac)}*\n\n𝘼𝘾𝘼𝙎𝙊 𝙌𝙐𝙄𝙀𝙍𝙀𝙎 𝙏𝙀𝙍𝙈𝙄𝙉𝘼𝙍 𝙇𝘼 𝙍𝙀𝙇𝘼𝘾𝙄𝙊𝙉? 🤔\n𝘿𝙀 𝙎𝙀𝙍 𝘼𝙎𝙄, 𝙀𝙎𝘾𝙍𝙄𝘽𝘼 *${usedPrefix}terminar @tag* 𝙋𝘼𝙍𝘼 𝙌𝙐𝙀 𝙋𝙐𝙀𝘿𝘼 𝙏𝙀𝙉𝙀𝙍 𝙐𝙉𝘼 𝙍𝙀𝙇𝘼𝘾𝙄𝙊𝙉 𝘾𝙊𝙉 *${await conn.getName(user)}*`, wm, null, [
['❤️ 𝙈𝘼𝙉𝙏𝙀𝙉𝙀𝙍 𝙍𝙀𝙇𝘼𝘾𝙄𝙊𝙉', '.mipareja'],
['💔 𝙏𝙀𝙍𝙈𝙄𝙉𝘼𝙍 𝙍𝙀𝙇𝘼𝘾𝙄𝙊𝙉', '/terminar']], m, { contextInfo: { mentionedJid: [m.sender, who, user, global.db.data.users[m.sender].pasangan]}})
}else if(global.db.data.users[user].pasangan != ""){
	
if (pacar){
if (m.sender == pacar && global.db.data.users[m.sender].pasangan == user) return conn.reply(m.chat, `ya estas saliendo ${spac.split('@')[0]}`, m , { contextInfo: { mentionedJid: [spac]}})
conn.reply(m.chat, `𝙉𝙊 𝙋𝙐𝙀𝘿𝙀𝙎 𝙋𝙊𝙍𝙌𝙐𝙀 *${await conn.getName(user)}* 𝙔 ${await conn.getName(pacar)} 𝙀𝙎𝙏𝘼𝙉 𝙀𝙉 𝙐𝙉𝘼 𝙍𝙀𝙇𝘼𝘾𝙄𝙊𝙉\n𝘽𝙐𝙎𝙌𝙐𝙀 𝙊𝙏𝙍𝘼 𝙋𝙀𝙍𝙎𝙊𝙉𝘼 𝙌𝙐𝙀 𝙌𝙐𝙄𝙀𝙍𝘼 𝙎𝙀𝙍 𝙎𝙐 𝙋𝘼𝙍𝙀𝙅𝘼`, m , { contextInfo: { mentionedJid: [m.sender, global.db.data.users[m.sender].pasangan]}})
}else{
	
global.db.data.users[m.sender].pasangan = user
conn.reply(m.chat, `${await ktnmbk.getRandom()}\n\nAcabas de invitar @${user.split('@')[0]}\n\n¡Por favor espere una respuesta!`, m , { contextInfo: { mentionedJid: [user]}})
}	
	
}else if (global.db.data.users[user].pasangan == m.sender){
global.db.data.users[m.sender].pasangan = user
conn.reply(m.chat, `Felicitaciones, oficialmente están saliendo @${user.split('@')[0]}\n\nQue dure para siempre y siempre sea feliz 🥳🥳🥳`, m , { contextInfo: { mentionedJid: [user]}})
}else {
	
global.db.data.users[m.sender].pasangan = user
await conn.sendButton(m.chat, `*_${await ktnmbk.getRandom()}_*\n\n*${await conn.getName(m.sender)}* 𝙎𝙀 𝙀𝙎𝙏𝘼 𝘿𝙀𝘾𝙇𝘼𝙍𝘼𝙉𝘿𝙊!!! 😳\n𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍 *${await conn.getName(who)}* 𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝙀 𝘼 𝙇𝘼 𝘿𝙀𝘾𝙇𝘼𝙍𝘼𝘾𝙄𝙊𝙉 🙀`, `❤️ *_Si quieres una Relacion escriba:_*\n*➠ ${usedPrefix}aceptar @${conn.getName(m.sender)}*\n\n💔 *_De no querer una Relacion escriba:_*\n*➠ ${usedPrefix}rechazar @${conn.getName(m.sender)}*\n\n` + wm, null, [
['🥳 𝙑𝘼𝙈𝙊𝙎 𝘼𝘾𝙀𝙋𝙏𝘼', `Amor`]], m, { contextInfo: { mentionedJid: [ who, m.sender, user ]}})
}}}

handler.command = /^(futurarelacion|pareja|elegirpareja|serpareja|sersupareja|couple|elegirpareja)$/i
handler.group = true

export default handler

let ktnmbk = [
"මම තනියම ඉන්න අකමැති වෙලාවල් තියෙනවා. ඒත් හැමෝම මාත් එක්ක එනවට මට ඕන නෑ, මට ඕන ඔයා විතරයි",
"ඔබ මේ කාලය පුරාම පොහොසත් වී ඇති බව මට වැටහුණා! මම මෙච්චර කල් හොයපු දේ වගේ. ඔබට මගේ පෙම්වතිය වීමට අවශ්‍යද?",
"මම මගේ ඇස්වලට ස්තුති කරමි, මන්ද මෙම ඇස් ඔබව සොයා ගැනීමට මා යොමු කළ බැවිනි",
"මට ඔබට CV එකක් එවිය හැකිද නැද්ද? මොකද මට පෙම්වතියක් වෙන්න අයදුම් කරන්න ඕන නිසා",
"මම උතුම්ම නොවේ, නමුත් මට විශ්වාසයි මට ඔබව ආදරයෙන් හා සෙනෙහසින් සතුටු කළ හැකි නම්, ඔබ මට ආදරෙයි නේද?",
"මම සාමාන්‍ය මිනිසෙක් වන අතර බොහෝ අඩුපාඩු ඇති සහ ඔබේ ආදරය ලැබීමට වටින්නේ නැත, නමුත් ඔබ මාව පෙම්වතියක් ලෙස පිළිගැනීමට කැමති නම්, ඔබට හොඳම දේ කිරීමට මම පොරොන්දු වෙමි. ඔබ මගේ ආදරය පිළිගන්නවාද?",
"මට දෙයක් කියන්න ඕන. මම දිගු කලක් එයට කැමතියි, නමුත් මම එය නොකියමි. ඉතින්, මම තීරණය කළේ WA කිරීමට පමණි. මට ඕන ඔයා මගේ පෙම්වතිය වෙන්න",
"මට තව දුරටත් දරාගන්න බැරි දෙයක් කියන්න ඕන. මම ඔයාට ආදරෙයි, ඔයා මගේ පෙම්වතිය වෙයිද?",
"මට ඕන හැමදාම ඔයාව හිනස්සලා හිනාවෙන්න පුළුවන් කෙනෙක් වෙන්න. ඔබ මගේ පෙම්වතිය වෙනවාද?",
"මට ඔබ සමඟ බැරෑරුම් ලෙස කතා කිරීමට අවශ්‍යයි. මේ කාලය පුරාම මම ඔබ ගැන හැඟීම් ඇති කර ගත් අතර මම ඔබ ගැන සැමවිටම දැනුවත්ව සිටිමි. ඔයාට කමක් නැත්තම් ඔයාට මගේ පෙම්වතිය වෙන්න ඕනද?",
"මම ඔබ දෙස බලා මගේ ඇස් ඉදිරිපිට මගේ ජීවිතයේ ඉතිරි කොටස දකිමි.",
"මට හැමදේම නැති වුනාට අඩුම තරමේ මට ඔයා ගැන ඇති තරම් ආදරයක් තියෙනවා",
"මම මුල ඉඳන්ම ඔයාට කැමති උනා. ඔබ හරිම සරලයි, නමුත් සරල බව මගේ ඇස් හමුවේ ඉතා විශේෂයි. ඔබ මගේ හදවතේ විශේෂ නම් එය පරිපූර්ණ වනු ඇත",
"ඇත්තටම මම ඔයාට ආදරෙයි. ඔබ මගේ වේවි?",
"මට කෝටාවක් හෝ ක්‍රෙඩිට් එකක් නැති නිසා මම එපා කීවේ නැත, නමුත් මම ඔබ වෙනුවෙන් මේ ආශාව භුක්ති විඳිමි. ඒක ඇහුවොත් ඔබ පුදුම වෙයි. මම හැමදාමත් ඔයාට කැමතියි",
"ඔබ මගේ ජීවිතයේ හිරු වනවාට මට අවශ්‍ය නැත, මන්ද එය උණුසුම් වුවද ඔබ දුරින් සිටින බැවිනි. මටත් ඔබ වාතයක් වීමට අවශ්‍ය නැත, මන්ද මට ඔබව අවශ්‍ය වුවද ඔබ ඉතා සමීප වුවද, නමුත් සෑම කෙනෙකුටම ඔබව හුස්ම ගත හැකිය. හුදෙක් කුමක්ද",
"මගේ වයස කීයට ඉවර වෙයිද දන්නේ නෑ. මම දන්නේ මගේ ආදරය සදහටම ඔබට පමණක් බව පමණි",
"අද අපි එකට ගත කළ කාලය මම ඇත්තටම සතුටට පත් වුණා. අපිත් කාලයක් තිස්සේ එකිනෙකා හඳුනනවා. මෙම හිරු දවසේ, මම ඔබට ආදරය කරන බව ඔබට ප්රකාශ කිරීමට අවශ්යයි.",
"කවදා හරි දවසක ගෙදරකින් නැවක් හදලා ජීවිතේ අවසාන වෙනකම්ම එකට ජීවත් වෙන්න පුළුවන් නම් කොච්චර ලස්සනද කියලා මට නිතරම හිතුණා. කොහොම වුණත් අපි දෙන්නා නොහිටියා නම් මේ හැමදේම වෙන්නේ නැහැ",
"මම අද දවස සඳහා මානසිකව සූදානම් වෙමි. මේ පාලනය කළ නොහැකි ආදරය සමඟ කටයුතු කිරීමට ඔබ මගේ පෙම්වතිය විය යුතුය",
"මම දන්නවා අපි එකම වයසේ නෙවෙයි කියලා, ඒත් මට ඔයා එක්ක ජීවිත කාලෙම ඉන්න පුළුවන්ද?",
"මම දන්නවා අපි ගොඩක් කාලෙක ඉඳන් යාළුවො. ඒත් මම ඔයාට කැමති නම් ඒක වැරදියි නේද? ඔබේ පිළිතුර කුමක් වුවත් මම පිළිගනිමි. වැදගත්ම දෙය නම් මගේ හදවතේ පහළ සිට අවංක වීමයි.",
"මට මේක මුලින්ම පටන් ගන්න බැහැ, නමුත් මම ඔයාට කැමති කේතයක් දෙන්නම්. ඔබ මෙම කේතය තේරුම් ගන්නේ නම්, අපි එකට සිටිමු",
"මම ඕනෑවට වඩා මෝඩද නැත්නම් ඔබ මා ඔබට ආදරය කිරීමට තරම් ආත්මාර්ථකාමීද?",
"ඔයා ගැන කිසිම දෙයක්, මම කවදාවත් ඒකේ කම්මැලිකමක් හොයාගෙන නැහැ. මක්නිසාද යත් ඔබේ පැත්තේ සිටීම මට ඇති ලස්සනම තෑග්ග නිසාය. මගේ පෙම්වතා වන්න, ඒයි ඔබ",
"අල්ලාහ්ගේ අවසරය සහ අම්මා තාත්තාගේ ආශිර්වාදය ඇතිව, ඔබ මගේ පෙම්වතා වීමට කැමතිද නැද්ද?",
"අපි හොරු රැලක් වුණොත්? මම ඔබේ හදවත සොරකම් කළ අතර ඔබ මගේ හදවත සොරකම් කළා",
"ඔබත් මමත් අපි බවට පත්වීම සතුටක්",
"හෙට, එය සාර්ථක නොවන්නේ නම්, මට ඔබේ පෙම්වතිය වීමට ලියාපදිංචි විය හැකිය. ඔබ ගැන නිතරම සිතීමට මට වැඩ කිරීමට ඉඩ දෙන්න",
"මට ඔබව සදහටම සතුටු කිරීමට ඉඩ දෙන්න. ඔබට කළ යුත්තේ එක් දෙයක් පමණි: මා සමඟ ආදරයෙන් බැඳෙන්න",
"මගේ සියලු සතුට ඔබට වේවා, ඔබේ සියලු දුක මගේ වේවා. මුළු ලෝකයම ඔබේ වේවා, ඔබ පමණක් මගේ වේවා!",
"අතීතය මගේ අතීතය වේවා, නමුත් වර්තමානයට ඔබ මගේ අනාගතය වේවිද?",
"ඔබේ හදවතට මඟ පෙන්වීමක් ලබා දිය හැකිද? ඔබේ ඇස් හමුවේ මට මා අහිමි වී ඇති බව පෙනේ",
"මා සොයන්නේ සිංහාසනය හෝ නිධානය නොව, මා ඔබෙන් බලාපොරොත්තු වන මගේ ආදරයේ නැවත පැමිණීමයි. පිළිතුර ඔව් යන්නයි",
"අඳුරුතම දිනවලදී පවා ඔබට මාව හිනස්සවිය හැකි ආකාරය අන් සියල්ලටම වඩා සැහැල්ලු බවක් දැනේ. මට ඕන ඔයා මගේ වෙන්න",
"ඔබ කෙරෙහි මගේ ආදරය අවිවාදිත ය, මන්ද මෙම ආදරය මගේ හදවතේ පහළ සිට අවංක ය.",
"ඔබට මගේ ආදරය 5 සිට 10 දක්වා අංකයක් වැනිය.දෙවැන්නක් නැත. මට ඕන ඔයා මගේ හිතේ ඉන්න එකම ගැහැණිය වෙන්න",
"මොන කොල්ලද ඔයාට රිද්දන්න එඩිතර වෙන්නේ. මෙන්න මම ඔබට සලකන්නම්, ඔබ මගේ පෙම්වතිය වීමට කැමති තාක් කල්",
"ඒයි, ඔයා මොනවද කරන්නේ? ගෙදරින් බැහැලා අද රෑ හඳ දිහා බලන්න. ආලෝකය ලස්සනයි, සිත් ඇදගන්නා සුළුයි, නමුත් මම ඔබේ පැත්තේ සිටියා නම් එය තවත් ලස්සන වනු ඇත. අපි එකට හිටියොත් කොහොමද?"
]
