import { Redis } from "@upstash/redis";

export const db = new Redis({
  url: `${process.env.UPSTASH_REDIS_REST_URL}`, //Needs to be put as a String for some reason which goes against what was shown in the tutorial but it is what it is
  token: `${process.env.UPSTASH_REDIS_REST_TOKEN}`,
});
