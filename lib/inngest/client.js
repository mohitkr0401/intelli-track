import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "intelli-track", // Unique app ID
  name: "Intelli-Track",
  retryFunction: async (attempt) => ({
    delay: Math.pow(2, attempt) * 1000, // Exponential backoff
    maxAttempts: 2,
  }),
});