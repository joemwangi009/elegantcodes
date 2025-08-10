import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    // Check if API key is properly configured
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Initialize Resend with API key
    const resend = new Resend(process.env.RESEND_API_KEY);

    const body = await request.json();
    const { 
      formType = 'contact',
      name, 
      email, 
      message, 
      company,
      phone,
      projectType,
      description,
      budget,
      timeline,
      features,
      subject: customSubject
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

    // Determine email subject and content based on form type
    let subject: string;
    let htmlContent: string;

    switch (formType) {
      case 'contact':
        subject = customSubject || `New Contact Form Submission from ${name}`;
        htmlContent = generateContactEmailHTML({ name, email, message, company, phone });
        break;
      
      case 'quote':
        subject = customSubject || `New Quote Request from ${name}`;
        htmlContent = generateQuoteEmailHTML({ 
          name, email, message, company, phone, projectType, description, budget, timeline, features 
        });
        break;
      
      case 'portfolio':
        subject = customSubject || `Portfolio Inquiry from ${name}`;
        htmlContent = generatePortfolioEmailHTML({ name, email, message, company, phone });
        break;
      
      default:
        subject = customSubject || `New ${formType} Form Submission from ${name}`;
        htmlContent = generateGenericEmailHTML({ name, email, message, company, phone });
    }

    // Send email to company
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

    // Send auto-reply to client
    try {
      await resend.emails.send({
        from: process.env.FROM_EMAIL || 'ElegantCodes <noreply@elegantcodes.com>',
        to: [email],
        subject: 'Thank you for contacting ElegantCodes',
        html: generateAutoReplyHTML({ name, formType }),
      });
    } catch (autoReplyError) {
      console.error('Auto-reply error:', autoReplyError);
      // Don't fail the main request if auto-reply fails
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully',
      data 
    });

  } catch (error) {
    console.error('Email API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Email template generators
function generateContactEmailHTML({ name, email, message, company, phone }: any) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1e40af;">New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p style="background: #f3f4f6; padding: 15px; border-radius: 5px;">${message}</p>
      <hr style="margin: 20px 0;">
      <p style="color: #6b7280; font-size: 14px;">This email was sent from the ElegantCodes contact form.</p>
    </div>
  `;
}

function generateQuoteEmailHTML({ name, email, message, company, phone, projectType, description, budget, timeline, features }: any) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1e40af;">New Quote Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      ${projectType ? `<p><strong>Project Type:</strong> ${projectType}</p>` : ''}
      ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ''}
      ${timeline ? `<p><strong>Timeline:</strong> ${timeline}</p>` : ''}
      <p><strong>Description:</strong></p>
      <p style="background: #f3f4f6; padding: 15px; border-radius: 5px;">${description || message}</p>
      ${features ? `<p><strong>Features:</strong> ${features}</p>` : ''}
      <hr style="margin: 20px 0;">
      <p style="color: #6b7280; font-size: 14px;">This quote request was sent from the ElegantCodes website.</p>
    </div>
  `;
}

function generatePortfolioEmailHTML({ name, email, message, company, phone }: any) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1e40af;">Portfolio Inquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p style="background: #f3f4f6; padding: 15px; border-radius: 5px;">${message}</p>
      <hr style="margin: 20px 0;">
      <p style="color: #6b7280; font-size: 14px;">This inquiry was sent from the ElegantCodes portfolio section.</p>
    </div>
  `;
}

function generateGenericEmailHTML({ name, email, message, company, phone }: any) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1e40af;">New Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p style="background: #f3f4f6; padding: 15px; border-radius: 5px;">${message}</p>
      <hr style="margin: 20px 0;">
      <p style="color: #6b7280; font-size: 14px;">This email was sent from the ElegantCodes website.</p>
    </div>
  `;
}

function generateAutoReplyHTML({ name, formType }: any) {
  const formTypeText = formType === 'quote' ? 'quote request' : 
                      formType === 'contact' ? 'message' : 
                      formType === 'portfolio' ? 'portfolio inquiry' : 'inquiry';
  
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1e40af;">Thank you for contacting ElegantCodes!</h2>
      <p>Dear ${name},</p>
      <p>Thank you for your ${formTypeText}. We have received your message and will get back to you within 24 hours.</p>
      <p>In the meantime, feel free to explore our services and portfolio on our website.</p>
      <p>Best regards,<br>The ElegantCodes Team</p>
      <hr style="margin: 20px 0;">
      <p style="color: #6b7280; font-size: 14px;">This is an automated response. Please do not reply to this email.</p>
    </div>
  `;
} 