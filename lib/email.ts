import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message: string;
  budget?: string;
  timeline?: string;
}

export interface QuoteRequestData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType: string;
  description: string;
  budget: string;
  timeline: string;
  features: string[];
  additionalInfo?: string;
}

// Email to company when client submits contact form
export async function sendContactEmailToCompany(data: ContactFormData) {
  try {
    const { data: result, error } = await resend.emails.send({
      from: 'ElegantCodes <noreply@elegantcodes.com>',
      to: ['info@elegantcodes.com'],
      subject: `New Contact Form Submission - ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); color: white; padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 28px;">New Contact Form Submission</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">ElegantCodes Contact Form</p>
          </div>
          
          <div style="padding: 30px; background: #f8fafc;">
            <h2 style="color: #1e293b; margin-bottom: 20px;">Contact Details</h2>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #475569;">Name:</strong>
              <p style="margin: 5px 0; color: #1e293b;">${data.name}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #475569;">Email:</strong>
              <p style="margin: 5px 0; color: #1e293b;">${data.email}</p>
            </div>
            
            ${data.phone ? `
            <div style="margin-bottom: 20px;">
              <strong style="color: #475569;">Phone:</strong>
              <p style="margin: 5px 0; color: #1e293b;">${data.phone}</p>
            </div>
            ` : ''}
            
            ${data.company ? `
            <div style="margin-bottom: 20px;">
              <strong style="color: #475569;">Company:</strong>
              <p style="margin: 5px 0; color: #1e293b;">${data.company}</p>
            </div>
            ` : ''}
            
            ${data.service ? `
            <div style="margin-bottom: 20px;">
              <strong style="color: #475569;">Service Interest:</strong>
              <p style="margin: 5px 0; color: #1e293b;">${data.service}</p>
            </div>
            ` : ''}
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #475569;">Message:</strong>
              <p style="margin: 5px 0; color: #1e293b; line-height: 1.6;">${data.message}</p>
            </div>
            
            ${data.budget ? `
            <div style="margin-bottom: 20px;">
              <strong style="color: #475569;">Budget:</strong>
              <p style="margin: 5px 0; color: #1e293b;">${data.budget}</p>
            </div>
            ` : ''}
            
            ${data.timeline ? `
            <div style="margin-bottom: 20px;">
              <strong style="color: #475569;">Timeline:</strong>
              <p style="margin: 5px 0; color: #1e293b;">${data.timeline}</p>
            </div>
            ` : ''}
          </div>
          
          <div style="background: #1e293b; color: white; padding: 20px; text-align: center;">
            <p style="margin: 0; font-size: 14px;">This email was sent from the ElegantCodes contact form</p>
            <p style="margin: 5px 0 0 0; font-size: 12px; opacity: 0.7;">© 2024 ElegantCodes. All rights reserved.</p>
          </div>
        </div>
      `
    });

    if (error) {
      console.error('Error sending contact email to company:', error);
      throw new Error('Failed to send contact email to company');
    }

    return result;
  } catch (error) {
    console.error('Error in sendContactEmailToCompany:', error);
    throw error;
  }
}

