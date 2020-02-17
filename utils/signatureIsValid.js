const crypto = require('crypto');

const webhookSecret = process.env.WEBHOOK_SECRET;
if (!webhookSecret) throw new Error('Webhook Secret not set');

// Based on https://gist.github.com/stigok/57d075c1cf2a609cb758898c0b202428
const signatureIsValid = event => {
  const { body } = event;
  const signature = event.headers['X-Hub-Signature'];

  const payload = JSON.stringify(body);
  if (!payload || !signature) return false;

  const hmac = crypto.createHmac('sha1', webhookSecret);
  const digest = Buffer.from('sha1=' + hmac.update(payload).digest('hex'), 'utf8');

  const checksum = Buffer.from(signature, 'utf8');
  if (checksum.length !== digest.length || !crypto.timingSafeEqual(digest, checksum)) {
    return false;
  }

  return true;
};

module.exports = signatureIsValid;
