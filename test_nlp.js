// Test script to verify NLP training
const { greetings } = require('./server/bot/train/greetings.js');

console.log('\n🎯 NLP Training Data Summary:');
console.log('================================\n');

const intentNames = Object.keys(greetings.questions);
console.log(`✅ Total Intents: ${intentNames.length}`);
console.log('\nIntent Categories:');

// Count intents by category
const categories = {};
intentNames.forEach(intent => {
  const category = intent.split('.')[0];
  categories[category] = (categories[category] || 0) + 1;
});

Object.entries(categories).sort().forEach(([category, count]) => {
  console.log(`   - ${category}: ${count} intents`);
});

console.log('\n📊 Training Variations:');
let totalQuestions = 0;
let totalAnswers = 0;

intentNames.forEach(intent => {
  const questionCount = greetings.questions[intent].length;
  const answerCount = greetings.answers[intent].length;
  totalQuestions += questionCount;
  totalAnswers += answerCount;
});

console.log(`   - Total Question Variations: ${totalQuestions}`);
console.log(`   - Total Answer Variations: ${totalAnswers}`);

console.log('\n✨ Sample Intents:');
console.log('   - services.ai: How does chatbot development work?');
console.log('   - services.mobile: Can you build iOS apps?');
console.log('   - company.team: Who is your team?');
console.log('   - jobs.inquiry: Are you hiring?');
console.log('   - faq.difference: What makes you different?');

console.log('\n✅ NLP Training Data Successfully Loaded!');
console.log('================================\n');
