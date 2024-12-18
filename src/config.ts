import { config } from 'dotenv';
config();

export const HOST = 'http://localhost:4000';

export const PAYPAL_API_SECRET = process.env.PAYPAL_API_SECRET;

export const PAYPAL_API_CLIENT = process.env.PAYPAL_API_CLIENT;

export const PAYPAL_API = 'https://api-m.sandbox.paypal.com';

console.log(PAYPAL_API);
console.log(PAYPAL_API_CLIENT);
