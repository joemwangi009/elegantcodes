import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { 
      name, 
      email, 
      message, 
      subject = 'New Contact Form Submission',
      company,
      phone,
      projectType,
      description,
      budget,
      timeline,
      features,
      formType = 'contact'
    } = body;

    // Simple validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Initialize Resend
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Professional email content with ALL data
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New ${formType.charAt(0).toUpperCase() + formType.slice(1)} Form Submission</title>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center; }
          .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
          .field { margin-bottom: 20px; }
          .label { font-weight: 600; color: #2d3748; margin-bottom: 5px; display: block; }
          .value { background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #667eea; }
          .message-box { background: white; padding: 20px; border-radius: 8px; border: 2px solid #e2e8f0; }
          .footer { text-align: center; margin-top: 30px; color: #718096; font-size: 14px; }
          .highlight { color: #667eea; font-weight: 600; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0; font-size: 28px;">New ${formType.charAt(0).toUpperCase() + formType.slice(1)} Form Submission</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">ElegantCodes Website</p>
          </div>
          
          <div class="content">
            <div class="field">
              <span class="label">👤 Full Name</span>
              <div class="value">${name}</div>
            </div>
            
            <div class="field">
              <span class="label">📧 Email Address</span>
              <div class="value">${email}</div>
            </div>
            
            ${company ? `
            <div class="field">
              <span class="label">🏢 Company</span>
              <div class="value">${company}</div>
            </div>
            ` : ''}
            
            ${phone ? `
            <div class="field">
              <span class="label">📱 Phone Number</span>
              <div class="value">${phone}</div>
            </div>
            ` : ''}
            
            ${projectType ? `
            <div class="field">
              <span class="label">🎯 Project Type</span>
              <div class="value">${projectType}</div>
            </div>
            ` : ''}
            
            ${budget ? `
            <div class="field">
              <span class="label">💰 Budget Range</span>
              <div class="value">${budget}</div>
            </div>
            ` : ''}
            
            ${timeline ? `
            <div class="field">
              <span class="label">⏰ Timeline</span>
              <div class="value">${timeline}</div>
            </div>
            ` : ''}
            
            ${features ? `
            <div class="field">
              <span class="label">🔧 Key Features</span>
              <div class="value">${features}</div>
            </div>
            ` : ''}
            
            <div class="field">
              <span class="label">💬 Message / Description</span>
              <div class="message-box">${message || description || 'No message provided'}</div>
            </div>
            
            <div class="field">
              <span class="label">📝 Form Type</span>
              <div class="value"><span class="highlight">${formType.charAt(0).toUpperCase() + formType.slice(1)}</span></div>
            </div>
          </div>
          
          <div class="footer">
            <p>This submission was received from the ElegantCodes website contact form.</p>
            <p>Please respond to <strong>${email}</strong> within 24 hours.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email with professional display name
    const { data, error } = await resend.emails.send({
      from: `ElegantCodes <${process.env.FROM_EMAIL || 'noreply@elegantcodes.com'}>`,
      to: [process.env.TO_EMAIL || 'info@elegantcodes.com'],
      subject: subject,
      html: htmlContent,
      replyTo: email,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully' 
    });

  } catch (error) {
    console.error('Email API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 