import fetch from 'node-fetch' 
let handler = async (m, { conn }) => {
let grupos = [nna, nn, nnn, nnnt, nnntt, nnnttt]
let gata = [img5, img6, img7, img8, img9]
let enlace = { contextInfo: { externalAdReply: {title: wm + ' 🐈', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: '😻 𝗦𝘂𝗽𝗲𝗿 🧚🏻‍♀️Dark Angel🪽 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', thumbnailUrl: await(await fetch(global.img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]
await conn.fetchBlocklist().then(async data => {
let txt = `📛 𝗟𝗜𝗦𝗧𝗔 𝗗𝗘 𝗕𝗟𝗢𝗤𝗨𝗘𝗔𝗗𝗢𝗦 : 𝗕𝗟𝗢𝗖𝗞𝗘𝗗\n\n*Total :* ${data.length}\n\n╭━━━[ *${vs} 𓃠* ]━━━⬣\n`
for (let i of data) {
txt += `┃🚫 @${i.split("@")[0]}\n`
}
txt += "╰━━━━━━━⬣"
return conn.sendButton(m.chat, txt, `*කරුණාකර අවහිර වීම වළක්වා ගැනීමට අමතන්න එපා, ස්තුතියි.*\n\n*අවහිර වීම වළක්වා ගැනීමට කරුණාකර අමතන්න එපා, ස්තූතියි.*\n\n` + wm, null, [ 
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], m, { mentions: await conn.parseMention(txt) })
}).catch(err => {
console.log(err);
return conn.sendButton(m.chat, `${rg}𝙉𝘼𝘿𝙄𝙀 𝙃𝘼 𝙎𝙄𝘿𝙊 𝘽𝙇𝙊𝙌𝙐𝙀𝘼𝘿𝙊\n\n𝙉𝙊 𝙊𝙉𝙀 𝙃𝘼𝙎 𝘽𝙀𝙀𝙉 𝘽𝙇𝙊𝘾𝙆𝙀𝘿`, wm, gata, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], m, dos.getRandom())
})} 
handler.command = ['bloqueados', 'bloqueadoslista', 'listablock', 'blocklist', 'listblock', 'listabloqueados'] 

export default handler
