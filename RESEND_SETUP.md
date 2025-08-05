# Resend Email API Integration Setup Guide

This guide will help you set up Resend for sending emails from your ElegantCodes website forms.

## 🚀 Quick Setup

### 1. Create Resend Account

1. Go to [Resend.com](https://resend.com/) and sign up for a free account
2. Verify your email address
3. Complete your profile setup

### 2. Get Your API Key

1. In your Resend dashboard, go to **API Keys**
2. Click **Create API Key**
3. Give it a name (e.g., "ElegantCodes Website")
4. Copy the API key (starts with `re_`)

### 3. Verify Your Domain (Optional but Recommended)

1. Go to **Domains** in your Resend dashboard
2. Click **Add Domain**
3. Add your domain (e.g., `elegantcodes.com`)
4. Follow the DNS verification steps
5. Wait for verification (usually takes a few minutes)

### 4. Configure Environment Variables

Create a `.env.local` file in your project root with:

```env
# Resend Configuration
RESEND_API_KEY=re_your_api_key_here

# Email Configuration
FROM_EMAIL=noreply@elegantcodes.com
TO_EMAIL=info@elegantcodes.com
```

### 5. Deploy to Vercel

1. Add the environment variables to your Vercel project:
   - Go to your Vercel dashboard
   - Select your project
   - Go to **Settings** → **Environment Variables**
   - Add each variable from your `.env.local` file

2. Deploy your changes:
   ```bash
   git add .
   git commit -m "Add Resend email integration"
   git push origin main
   ```

## 🔧 Features Implemented

### API Route
- **File**: `app/api/send-email/route.ts`
- **Method**: POST
- **Features**:
  - Form validation
  - Email template generation
  - Error handling
  - Rate limiting protection

### Email Templates
- **Contact Form** - General inquiries
- **Quote Request** - Project quote requests
- **Portfolio Request** - Similar project requests
- **Generic Template** - Fallback template

### Form Integration
- **Contact Page** - General contact form
- **Quote Page** - Detailed quote request form
- **Portfolio Page** - Similar project request form

## 📧 Email Templates

### Contact Form Template
```html
Subject: New Contact Form Submission - {{name}}

Name: {{name}}
Email: {{email}}
Company: {{company}}
Phone: {{phone}}
Message: {{message}}
```

### Quote Request Template
```html
Subject: New Quote Request - {{name}} - {{projectType}}

Name: {{name}}
Email: {{email}}
Company: {{company}}
Phone: {{phone}}
Project Type: {{projectType}}
Budget: {{budget}}
Timeline: {{timeline}}
Message: {{message}}
```

### Portfolio Request Template
```html
Subject: Portfolio Project Request - {{name}} - {{projectType}}

Name: {{name}}
Email: {{email}}
Company: {{company}}
Phone: {{phone}}
Project Type: {{projectType}}
Budget: {{budget}}
Timeline: {{timeline}}
Message: {{message}}
```

## 🎨 Email Design

All emails include:
- **Professional HTML templates** with your brand colors
- **Responsive design** that works on all devices
- **Clear formatting** with proper spacing and typography
- **Brand consistency** with your website design

## 🔒 Security & Best Practices

### API Security
- ✅ **API Key Protection** - Stored in environment variables
- ✅ **Input Validation** - Server-side validation
- ✅ **Rate Limiting** - Built-in protection
- ✅ **Error Handling** - Graceful error responses

### Form Validation
- ✅ **Client-side validation** with react-hook-form
- ✅ **Server-side validation** in API route
- ✅ **Email format validation**
- ✅ **Required field validation**

### Data Protection
- ✅ **No sensitive data logging**
- ✅ **Secure API endpoints**
- ✅ **Environment variable protection**

## 📊 Resend Dashboard Features

### Analytics
- **Email delivery status**
- **Open rates**
- **Click rates**
- **Bounce rates**
- **Spam reports**

### Monitoring
- **Real-time delivery status**
- **Error tracking**
- **Rate limit monitoring**
- **Domain reputation**

## 🚨 Troubleshooting

### Common Issues

1. **"API key not found" error**
   - Check your RESEND_API_KEY in environment variables
   - Verify the API key is correct in Resend dashboard

2. **"Domain not verified" error**
   - Verify your domain in Resend dashboard
   - Check DNS records are correct
   - Wait for DNS propagation (up to 24 hours)

3. **"Rate limit exceeded" error**
   - Check your Resend plan limits
   - Monitor usage in Resend dashboard
   - Consider upgrading if needed

4. **"Email not sending" error**
   - Check browser console for errors
   - Verify all environment variables are set
   - Check Resend dashboard for delivery status

### Debug Mode
Enable debug logging by checking the browser console and server logs:

```typescript
// Client-side error handling
const handleError = (error: string) => {
  console.error('Email Error:', error);
  // Add your error handling logic
};

// Server-side logging (in API route)
console.error('API error:', error);
```

## 📈 Performance & Limits

### Resend Free Plan
- **3,000 emails/month**
- **100 emails/day**
- **Unlimited domains**
- **API access**

### Resend Pro Plan ($20/month)
- **50,000 emails/month**
- **1,000 emails/day**
- **Priority support**
- **Advanced analytics**

### Resend Enterprise Plan
- **Custom limits**
- **Dedicated support**
- **Custom features**
- **SLA guarantees**

## 🔄 Migration from EmailJS

### Benefits of Resend
- ✅ **Higher limits** - 3,000 emails/month vs 200
- ✅ **Better deliverability** - 99.9% delivery rate
- ✅ **Professional API** - RESTful API design
- ✅ **Advanced analytics** - Detailed reporting
- ✅ **Domain verification** - Better sender reputation

### Migration Steps
1. **Set up Resend account**
2. **Configure environment variables**
3. **Deploy new API routes**
4. **Test all forms**
5. **Monitor delivery**

## 📞 Support & Documentation

- **Resend Documentation**: [resend.com/docs](https://resend.com/docs)
- **Resend Support**: [resend.com/support](https://resend.com/support)
- **API Reference**: [resend.com/docs/api-reference](https://resend.com/docs/api-reference)

## 🎯 Next Steps

### Immediate Actions
1. **Create Resend account**
2. **Get API key**
3. **Configure environment variables**
4. **Deploy to production**
5. **Test all forms**

### Future Enhancements
1. **Add email templates** - Customize email designs
2. **Implement webhooks** - Real-time delivery notifications
3. **Add analytics** - Track email performance
4. **Set up domain verification** - Improve deliverability

---

**Note**: This Resend integration provides a professional, scalable email solution for your ElegantCodes website. The API is production-ready and includes comprehensive error handling and validation. 