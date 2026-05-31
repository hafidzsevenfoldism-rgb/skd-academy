const jwt = require('jsonwebtoken');

/* ══════════════════════════════
   MIDDLEWARE AUTENTIKASI JWT
   Dipakai di semua route yang butuh login
══════════════════════════════ */
function authMiddleware(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Format: "Bearer <token>"

  if (!token) {
    return res.status(401).json({
      error: 'Akses ditolak. Silakan login terlebih dahulu.'
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // { id, nama, email, role }
    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return res.status(403).json({
        error: 'Sesi sudah berakhir. Silakan login kembali.'
      });
    }
    return res.status(403).json({
      error: 'Token tidak valid. Silakan login kembali.'
    });
  }
}

module.exports = authMiddleware;
