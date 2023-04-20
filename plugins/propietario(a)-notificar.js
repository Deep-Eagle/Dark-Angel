const linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i
const grupo = nna
let handler = async (m, { conn, text, usedPrefix, command, participants, groupMetadata }) => {
let users = m.sender.split`@`[0]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let [_, code] = grupo.match(linkRegex) || []
if ( users == 94763407452 || users == 94774071805 || users == 94775597507 || users == 94740158641 || users == 94783745231 || users == 94715264791 || users == 94776115376 || users == 94775200935 || users == 94719757085 ) try {
//if ( users == 593993684821 || users == 593968585383) try {
if (!text) return m.reply(`*Falta Texto*`) 
let res = await conn.groupAcceptInvite(code)
await conn.sendMessage(res, { text: text + ( users == 94763407452 ? '\n\n_atte. ᴅᴇᴇᴘ ᴇᴀɢʟᴇ⚒️_' : '' || users == 94774071805 ? '\n\n_atte. ᴄʏʙᴇʀ ʏᴀᴋᴜᴢᴀ_' : '' || users == 94775597507 ? '\n\n_atte. Queen-Hero-MD_' : '' || users == 94740158641 ? '\n\n_atte. Dark Rush_' : '' || users == 94783745231 ? '\n\n_atte. Anuhasꦿ࿔_' : '' || users == 94715264791 ? '\n\n_atte. ᴍ ʀ . ᴛ ɪ ᴍ ᴀ⁩_' : '' || users == +94 94776115376 ? '\n\n_atte. 😎K.Prabhasha⁩_' : '' || users == 94775200935 ? '\n\n_atte. DARK WINZO_' : '' || users == 94719757085 ? '\n\n_atte. Madusanka⁩_' : '' ), mentions: (await conn.groupMetadata(`${res}`)).participants.map(v => v.id) }, { quoted: fkontak })
await m.reply(`✅ *MENSAJE ENVIADO CON ÉXITO* `)

} catch (e) {
await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
} else {
await m.reply('```USTED NO TIENE AUTORIZACIÓN PARA USAR ESTE COMANDO.```')}
}
handler.command = ['mensajeoficial']
handler.owner = true
export default handler
