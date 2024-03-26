import { NlpManager } from "node-nlp";
import { greetings } from "./train/greetings.js";

const manager = new NlpManager({ languages: ["en"], forceNER: true });

// Adds the utterances and intents for the NLP
Object.entries(greetings.questions).forEach(([intent, questions]) => {
  questions.forEach((question) => {
    manager.addDocument("en", question, intent);
  });
});

// Train also the NLG
Object.entries(greetings.answers).forEach(([intent, answers]) => {
  answers.forEach((answer) => {
    manager.addAnswer("en", intent, answer);
  });
});

const train = async () => {
  await manager.train();    
  await manager.save();
};

train();
            
export default manager;
