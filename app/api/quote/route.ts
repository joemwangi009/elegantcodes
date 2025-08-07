import { NextRequest, NextResponse } from 'next/server';
import { sendQuoteRequestToCompany, sendQuoteAutoReplyToClient, QuoteRequestData } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body: QuoteRequestData = await request.json();
    
    // Validate required fields
    if (!body.name || !body.email || !body.projectType || !body.description || !body.budget || !body.timeline || !body.features) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, projectType, description, budget, timeline, and features are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate features array
    if (!Array.isArray(body.features) || body.features.length === 0) {
      return NextResponse.json(
        { error: 'At least one feature is required' },
        { status: 400 }
      );
    }

    // Send quote request to company
    await sendQuoteRequestToCompany(body);
    
    // Send auto-reply to client
    await sendQuoteAutoReplyToClient(body);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Quote request submitted successfully! You\'ll receive your detailed quote within 2-3 business days.' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in quote API:', error);
    return NextResponse.json(
      { error: 'Failed to submit quote request. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
} 