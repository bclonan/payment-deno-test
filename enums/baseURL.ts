// /enums/baseURL.ts

// Replace these placeholders with your actual URLs
const PRODUCTION_URL = "https://api.your_production_domain.com";
const STAGING_URL = "https://api.your_staging_domain.com";
const DEVELOPMENT_URL = "http://localhost:8000";

let baseUrl = "";

if (Deno.env.get("ENV") === "production") {
  baseUrl = PRODUCTION_URL;
} else if (Deno.env.get("ENV") === "staging") {
  baseUrl = STAGING_URL;
} else {
  baseUrl = DEVELOPMENT_URL;
}

export { baseUrl };
