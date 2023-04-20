import moment from 'moment-timezone'

let handler = async (m, { conn }) => {  
const fechaper = moment().tz('Asia/Colombo').format('DD/MM HH:mm')
const fechamex = moment().tz('Asia/Colombo').format('DD/MM HH:mm')
const fechabol = moment().tz('Asia/Colombo').format('DD/MM HH:mm')
const fechachi = moment().tz('Asia/Colombo').format('DD/MM HH:mm')
const fechaarg = moment().tz('Asia/Colombo').format('DD/MM HH:mm')
const fechacol = moment().tz('Asia/Colombo').format('DD/MM HH:mm')
const fechaecu = moment().tz('Asia/Colombo').format('DD/MM HH:mm')
const fechacosr = moment().tz('Asia/Colombo').format('DD/MM HH:mm')
const fechacub = moment().tz('Asia/Colombo').format('DD/MM HH:mm')
const fechagua = moment().tz('Asia/Colombo').format('DD/MM HH:mm')
const fechahon = moment().tz('Asia/Colombo').format('DD/MM HH:mm')
const fechanic = moment().tz('Asia/Colombo').format('DD/MM HH:mm')
const fechapan = moment().tz('Asia/Colombo').format('DD/MM HH:mm')
const fechauru = moment().tz('Asia/Colombo').format('DD/MM HH:mm')
const fechaven = moment().tz('Asia/Colombo').format('DD/MM HH:mm')
const fechapar = moment().tz('Asia/Colombo').format('DD/MM HH:mm')
const fechanew = moment().tz('Asia/Colombo').format('DD/MM HH:mm')
const fechaasi = moment().tz('Asia/Colombo').format('DD/MM HH:mm')
const fechabra = moment().tz('Asia/Colombo').format('DD/MM HH:mm')
const fechaafri = moment().tz('Asia/Colombo').format('DD/MM HH:mm')
await conn.sendMessage(m.chat, { text: `\`\`\`
「 ZONA-HORARIA 🗺️ 」
⏱️Peru       : ${fechaper}
⏱️Mexico     : ${fechamex}
⏱️Bolivia    : ${fechabol}
⏱️Chile      : ${fechachi}
⏱️Argentina  : ${fechaarg}
⏱️Colombia   : ${fechacol}
⏱️Ecuador    : ${fechaecu}
⏱️Costa_Rica : ${fechacosr}
⏱️Cuba       : ${fechacub}
⏱️Guatemala  : ${fechagua}
⏱️Honduras   : ${fechahon}
⏱️Nicaragua  : ${fechanic}
⏱️Panama     : ${fechapan}
⏱️Uruguay    : ${fechauru}
⏱️Venezuela  : ${fechaven}
⏱️Paraguay   : ${fechapar}
⏱️New York   : ${fechanew}
⏱️Indonesia  : ${fechaasi}
⏱️Brasil     : ${fechabra}
⏱️G.N.Q      : ${fechaafri}
\`\`\`
${String.fromCharCode(8206).repeat(850)}
💻 *Zona horaria del servidor actual:*\n*[ ${Intl.DateTimeFormat().resolvedOptions().timeZone} ]*\n*${moment().tz(Intl.DateTimeFormat().resolvedOptions().timeZone).format('DD/MM/YY HH:mm:ss')}*` }, {quoted: m })
}

handler.help = ['horario']
handler.tags = ['info']
handler.command = /^(horario)$/i

export default handler
