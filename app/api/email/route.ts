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
    const { formType = 'contact' } = body;

    // Initialize Resend
    const resend = new Resend(process.env.RESEND_API_KEY);

    // COMPLETELY SEPARATE LOGIC FOR EACH FORM TYPE
    if (formType === 'contact') {
      return await handleContactForm(body, resend);
    } else if (formType === 'quote') {
      return await handleQuoteForm(body, resend);
    } else {
      return NextResponse.json(
        { error: 'Invalid form type specified' },
        { status: 400 }
      );
    }

  } catch (error) {
    console.error('Email API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// SEPARATE FUNCTION FOR CONTACT FORM
async function handleContactForm(body: any, resend: Resend) {
  const { name, email, company, phone, message } = body;

  // Contact form validation
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Name, email, and message are required for contact form' },
      { status: 400 }
    );
  }

  // Contact form email content
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Message</title>
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
          <h1 style="margin: 0; font-size: 28px;">📧 New Contact Form Message</h1>
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
          
          <div class="field">
            <span class="label">💬 Message</span>
            <div class="message-box">${message}</div>
          </div>
          
          <div class="field">
            <span class="label">📝 Form Type</span>
            <div class="value"><span class="highlight">Contact Form</span></div>
          </div>
        </div>
        
        <div class="footer">
          <p>This message was received from the ElegantCodes website contact form.</p>
          <p>Please respond to <strong>${email}</strong> within 24 hours.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  // Send contact form email
  const { data, error } = await resend.emails.send({
    from: `ElegantCodes <${process.env.FROM_EMAIL || 'noreply@elegantcodes.com'}>`,
    to: [process.env.TO_EMAIL || 'info@elegantcodes.com'],
    subject: `New Contact Form Message from ${name}`,
    html: htmlContent,
    replyTo: email,
  });

  if (error) {
    console.error('Resend error:', error);
    return NextResponse.json(
      { error: 'Failed to send contact message' },
      { status: 500 }
    );
  }

  return NextResponse.json({ 
    success: true, 
    message: 'Contact message sent successfully' 
  });
}

// SEPARATE FUNCTION FOR QUOTE FORM
async function handleQuoteForm(body: any, resend: Resend) {
  const { 
    name, 
    email, 
    company, 
    phone, 
    projectType, 
    description, 
    budget, 
    timeline, 
    features 
  } = body;

  // Quote form validation
  if (!name || !email || !projectType || !description || !budget || !timeline) {
    return NextResponse.json(
      { error: 'Name, email, project type, description, budget, and timeline are required for quote form' },
      { status: 400 }
    );
  }

  // Quote form email content
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Quote Request</title>
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center; }
        .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
        .field { margin-bottom: 20px; }
        .label { font-weight: 600; color: #2d3748; margin-bottom: 5px; display: block; }
        .value { background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #10b981; }
        .description-box { background: white; padding: 20px; border-radius: 8px; border: 2px solid #e2e8f0; }
        .footer { text-align: center; margin-top: 30px; color: #718096; font-size: 14px; }
        .highlight { color: #10b981; font-weight: 600; }
        .priority { background: #fef3c7; padding: 10px; border-radius: 8px; border-left: 4px solid #f59e0b; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 style="margin: 0; font-size: 28px;">💰 New Quote Request</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">ElegantCodes Website</p>
        </div>
        
        <div class="content">
          <div class="priority">
            <strong>🎯 PRIORITY: New Quote Request - Requires Immediate Attention</strong>
          </div>
          
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
          
          <div class="field">
            <span class="label">🎯 Project Type</span>
            <div class="value">${projectType}</div>
          </div>
          
          <div class="field">
            <span class="label">💰 Budget Range</span>
            <div class="value">${budget}</div>
          </div>
          
          <div class="field">
            <span class="label">⏰ Timeline</span>
            <div class="value">${timeline}</div>
          </div>
          
          ${features ? `
          <div class="field">
            <span class="label">🔧 Key Features</span>
            <div class="value">${features}</div>
          </div>
          ` : ''}
          
          <div class="field">
            <span class="label">📝 Project Description</span>
            <div class="description-box">${description}</div>
          </div>
          
          <div class="field">
            <span class="label">📋 Form Type</span>
            <div class="value"><span class="highlight">Quote Request Form</span></div>
          </div>
        </div>
        
        <div class="footer">
          <p><strong>This is a quote request that requires a detailed response with pricing and timeline.</strong></p>
          <p>Please respond to <strong>${email}</strong> within 24 hours with a comprehensive quote.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  // Send quote form email
  const { data, error } = await resend.emails.send({
    from: `ElegantCodes <${process.env.FROM_EMAIL || 'noreply@elegantcodes.com'}>`,
    to: [process.env.TO_EMAIL || 'info@elegantcodes.com'],
    subject: `💰 NEW QUOTE REQUEST: ${projectType} Project from ${name}`,
    html: htmlContent,
    replyTo: email,
  });

  if (error) {
    console.error('Resend error:', error);
    return NextResponse.json(
      { error: 'Failed to send quote request' },
      { status: 500 }
    );
  }

  return NextResponse.json({ 
    success: true, 
    message: 'Quote request sent successfully' 
  });
} 