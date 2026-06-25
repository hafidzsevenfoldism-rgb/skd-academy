const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

async function kirimEmailReset(to, token) {
  const resetLink = (process.env.FRONTEND_URL || 'http://localhost:5500') +
    '/resetpassword.html?token=' + token;

  await transporter.sendMail({
    from: '"SKD Academy" <' + process.env.SMTP_USER + '>',
    to: to,
    subject: 'Reset Password — SKD Academy',
    html:
      '<div style="max-width:520px;margin:0 auto;font-family:Nunito,sans-serif;background:#0D1F33;padding:40px;border-radius:20px;color:#fff;">' +
        '<h1 style="text-align:center;font-size:28px;color:#4FC3E0;">SKD Academy</h1>' +
        '<p style="font-size:16px;line-height:1.6;">Kami menerima permintaan reset password untuk akun SKD Academy kamu.</p>' +
        '<p style="font-size:16px;line-height:1.6;">Klik tombol di bawah ini untuk mereset password:</p>' +
        '<div style="text-align:center;margin:30px 0;">' +
          '<a href="' + resetLink + '" style="display:inline-block;background:#4FC3E0;color:#0D1F33;padding:14px 36px;border-radius:12px;text-decoration:none;font-weight:700;font-size:16px;">Reset Password</a>' +
        '</div>' +
        '<p style="font-size:14px;color:#8899aa;">Link ini berlaku selama <strong>1 jam</strong>. Jika kamu tidak meminta reset password, abaikan email ini.</p>' +
        '<hr style="border:none;border-top:1px solid #2a3a50;margin:20px 0;">' +
        '<p style="font-size:12px;color:#667788;text-align:center;">SKD Academy &mdash; Raih Nilai Terbaikmu</p>' +
      '</div>'
  });
}

module.exports = { kirimEmailReset };
