const quotes = [
  "The best way to predict the future is to create it.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Don't watch the clock; do what it does. Keep going.",
  "Great things never come from comfort zones.",
  "Dream big and dare to fail.",
  "The harder you work for something, the greater you'll feel when you achieve it.",
  "Believe you can and you're halfway there.",
  "Push yourself, because no one else is going to do it for you.",
  "Your limitation is only your imagination.",
  "Sometimes later becomes never. Do it now.",
  "Little things make big days.",
  "Don't stop when you're tired. Stop when you're done.",
  "Wake up with determination. Go to bed with satisfaction.",
  "Do something today that your future self will thank you for.",
  "Success doesn't just find you. You have to go out and get it.",
  "The key to success is to focus on goals, not obstacles.",
  "Difficult roads often lead to beautiful destinations.",
  "Discipline is the bridge between goals and accomplishment.",
  "Stay positive, work hard, make it happen.",
  "Every expert was once a beginner."
];

const quote = document.querySelector('h1')
const button = document.querySelector('button')

button.addEventListener('click',()=>{
  const index = Math.floor(Math.random()*20)
  quote.innerText = quotes[index]
})