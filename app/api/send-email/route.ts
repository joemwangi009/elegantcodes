import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy_key_for_build');

export async function POST(request: NextRequest) {
  try {
    // Check if API key is properly configured
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'dummy_key_for_build') {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { 
      name, 
      email, 
      company, 
      phone, 
      projectType, 
      budget, 
      timeline, 
      message, 
      formType 
    } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Determine subject and template based on form type
    let subject: string;
    let htmlContent: string;

    switch (formType) {
      case 'contact':
        subject = `New Contact Form Submission - ${name}`;
        htmlContent = generateContactEmailHTML({ name, email, company, phone, message });
        break;
      case 'quote':
        subject = `New Quote Request - ${name} - ${projectType || 'General'}`;
        htmlContent = generateQuoteEmailHTML({ name, email, company, phone, projectType, budget, timeline, message });
        break;
      case 'portfolio':
        subject = `Portfolio Project Request - ${name} - ${projectType || 'General'}`;
        htmlContent = generatePortfolioEmailHTML({ name, email, company, phone, projectType, budget, timeline, message });
        break;
      default:
        subject = `New Form Submission - ${name}`;
        htmlContent = generateGenericEmailHTML({ name, email, company, phone, projectType, budget, timeline, message });
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'ElegantCodes <noreply@elegantcodes.com>',
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
      messageId: data?.id 
    });

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Email template generators
function generateContactEmailHTML({ name, email, company, phone, message }: any) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #1A2A44 0%, #2C3E50 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
        .field { margin-bottom: 20px; }
        .label { font-weight: bold; color: #1A2A44; }
        .value { background: white; padding: 10px; border-radius: 5px; border-left: 4px solid #D4A017; }
        .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Contact Form Submission</h1>
          <p>Someone has submitted a contact form on ElegantCodes.com</p>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Name:</div>
            <div class="value">${name}</div>
          </div>
          <div class="field">
            <div class="label">Email:</div>
            <div class="value">${email}</div>
          </div>
          ${company ? `
          <div class="field">
            <div class="label">Company:</div>
            <div class="value">${company}</div>
          </div>
          ` : ''}
          ${phone ? `
          <div class="field">
            <div class="label">Phone:</div>
            <div class="value">${phone}</div>
          </div>
          ` : ''}
          <div class="field">
            <div class="label">Message:</div>
            <div class="value">${message.replace(/\n/g, '<br>')}</div>
          </div>
        </div>
        <div class="footer">
          <p>This email was sent from the contact form on ElegantCodes.com</p>
          <p>Reply directly to this email to respond to ${name}</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

function generateQuoteEmailHTML({ name, email, company, phone, projectType, budget, timeline, message }: any) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Quote Request</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #1A2A44 0%, #2C3E50 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
        .field { margin-bottom: 20px; }
        .label { font-weight: bold; color: #1A2A44; }
        .value { background: white; padding: 10px; border-radius: 5px; border-left: 4px solid #D4A017; }
        .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Quote Request</h1>
          <p>A potential client has requested a project quote</p>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Name:</div>
            <div class="value">${name}</div>
          </div>
          <div class="field">
            <div class="label">Email:</div>
            <div class="value">${email}</div>
          </div>
          ${company ? `
          <div class="field">
            <div class="label">Company:</div>
            <div class="value">${company}</div>
          </div>
          ` : ''}
          ${phone ? `
          <div class="field">
            <div class="label">Phone:</div>
            <div class="value">${phone}</div>
          </div>
          ` : ''}
          ${projectType ? `
          <div class="field">
            <div class="label">Project Type:</div>
            <div class="value">${projectType}</div>
          </div>
          ` : ''}
          ${budget ? `
          <div class="field">
            <div class="label">Budget Range:</div>
            <div class="value">${budget}</div>
          </div>
          ` : ''}
          ${timeline ? `
          <div class="field">
            <div class="label">Timeline:</div>
            <div class="value">${timeline}</div>
          </div>
          ` : ''}
          <div class="field">
            <div class="label">Project Details:</div>
            <div class="value">${message.replace(/\n/g, '<br>')}</div>
          </div>
        </div>
        <div class="footer">
          <p>This quote request was submitted on ElegantCodes.com</p>
          <p>Reply directly to this email to respond to ${name}</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

function generatePortfolioEmailHTML({ name, email, company, phone, projectType, budget, timeline, message }: any) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Portfolio Project Request</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #1A2A44 0%, #2C3E50 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
        .field { margin-bottom: 20px; }
        .label { font-weight: bold; color: #1A2A44; }
        .value { background: white; padding: 10px; border-radius: 5px; border-left: 4px solid #D4A017; }
        .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Portfolio Project Request</h1>
          <p>A client is interested in a similar project from your portfolio</p>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Name:</div>
            <div class="value">${name}</div>
          </div>
          <div class="field">
            <div class="label">Email:</div>
            <div class="value">${email}</div>
          </div>
          ${company ? `
          <div class="field">
            <div class="label">Company:</div>
            <div class="value">${company}</div>
          </div>
          ` : ''}
          ${phone ? `
          <div class="field">
            <div class="label">Phone:</div>
            <div class="value">${phone}</div>
          </div>
          ` : ''}
          ${projectType ? `
          <div class="field">
            <div class="label">Project Type:</div>
            <div class="value">${projectType}</div>
          </div>
          ` : ''}
          ${budget ? `
          <div class="field">
            <div class="label">Budget Range:</div>
            <div class="value">${budget}</div>
          </div>
          ` : ''}
          ${timeline ? `
          <div class="field">
            <div class="label">Timeline:</div>
            <div class="value">${timeline}</div>
          </div>
          ` : ''}
          <div class="field">
            <div class="label">Project Requirements:</div>
            <div class="value">${message.replace(/\n/g, '<br>')}</div>
          </div>
        </div>
        <div class="footer">
          <p>This request was submitted from the portfolio page on ElegantCodes.com</p>
          <p>Reply directly to this email to respond to ${name}</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

function generateGenericEmailHTML({ name, email, company, phone, projectType, budget, timeline, message }: any) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Form Submission</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #1A2A44 0%, #2C3E50 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
        .field { margin-bottom: 20px; }
        .label { font-weight: bold; color: #1A2A44; }
        .value { background: white; padding: 10px; border-radius: 5px; border-left: 4px solid #D4A017; }
        .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Form Submission</h1>
          <p>Someone has submitted a form on ElegantCodes.com</p>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Name:</div>
            <div class="value">${name}</div>
          </div>
          <div class="field">
            <div class="label">Email:</div>
            <div class="value">${email}</div>
          </div>
          ${company ? `
          <div class="field">
            <div class="label">Company:</div>
            <div class="value">${company}</div>
          </div>
          ` : ''}
          ${phone ? `
          <div class="field">
            <div class="label">Phone:</div>
            <div class="value">${phone}</div>
          </div>
          ` : ''}
          ${projectType ? `
          <div class="field">
            <div class="label">Project Type:</div>
            <div class="value">${projectType}</div>
          </div>
          ` : ''}
          ${budget ? `
          <div class="field">
            <div class="label">Budget Range:</div>
            <div class="value">${budget}</div>
          </div>
          ` : ''}
          ${timeline ? `
          <div class="field">
            <div class="label">Timeline:</div>
            <div class="value">${timeline}</div>
          </div>
          ` : ''}
          <div class="field">
            <div class="label">Message:</div>
            <div class="value">${message.replace(/\n/g, '<br>')}</div>
          </div>
        </div>
        <div class="footer">
          <p>This form was submitted on ElegantCodes.com</p>
          <p>Reply directly to this email to respond to ${name}</p>
        </div>
      </div>
    </body>
    </html>
  `;
} 