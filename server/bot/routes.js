import express from 'express';
import wss from './index.js';


const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello from the bot!');
});





export default router;