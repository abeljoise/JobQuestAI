import { Inngest } from "inngest";


export const inngest = new Inngest({ id: "JobQuestAI" , name :"JobQuestAI",
    credentials:{
        gemini: {
            apiKey:process.env.GEMINI_API_KEY
        }
    }
});