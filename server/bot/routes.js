import express from 'express';
import wss from './index.js';

const router = express.Router();

// Health check endpoint
router.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Codenuity Bot Server is running' });
});

// Contact form submission endpoint
router.post('/contact', async (req, res) => {
  try {
    const { firstName, lastName, email, company, subject, message } = req.body;

    // Basic validation
    if (!firstName || !lastName || !email || !subject || !message) {
      return res.status(400).json({
        status: 'error',
        message: 'Missing required fields'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        status: 'error',
        message: 'Invalid email format'
      });
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send confirmation email
    // 3. Notify admin
    
    console.log('Contact form submission:', {
      firstName,
      lastName,
      email,
      company,
      subject,
      message,
      timestamp: new Date().toISOString()
    });

    // Mock response - replace with actual implementation
    res.status(200).json({
      status: 'success',
      message: 'Thank you for contacting Codenuity Solutions. We will get back to you soon!',
      submissionId: `SUB-${Date.now()}`
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to process contact form'
    });
  }
});

export default router;