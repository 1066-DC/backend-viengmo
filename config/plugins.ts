export default ({ env }) => ({
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'sylvain@dorey.io',
        defaultReplyTo: 'sylvain@dorey.io',
      },
    },
  },
});
