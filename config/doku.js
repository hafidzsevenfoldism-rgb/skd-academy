const crypto = require('crypto');

const DOKU_SANDBOX = 'https://api-sandbox.doku.com';
const DOKU_PRODUCTION = 'https://api.doku.com';

function getBaseUrl() {
  return process.env.DOKU_IS_PRODUCTION === 'true'
    ? DOKU_PRODUCTION
    : DOKU_SANDBOX;
}

function generateDigest(jsonBody) {
  if (!jsonBody) return '';
  const hash = crypto.createHash('sha256').update(jsonBody, 'utf-8').digest();
  return Buffer.from(hash).toString('base64');
}

function generateSignature(clientId, requestId, requestTimestamp, requestTarget, digest, secret) {
  let component = 'Client-Id:' + clientId;
  component += '\n';
  component += 'Request-Id:' + requestId;
  component += '\n';
  component += 'Request-Timestamp:' + requestTimestamp;
  component += '\n';
  component += 'Request-Target:' + requestTarget;
  if (digest) {
    component += '\n';
    component += 'Digest:' + digest;
  }

  const hmac = crypto.createHmac('sha256', secret)
    .update(component)
    .digest();
  const signature = Buffer.from(hmac).toString('base64');
  return 'HMACSHA256=' + signature;
}

async function createPayment(invoiceNumber, amount, customer) {
  const clientId = process.env.DOKU_CLIENT_ID;
  const secret   = process.env.DOKU_SECRET_KEY;
  if (!clientId || !secret) {
    throw new Error('DOKU_CLIENT_ID dan DOKU_SECRET_KEY wajib diisi.');
  }

  const requestId      = crypto.randomBytes(16).toString('hex');
  const requestTimestamp = new Date().toISOString().replace(/\.\d{3}Z$/, 'Z');
  const requestTarget  = '/checkout/v1/payment';

  const frontendUrl = process.env.FRONTEND_URL || 'https://hafidzsevenfoldism-rgb.github.io/skd-academy';

  const body = {
    order: {
      amount: amount,
      invoice_number: invoiceNumber,
      callback_url: frontendUrl + '/payment-result.html',
      callback_url_result: frontendUrl + '/payment-result.html',
      auto_redirect: true
    },
    payment: {
      payment_due_date: 60
    },
    customer: {
      name: customer.name || customer.email || 'User',
      email: customer.email
    }
  };

  const jsonBody = JSON.stringify(body);
  const digest   = generateDigest(jsonBody);

  const signature = generateSignature(
    clientId, requestId, requestTimestamp, requestTarget, digest, secret
  );

  const url = getBaseUrl() + requestTarget;

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Client-Id': clientId,
      'Request-Id': requestId,
      'Request-Timestamp': requestTimestamp,
      'Signature': signature
    },
    body: jsonBody
  });

  const data = await res.json();

  if (!res.ok) {
    const msg = data.error_messages
      ? data.error_messages.join(', ')
      : data.message
        ? data.message.join(', ')
        : 'Gagal membuat pembayaran DOKU';
    throw new Error(msg);
  }

  return {
    paymentUrl: data.response.payment.url,
    tokenId: data.response.payment.token_id,
    expiredDate: data.response.payment.expired_date
  };
}

module.exports = { createPayment, generateDigest, generateSignature };
