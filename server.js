import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, company, phone, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'Name, email, and message are required' 
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        error: 'Invalid email format' 
      });
    }

    // In development, we'll just log the data
    console.log('📧 Contact Form Submission:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Company:', company || 'Not provided');
    console.log('Phone:', phone || 'Not provided');
    console.log('Message:', message);
    console.log('---');

    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Success response
    res.status(200).json({ 
      success: true, 
      message: 'Message received! In development mode, this is logged to console.',
      data: {
        name,
        email,
        company,
        phone,
        message,
        timestamp: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      error: 'Internal server error. Please try again later.' 
    });
  }
});

// Sample report download endpoint
app.post('/api/download-report', async (req, res) => {
  try {
    const { name, email, company, phone } = req.body;

    // Validate required fields
    if (!name || !email) {
      return res.status(400).json({ 
        error: 'Name and email are required' 
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        error: 'Invalid email format' 
      });
    }

    // In development, we'll just log the data
    console.log('📧 Sample Report Request:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Company:', company || 'Not provided');
    console.log('Phone:', phone || 'Not provided');
    console.log('---');

    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Success response
    res.status(200).json({ 
      success: true, 
      message: 'Sample report sent! In development mode, this is logged to console.',
      data: {
        name,
        email,
        company,
        phone,
        timestamp: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Download report error:', error);
    res.status(500).json({ 
      error: 'Internal server error. Please try again later.' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Development server running' });
});

app.listen(PORT, () => {
  console.log(`🚀 Development server running on http://localhost:${PORT}`);
  console.log(`📧 Contact form endpoint: http://localhost:${PORT}/api/contact`);
  console.log(`📄 Download report endpoint: http://localhost:${PORT}/api/download-report`);
  console.log(`💚 Health check: http://localhost:${PORT}/api/health`);
});
