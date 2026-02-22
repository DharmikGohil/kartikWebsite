import { NextApiRequest, NextApiResponse } from 'next'
import { Resend } from 'resend'
import { readFileSync } from 'fs'
import { join } from 'path'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, email, company, phone } = req.body

    if (!name || !email) {
      return res.status(400).json({ 
        error: 'Name and email are required' 
      })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        error: 'Invalid email format' 
      })
    }

    // Option 1: Use your own PDF file (recommended)
    let pdfAttachment: { filename: string; content: string }
    
    try {
      // Try to read your PDF file from the api/assets folder
      const pdfPath = join(process.cwd(), 'api', 'assets', 'sample-qc-report.pdf')
      const pdfBuffer = readFileSync(pdfPath)
      pdfAttachment = {
        filename: 'ChemAssure-Global-Sample-QC-Report.pdf',
        content: pdfBuffer.toString('base64')
      }
    } catch (error) {
      console.log('PDF file not found, using text attachment instead')
      // Fallback to text attachment if PDF not found
      const sampleReportContent = `ChemAssure Global - Sample QC Report\n\nThis demonstrates our comprehensive quality control process. Contact us for real inspections.`
      pdfAttachment = {
        filename: 'ChemAssure-Global-Sample-QC-Report.txt',
        content: Buffer.from(sampleReportContent, 'utf-8').toString('base64')
      }
    }

    // Send email with sample report via Resend
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
              <a href="mailto:chemsassureglobal@gmail.com" style="background-color: #002147; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
                Request Custom Inspection
              </a>
            </div>
            
            <div style="background-color: #e8f4fd; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h4 style="color: #002147; margin-top: 0;">Ready to Get Started?</h4>
              <p style="color: #333; margin-bottom: 10px;">
                Contact us to discuss your specific chemical quality assurance needs:
              </p>
              <p style="color: #333; margin: 5px 0;">
                📧 <a href="mailto:chemsassureglobal@gmail.com" style="color: #0066cc;">chemsassureglobal@gmail.com</a>
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
      attachments: [pdfAttachment]
    })

    if (error) {
      console.error('Resend error:', error)
      return res.status(500).json({ 
        error: 'Failed to send email. Please try again later.' 
      })
    }

    console.log('📧 Sample Report Request:', { name, email, company, phone, timestamp: new Date().toISOString() })

    res.status(200).json({ 
      success: true, 
      message: 'Sample report sent successfully!',
      data: data
    })

  } catch (error) {
    console.error('Download report error:', error)
    res.status(500).json({ 
      error: 'Internal server error. Please try again later.' 
    })
  }
}
