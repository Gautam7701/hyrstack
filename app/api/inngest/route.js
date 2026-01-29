import  {serve}  from "inngest/next";
import { inngest } from "../../../lib/inngest/client.js";
import { generateIndustryInsights, helloWorld } from "../../../lib/inngest/function.js";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    /* your functions will be passed here later! */
    helloWorld,
    generateIndustryInsights,
  ],
}); 