let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  await conn.reply(m.chat, mess.wait, 0, { thumbnail: await(await fetch(ext.thum)).buffer(), contextInfo: {
                  externalAdReply: {
                    mediaUrl: 'https://youtu.be/-tKVN2mAKRI',
                    title: ext.title,
                    body: ext.body,
                    thumbnail: await(await fetch(ext.thum)).buffer()
                   }
                 }
               }
           )
  let res = `https://naufalhoster.xyz/textmaker/fb_golden_play_button?apikey=Cv5SHS-9ZxAto-HnWqLR&text=${response}`
  conn.sendFile(m.chat, res, 'nama.jpg', mess.sukses, m, false)
}
handler.help = ['fbplaybutton'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(fbplaybutton)$/i
handler.limit = true
handler.register = true

module.exports = handler

//31caf10e4a64e86c1a92bcba