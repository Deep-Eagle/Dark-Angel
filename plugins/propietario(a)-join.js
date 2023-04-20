let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, isMods, isOwner }) => {
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_, code] = link.match(linkRegex) || []

if (!code) throw '${mg}🙌 *𝘿𝙀𝘽𝙀 𝘿𝙀 𝙎𝙀𝙍 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙈𝙐𝙎𝙏 𝘽𝙀 𝘼 𝙇𝙄𝙉𝙆*\n😼 *Ingrese el enlace de un grupo.*\n*Enter the link of a group.*\n\n*𝙀𝙅𝙀𝙈𝙋𝙇𝙊 | 𝙀𝙓𝘼𝙈𝙋𝙇𝙀*\n*#unete ${nn}*\n\n*#join ${nnn}*'

if ( isMods || isOwner || m.fromMe) {
m.reply(`*🧚🏻‍♀️Dark Angel🪽 𝙎𝙀 𝙃𝘼 𝙐𝙉𝙄𝘿𝙊 𝘼𝙇 𝙂𝙍𝙐𝙋𝙊!!✅*\n*𝙎𝙐𝘾𝘾𝙀𝙎𝙎𝙁𝙐𝙇𝙇𝙔 𝙅𝙊𝙄𝙉𝙀𝘿 ✅*`)
await delay(5 * 5000)
let res = await conn.groupAcceptInvite(code)
} else {
const data = global.owner.filter(([id]) => id)

await delay(5 * 5000)
for (let jid of data.map(([id]) => [id] + '@s.whatsapp.net').filter(v => v != conn.user.jid)) m.reply(`${iig}╭══•───────────────•══╮\n┃ 📧 *𝙎𝙊𝙇𝙄𝘾𝙄𝙏𝙐𝘿 𝙋𝘼𝙍𝘼 𝙐𝙉 𝙂𝙍𝙐𝙋𝙊*\n┃ 📧 *𝙂𝙍𝙊𝙐𝙋 𝙍𝙀𝙌𝙐𝙀𝙎𝙏*\n╰══•───────────────•══╯\n\n*👤 𝙎𝙊𝙇𝙄𝘾𝙄𝙏𝘼𝙉𝙏𝙀 | 𝘼𝙋𝙋𝙇𝙄𝘾𝘼𝙉𝙏*\n` + ' wa.me/' + m.sender.split('@')[0] + '\n\n*🔮 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 | 𝙂𝙍𝙊𝙐𝙋 𝙇𝙄𝙉𝙆*\n ' + link, jid)

m.reply(`${ag}*✅ ඔබේ සබැඳිය මගේ හිමිකරු වෙත යවා ඇත.*\n*ඔබේ සබැඳිය මගේ හිමිකරු වෙත යවන ලදී.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n⚠️ *ඔබේ කණ්ඩායම ඇගයීමට ලක් කෙරෙන අතර ${gt} කණ්ඩායමට එකතු වන්නේද නැද්ද යන්න මගේ හිමිකරුට භාර වේ.*\n*ඔබේ කණ්ඩායම ඇගයීමට ලක් කෙරෙන අතර ${gt} කණ්ඩායමට සම්බන්ධ වන්නේ නම් හෝ එය මගේ හිමිකරුට පැවරේ. නැත.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n❕ *පහත හේතූන් මත ඔබගේ අයදුම්පත ප්‍රතික්ෂේප වීමට ඉඩ ඇත:*\n*1️⃣ Bot සංතෘප්ත වේ.*\n*Bot සංතෘප්ත වේ.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n2️⃣ *Bot එක Group එකෙන් අයින් කලා.*\n*Bot එක Group එකෙන් අයින් කලා.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n3️⃣ El Grupo no cumple con las Normativas de ${gt}*\n*සමූහය රෙගුලාසි වලට අනුකූල නොවේ *${gt}*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n4️⃣ *කණ්ඩායම් සබැඳිය ප්‍රතිසාධනය කරන ලදී.*\n*සමූහ සබැඳිය ප්‍රතිසාධනය කරන ලදී.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n5️⃣ *මගේ හිමිකරු විසින් කණ්ඩායම්වලට එකතු කර නැත.*\n*මගේ හිමිකරු විසින් කණ්ඩායම්වලට එකතු කර නැත*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n💌 *ඉල්ලීමට පිළිතුරු දීමට පැය ගණනක් ගත විය හැකිය. කරුණාකර ඉවසන්න. ස්තුතියි*\n*ඉල්ලීමට පිළිතුරු දීමට පැය ගණනක් ගත විය හැක. කරුණාකර ඉවසන්න. ඔයාට ස්තූතියි*`)}}

handler.help = ['join [chat.whatsapp.com]']
handler.tags = ['owner']
handler.command = /^unete|join|nuevogrupo|unir|unite|unirse|entra|entrar$/i 
handler.register = true
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
