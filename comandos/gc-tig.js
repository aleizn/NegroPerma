let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*āŖššØš­ššš§š§š±ššš­š¢:* ${pesan}`
let teks = `*āŗššššššššš ššššššššāŗ*\n\nāŖ ${oi}\n\nāŖ *šš­š¢šŖš®šš­š š šš§šš«šš„:*\n`
for (let mem of participants) {
teks += `ā£āļø @${mem.id.split('@')[0]}\n`}
teks += `āššš§š§š±ššš­š¢`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tig <mesaje>','tati <mesaje>']
handler.tags = ['group']
handler.command = /^(tig|tati)$/i
handler.admin = true
handler.group = true
export default handler
