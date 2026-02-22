import express from 'express';
import cors from 'cors';
import path from 'path';
import { readFileSync } from 'fs';

const app = express();
const PORT = 3008;

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

    // Check if we have Resend API key for production email sending
    const hasResendKey = process.env.RESEND_API_KEY;
    
    if (hasResendKey) {
      // Production: Send actual email with PDF
      const { Resend } = await import('resend');
      const resend = new Resend(process.env.RESEND_API_KEY);
      
      try {
        // Try to read the PDF file
        const { readFileSync } = await import('fs');
        const { join } = await import('path');
        const pdfPath = join(process.cwd(), 'api', 'assets', 'sample-qc-report.pdf');
        const pdfBuffer = readFileSync(pdfPath);
        
        // Send email with PDF attachment
        const { data, error } = await resend.emails.send({
          from: 'ChemAssure Global <onboarding@resend.dev>',
          to: [email],
          subject: `Sample QC Report - ChemAssure Global`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
              <div style="background-color: #002147; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
                <h1 style="margin: 0; font-size: 24px;">ChemAssure Global</h1>
                <p style="margin: 5px 0 0 0; opacity: 0.9;">Sample Quality Control Report</p>
              </div>
              
              <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                <h2 style="color: #002147; margin-top: 0;">Thank You for Your Interest!</h2>
                
                <p style="color: #333; line-height: 1.6; margin-bottom: 20px;">
                  Dear ${name},
                </p>
                
                <p style="color: #333; line-height: 1.6; margin-bottom: 20px;">
                  Thank you for requesting our sample Quality Control report. We're excited to show you the level of detail and professionalism we bring to every chemical inspection.
                </p>
                
                <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #002147; margin: 20px 0;">
                  <h3 style="color: #002147; margin-top: 0;">What You'll Find in Our Reports:</h3>
                  <ul style="color: #333; line-height: 1.6;">
                    <li>Executive Summary with clear recommendations</li>
                    <li>Detailed inspection findings with photos</li>
                    <li>Comprehensive quality assessment</li>
                    <li>Risk analysis and mitigation strategies</li>
                    <li>Professional documentation following international standards</li>
                  </ul>
                </div>
                
                <p style="color: #333; line-height: 1.6; margin-bottom: 20px;">
                  <strong>Your sample report is attached below.</strong> This demonstrates the quality and transparency you can expect from ChemAssure Global.
                </p>
                
                <div style="text-align: center; margin: 30px 0;">
                  <a href="mailto:chemassureglobal@gmail.com" style="background-color: #002147; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
                    Request Custom Inspection
                  </a>
                </div>
                
                <div style="background-color: #e8f4fd; padding: 20px; border-radius: 8px; margin: 20px 0;">
                  <h4 style="color: #002147; margin-top: 0;">Ready to Get Started?</h4>
                  <p style="color: #333; margin-bottom: 10px;">
                    Contact us to discuss your specific chemical quality assurance needs:
                  </p>
                  <p style="color: #333; margin: 5px 0;">
                    📧 <a href="mailto:chemassureglobal@gmail.com" style="color: #0066cc;">chemassureglobal@gmail.com</a>
                  </p>
                  <p style="color: #333; margin: 5px 0;">
                    📱 <a href="tel:+919313749421" style="color: #0066cc;">+91 93137 49421</a>
                  </p>
                  <p style="color: #333; margin: 5px 0;">
                    📍 Ground Floor, Plot No. 134, Pramukh Park Society, Sanya Road, Simada Gam, Patel Park, Surat - 395006, Gujarat, India
                  </p>
                </div>
                
                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef; text-align: center; color: #6c757d; font-size: 14px;">
                  <p>This email was sent from the ChemAssure Global website.</p>
                  <p>Sent on: ${new Date().toLocaleString('en-US', { 
                    timeZone: 'Asia/Kolkata',
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric', 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}</p>
                </div>
              </div>
            </div>
          `,
          attachments: [{
            filename: 'ChemAssure-Global-Sample-QC-Report.pdf',
            content: pdfBuffer.toString('base64')
          }]
        });

        if (error) {
          throw new Error(error.message || 'Failed to send email');
        }

        console.log('📧 Sample Report sent successfully:', { name, email, company, phone });
        
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        throw new Error('Failed to send sample report email');
      }
      
    } else {
      // Development: Log the data for testing
      console.log('📧 Sample Report Request (Development Mode):');
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Company:', company || 'Not provided');
      console.log('Phone:', phone || 'Not provided');
      console.log('Note: Set RESEND_API_KEY environment variable to enable email sending');
      console.log('---');
      
      // Simulate email sending delay
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    // Success response
    res.status(200).json({ 
      success: true, 
      message: hasResendKey ? 'Sample report sent successfully!' : 'Sample report request logged (development mode)',
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
      error: error.message || 'Internal server error. Please try again later.' 
    });
  }
});

// Labs search endpoint
app.get('/api/labs-search', async (req, res) => {
  try {
    const {
      query = '',
      state,
      city,
      disciplines,
      page = 1,
      limit = 20,
      sortBy = 'name'
    } = req.query;

    // Parse disciplines if it's a string (from URL params)
    let disciplinesArray = [];
    if (disciplines) {
      disciplinesArray = Array.isArray(disciplines) ? disciplines : [disciplines];
    }

    // Load lab data
    const labsPath = path.join(process.cwd(), 'public', 'nabl_labs_extracted_corrected.json');
    const labsData = JSON.parse(readFileSync(labsPath, 'utf8'));

    // Helper function to normalize discipline names
    function normalizeDiscipline(discipline) {
      return discipline
        .replace(/\n/g, ' ')
        .split(/[,&]/)
        .map(d => d.trim())
        .filter(d => d.length > 0)
        .map(d => {
          if (d.toLowerCase().includes('chemical')) return 'Chemical';
          if (d.toLowerCase().includes('mechanical')) return 'Mechanical';
          if (d.toLowerCase().includes('biological')) return 'Biological';
          if (d.toLowerCase().includes('electrical')) return 'Electrical';
          if (d.toLowerCase().includes('electronics')) return 'Electronics';
          if (d.toLowerCase().includes('non-destructive') || d.toLowerCase().includes('ndt')) return 'Non-Destructive Testing';
          if (d.toLowerCase().includes('forensic')) return 'Forensic';
          if (d.toLowerCase().includes('photometry')) return 'Photometry';
          if (d.toLowerCase().includes('radiolog')) return 'Radiology';
          if (d.toLowerCase().includes('software') || d.toLowerCase().includes('it')) return 'Software & IT';
          return d;
        });
    }


    // Helper function to perform fuzzy search
    function fuzzyMatch(text, searchQuery) {
      const textLower = text.toLowerCase();
      const queryLower = searchQuery.toLowerCase();
      
      if (textLower.includes(queryLower)) return true;
      
      const words = queryLower.split(' ');
      return words.every(word => textLower.includes(word));
    }

    // Get all unique values for filters
    const allStates = [...new Set(labsData.map(lab => lab.state.replace(/\n/g, ' ').trim()))].sort();
    
    // Filter cities based on selected state (if any) - WORKING IMPLEMENTATION
    let availableCities;
    if (state) {
      // Only show cities for the selected state
      availableCities = [...new Set(
        labsData
          .filter(lab => lab.state.replace(/\n/g, ' ').trim() === state)
          .map(lab => lab.city.replace(/\n/g, ' ').trim())
      )].sort();
      console.log(`🏙️ Cascading: ${availableCities.length} cities found for ${state}`);
    } else {
      // Show all cities if no state is selected
      availableCities = [...new Set(labsData.map(lab => lab.city.replace(/\n/g, ' ').trim()))].sort();
      console.log(`🏙️ All cities: ${availableCities.length} cities`);
    }
    
    const allDisciplines = [...new Set(
      labsData.flatMap(lab => normalizeDiscipline(lab.Discipline))
    )].sort();

    // Filter labs based on search criteria
    let filteredLabs = labsData.filter(lab => {
      // Text search across multiple fields
      if (query) {
        const searchFields = [
          lab.labName,
          lab.address,
          lab.city,
          lab.state,
          lab["Contact Person"],
          lab["Email ID"]
        ].join(' ');
        
        if (!fuzzyMatch(searchFields, query)) {
          return false;
        }
      }

      // State filter
      if (state && lab.state.replace(/\n/g, ' ').trim() !== state) {
        return false;
      }

      // City filter
      if (city && lab.city.replace(/\n/g, ' ').trim() !== city) {
        return false;
      }

      // Discipline filter
      if (disciplinesArray.length > 0) {
        const labDisciplines = normalizeDiscipline(lab.Discipline);
        if (!disciplinesArray.some(d => labDisciplines.includes(d))) {
          return false;
        }
      }


      return true;
    });

    // Sort results
    filteredLabs.sort((a, b) => {
      switch (sortBy) {
        case 'date':
          try {
            const dateA = new Date(a["Date of Issue"].split('-').reverse().join('-'));
            const dateB = new Date(b["Date of Issue"].split('-').reverse().join('-'));
            return dateB.getTime() - dateA.getTime();
          } catch {
            return 0;
          }
        case 'relevance':
          if (query) {
            const queryLower = query.toLowerCase();
            const scoreA = a.labName.toLowerCase().includes(queryLower) ? 1 : 0;
            const scoreB = b.labName.toLowerCase().includes(queryLower) ? 1 : 0;
            if (scoreA !== scoreB) return scoreB - scoreA;
          }
        case 'name':
        default:
          return a.labName.localeCompare(b.labName);
      }
    });

    // Pagination
    const pageNum = Math.max(1, Number(page));
    const limitNum = Math.min(100, Math.max(1, Number(limit)));
    const totalCount = filteredLabs.length;
    const totalPages = Math.ceil(totalCount / limitNum);
    const startIndex = (pageNum - 1) * limitNum;
    const paginatedLabs = filteredLabs.slice(startIndex, startIndex + limitNum);

    // Clean up the response data
    const cleanedLabs = paginatedLabs.map(lab => {
      const { isActive, ...cleanLab } = lab; // Remove isActive field
      return {
        ...cleanLab,
        state: cleanLab.state.replace(/\n/g, ' ').trim(),
        city: cleanLab.city.replace(/\n/g, ' ').trim(),
        address: cleanLab.address.replace(/\n/g, ' ').trim(),
        labName: cleanLab.labName.replace(/\n/g, ' ').trim(),
        "Contact Person": cleanLab["Contact Person"].replace(/\n/g, ' ').trim(),
        "Email ID": cleanLab["Email ID"].replace(/\n/g, ' ').trim(),
        Discipline: cleanLab.Discipline.replace(/\n/g, ' ').trim()
      };
    });

    const response = {
      labs: cleanedLabs,
      totalCount,
      currentPage: pageNum,
      totalPages,
      filters: {
        states: allStates,
        cities: availableCities,
        disciplines: allDisciplines
      }
    };

    console.log(`🔍 Labs search: ${filteredLabs.length} results for query: "${query || 'all'}", state: ${state || 'all'}, city: ${city || 'all'}`);
    console.log(`🏙️ DEBUG: Returning ${availableCities.length} cities for state: ${state || 'all'}`);
    res.json(response);

  } catch (error) {
    console.error('Labs search error:', error);
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
  console.log(`🔍 Labs search endpoint: http://localhost:${PORT}/api/labs-search`);
  console.log(`💚 Health check: http://localhost:${PORT}/api/health`);
});
