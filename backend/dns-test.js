const dns = require('dns');

dns.resolveSrv(
  '_mongodb._tcp.fullstackproject.8mpakkw.mongodb.net',
  (err, addresses) => {
    console.log('Error:', err);
    console.log('Addresses:', addresses);
  }
);