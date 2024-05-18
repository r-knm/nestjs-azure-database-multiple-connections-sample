export default () => ({
  azCosmos: {
    endpoint: process.env.AZ_COSMOS_ENDPOINT,
    key: process.env.AZ_COSMOS_KEY,
    dbId4Tenant: 'tenant_db',
    dbIdr4User: 'user_db',
  },
});
