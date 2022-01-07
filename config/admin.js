module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c2dca393e07751aa4a4d32e49ca44190'),
  },
});
