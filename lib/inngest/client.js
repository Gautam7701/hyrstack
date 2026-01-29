import  {Inngest} from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "hyrstack", name: "hyrstack",
    credentials:{
        openAI:{
            apiKey: process.env.OPENAI_API_KEY || "",
        }
    }
 });