import { Redis } from "@upstash/redis";

export const db = new Redis({
  url: `${process.env.UPSTASH_REDIS_REST_URL}`, // Needs to be put as a String for some reason 
  token: `${process.env.UPSTASH_REDIS_REST_TOKEN}`,
});
