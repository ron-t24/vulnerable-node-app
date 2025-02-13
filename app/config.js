module.exports = {
  database: {
    host: "localhost",
    user: "admin",
    password: "SuperSecret123!", // Hardcoded secret for testing
    database: "test_db"
  },
  api: {
    key: "sk-1234567890abcdef", // Fake API key for testing
    endpoint: "https://api.example.com/v1/"
  },
  aws: {
    accessKeyId: "AKIAEXAMPLE1234567890", // AWS Access Key ID for testing
    secretAccessKey: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY" // AWS Secret Access Key for testing
  },
  github: {
    token: "ghp_exampleToken1234567890abcdefghijklmnopqrstuvwxyz" // GitHub Personal Access Token for testing
  },
  stripe: {
    secretKey: "sk_live_4eC39HqLyjWDarjtT1zdp7dc" // Stripe live secret key for testing
  }
};