// Auto-reply to client when they submit contact form
export async function sendContactAutoReplyToClient(data: ContactFormData) {
  try {
    const { data: result, error } = await resend.emails.send({
      from: 'ElegantCodes <info@elegantcodes.com>',
      to: [data.email],
      subject: 'Thank you for contacting ElegantCodes',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: white; padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 28px;">Thank You!</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">We've received your message</p>
          </div>
          
          <div style="padding: 30px; background: #f8fafc;">
            <h2 style="color: #1e293b; margin-bottom: 20px;">Hello ${data.name},</h2>
            
            <p style="color: #475569; line-height: 1.6; margin-bottom: 20px;">
              Thank you for reaching out to ElegantCodes! We've received your message and our team will review it carefully.
            </p>
            
            <p style="color: #475569; line-height: 1.6; margin-bottom: 20px;">
              We typically respond to all inquiries within 24 hours during business days. If you have an urgent request, please don't hesitate to call us directly.
            </p>
            
            <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1e293b; margin-bottom: 15px;">What happens next?</h3>
              <ul style="color: #475569; line-height: 1.6; margin: 0; padding-left: 20px;">
                <li>Our team will review your requirements</li>
                <li>We'll schedule a consultation call</li>
                <li>We'll provide a detailed proposal</li>
                <li>We'll discuss timelines and next steps</li>
              </ul>
            </div>
            
            <p style="color: #475569; line-height: 1.6; margin-bottom: 20px;">
              In the meantime, feel free to explore our portfolio and case studies to learn more about our work.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://elegantcodes.com/portfolio" style="background: #f59e0b; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold;">View Our Portfolio</a>
            </div>
          </div>
          
          <div style="background: #1e293b; color: white; padding: 20px; text-align: center;">
            <p style="margin: 0; font-size: 14px;">ElegantCodes - Transforming Ideas into Digital Reality</p>
            <p style="margin: 5px 0 0 0; font-size: 12px; opacity: 0.7;">© 2024 ElegantCodes. All rights reserved.</p>
          </div>
        </div>
      `
    });

    if (error) {
      console.error('Error sending auto-reply to client:', error);
      throw new Error('Failed to send auto-reply to client');
    }

    return result;
  } catch (error) {
    console.error('Error in sendContactAutoReplyToClient:', error);
    throw error;
  }
}

// Email to company when client requests quote
export async function sendQuoteRequestToCompany(data: QuoteRequestData) {
  try {
    const { data: result, error } = await resend.emails.send({
      from: 'ElegantCodes <noreply@elegantcodes.com>',
      to: ['info@elegantcodes.com'],
      subject: `New Quote Request - ${data.projectType} - ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); color: white; padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 28px;">New Quote Request</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">ElegantCodes Quote Request</p>
          </div>
          
          <div style="padding: 30px; background: #f8fafc;">
            <h2 style="color: #1e293b; margin-bottom: 20px;">Project Details</h2>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #475569;">Client Name:</strong>
              <p style="margin: 5px 0; color: #1e293b;">${data.name}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #475569;">Email:</strong>
              <p style="margin: 5px 0; color: #1e293b;">${data.email}</p>
            </div>
            
            ${data.phone ? `
            <div style="margin-bottom: 20px;">
              <strong style="color: #475569;">Phone:</strong>
              <p style="margin: 5px 0; color: #1e293b;">${data.phone}</p>
            </div>
            ` : ''}
            
            ${data.company ? `
            <div style="margin-bottom: 20px;">
              <strong style="color: #475569;">Company:</strong>
              <p style="margin: 5px 0; color: #1e293b;">${data.company}</p>
            </div>
            ` : ''}
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #475569;">Project Type:</strong>
              <p style="margin: 5px 0; color: #1e293b;">${data.projectType}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #475569;">Budget Range:</strong>
              <p style="margin: 5px 0; color: #1e293b;">${data.budget}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #475569;">Timeline:</strong>
              <p style="margin: 5px 0; color: #1e293b;">${data.timeline}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #475569;">Project Description:</strong>
              <p style="margin: 5px 0; color: #1e293b; line-height: 1.6;">${data.description}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #475569;">Required Features:</strong>
              <ul style="margin: 5px 0; color: #1e293b; line-height: 1.6; padding-left: 20px;">
                ${data.features.map(feature => `<li>${feature}</li>`).join('')}
              </ul>
            </div>
            
            ${data.additionalInfo ? `
            <div style="margin-bottom: 20px;">
              <strong style="color: #475569;">Additional Information:</strong>
              <p style="margin: 5px 0; color: #1e293b; line-height: 1.6;">${data.additionalInfo}</p>
            </div>
            ` : ''}
          </div>
          
          <div style="background: #1e293b; color: white; padding: 20px; text-align: center;">
            <p style="margin: 0; font-size: 14px;">This quote request was submitted from the ElegantCodes website</p>
            <p style="margin: 5px 0 0 0; font-size: 12px; opacity: 0.7;">© 2024 ElegantCodes. All rights reserved.</p>
          </div>
        </div>
      `
    });

    if (error) {
      console.error('Error sending quote request to company:', error);
      throw new Error('Failed to send quote request to company');
    }

    return result;
  } catch (error) {
    console.error('Error in sendQuoteRequestToCompany:', error);
    throw error;
  }
}

// Auto-reply to client when they request quote
export async function sendQuoteAutoReplyToClient(data: QuoteRequestData) {
  try {
    const { data: result, error } = await resend.emails.send({
      from: 'ElegantCodes <info@elegantcodes.com>',
      to: [data.email],
      subject: 'Quote Request Received - ElegantCodes',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: white; padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 28px;">Quote Request Received!</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">We're excited to work on your project</p>
          </div>
          
          <div style="padding: 30px; background: #f8fafc;">
            <h2 style="color: #1e293b; margin-bottom: 20px;">Hello ${data.name},</h2>
            
            <p style="color: #475569; line-height: 1.6; margin-bottom: 20px;">
              Thank you for submitting your quote request for your <strong>${data.projectType}</strong> project! We're excited about the opportunity to work with you.
            </p>
            
            <p style="color: #475569; line-height: 1.6; margin-bottom: 20px;">
              Our team is currently reviewing your requirements and will prepare a detailed proposal tailored to your needs.
            </p>
            
            <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1e293b; margin-bottom: 15px;">What's included in your quote:</h3>
              <ul style="color: #475569; line-height: 1.6; margin: 0; padding-left: 20px;">
                <li>Detailed project scope and timeline</li>
                <li>Technical specifications and architecture</li>
                <li>Comprehensive cost breakdown</li>
                <li>Development phases and milestones</li>
                <li>Post-launch support and maintenance</li>
              </ul>
            </div>
            
            <p style="color: #475569; line-height: 1.6; margin-bottom: 20px;">
              You can expect to receive your detailed quote within 2-3 business days. We'll also schedule a consultation call to discuss your project in detail.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://elegantcodes.com/portfolio" style="background: #f59e0b; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold;">View Our Work</a>
            </div>
          </div>
          
          <div style="background: #1e293b; color: white; padding: 20px; text-align: center;">
            <p style="margin: 0; font-size: 14px;">ElegantCodes - Transforming Ideas into Digital Reality</p>
            <p style="margin: 5px 0 0 0; font-size: 12px; opacity: 0.7;">© 2024 ElegantCodes. All rights reserved.</p>
          </div>
        </div>
      `
    });

    if (error) {
      console.error('Error sending quote auto-reply to client:', error);
      throw new Error('Failed to send quote auto-reply to client');
    }

    return result;
  } catch (error) {
    console.error('Error in sendQuoteAutoReplyToClient:', error);
    throw error;
  }
} 