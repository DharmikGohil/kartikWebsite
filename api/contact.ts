import { NextApiRequest, NextApiResponse } from 'next'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, email, company, phone, message } = req.body

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'Name, email, and message are required' 
      })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        error: 'Invalid email format' 
      })
    }

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'ChemAssure Global <onboarding@resend.dev>',
      to: ['chemsassureglobal@gmail.com'],
      subject: `New Contact Form Submission - ${name} from ${company || 'Unknown Company'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
          <div style="background-color: #002147; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">ChemAssure Global</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">New Contact Form Submission</p>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #002147; margin-top: 0;">Contact Details</h2>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #002147;">Name:</strong> ${name}
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #002147;">Email:</strong> 
              <a href="mailto:${email}" style="color: #0066cc;">${email}</a>
            </div>
            
            ${company ? `
            <div style="margin-bottom: 20px;">
              <strong style="color: #002147;">Company:</strong> ${company}
            </div>
            ` : ''}
            
            ${phone ? `
            <div style="margin-bottom: 20px;">
              <strong style="color: #002147;">Phone:</strong> 
              <a href="tel:${phone}" style="color: #0066cc;">${phone}</a>
            </div>
            ` : ''}
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #002147;">Message:</strong>
              <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-top: 10px; border-left: 4px solid #002147;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef; text-align: center; color: #6c757d; font-size: 14px;">
              <p>This message was sent from the ChemAssure Global website contact form.</p>
              <p>Submitted on: ${new Date().toLocaleString('en-US', { 
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
      text: `
ChemAssure Global - New Contact Form Submission

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Phone: ${phone || 'Not provided'}

Message:
${message}

---
Submitted on: ${new Date().toLocaleString('en-US', { 
  timeZone: 'Asia/Kolkata',
  year: 'numeric', 
  month: 'long', 
  day: 'numeric', 
  hour: '2-digit', 
  minute: '2-digit' 
})}

This message was sent from the ChemAssure Global website contact form.
      `
    })

    if (error) {
      console.error('Resend error:', error)
      return res.status(500).json({ 
        error: 'Failed to send email. Please try again later.' 
      })
    }

    // Success response
    res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully!',
      data: data
    })

  } catch (error) {
    console.error('Contact form error:', error)
    res.status(500).json({ 
      error: 'Internal server error. Please try again later.' 
    })
  }
}
