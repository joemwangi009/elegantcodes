# EmailJS Integration Setup Guide

This guide will help you set up EmailJS for sending emails from your ElegantCodes website forms.

## 🚀 Quick Setup

### 1. Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address
3. Complete your profile setup

### 2. Create Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID** (e.g., `service_abc123`)

### 3. Create Email Templates

#### Contact Form Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Name it "Contact Form"
4. Use this template:

```html
Subject: New Contact Form Submission - {{from_name}}

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Phone: {{phone}}
Message: {{message}}

This is a new contact form submission from the ElegantCodes website.
```

5. Note down the **Template ID** (e.g., `template_contact_xyz`)

#### Quote Request Template
1. Create another template named "Quote Request"
2. Use this template:

```html
Subject: New Quote Request - {{from_name}} - {{project_type}}

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Phone: {{phone}}
Project Type: {{project_type}}
Budget: {{budget}}
Timeline: {{timeline}}
Message: {{message}}

This is a new quote request from the ElegantCodes website.
```

3. Note down the **Template ID** (e.g., `template_quote_xyz`)

#### Portfolio Request Template
1. Create another template named "Portfolio Request"
2. Use this template:

```html
Subject: Portfolio Project Request - {{from_name}} - {{project_type}}

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Phone: {{phone}}
Project Type: {{project_type}}
Budget: {{budget}}
Timeline: {{timeline}}
Message: {{message}}

This is a portfolio project request from the ElegantCodes website.
```

3. Note down the **Template ID** (e.g., `template_portfolio_xyz`)

### 4. Get Your User ID

1. Go to **Account** → **API Keys**
2. Copy your **Public Key** (User ID)

### 5. Configure Environment Variables

Create a `.env.local` file in your project root with:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_your_service_id
NEXT_PUBLIC_EMAILJS_USER_ID=user_your_user_id

# Template IDs
NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID=template_contact_xyz
NEXT_PUBLIC_EMAILJS_QUOTE_TEMPLATE_ID=template_quote_xyz
NEXT_PUBLIC_EMAILJS_PORTFOLIO_TEMPLATE_ID=template_portfolio_xyz

# Fallback template (if specific ones aren't set)
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_contact_xyz
```

### 6. Deploy to Vercel

1. Add the environment variables to your Vercel project:
   - Go to your Vercel dashboard
   - Select your project
   - Go to **Settings** → **Environment Variables**
   - Add each variable from your `.env.local` file

2. Deploy your changes:
   ```bash
   git add .
   git commit -m "Add EmailJS integration"
   git push origin main
   ```

## 🔧 Features Implemented

### EmailForm Component
- **Reusable form component** with EmailJS integration
- **Real-time validation** using react-hook-form
- **Loading states** and success/error handling
- **Accessible design** with ARIA labels
- **Responsive layout** with Tailwind CSS
- **Framer Motion animations**

### Form Fields Available
- **Name** (required)
- **Email** (required, validated)
- **Phone** (optional)
- **Company** (optional)
- **Project Type** (dropdown with options)
- **Budget** (dropdown with ranges)
- **Timeline** (dropdown with options)
- **Message** (required, textarea)

### Integration Points
1. **Contact Page** - General inquiries
2. **Quote Page** - Project quote requests
3. **Portfolio Page** - Similar project requests

## 🎨 Customization

### Styling
The forms use Tailwind CSS classes and can be customized by modifying:
- `EmailForm.tsx` - Main form component
- `ContactSection.tsx` - Contact page integration
- `QuoteSection.tsx` - Quote page integration
- `portfolio/page.tsx` - Portfolio integration

### Form Configuration
Each form can be configured with different fields:

```tsx
<EmailForm
  templateId="your_template_id"
  title="Custom Title"
  subtitle="Custom subtitle"
  submitText="Custom Button Text"
  showCompany={true}
  showProjectType={true}
  showPhone={true}
  showBudget={true}
  showTimeline={true}
  onSuccess={handleSuccess}
  onError={handleError}
/>
```

## 🔒 Security & Best Practices

### Environment Variables
- ✅ All EmailJS credentials are stored in environment variables
- ✅ No sensitive data in the codebase
- ✅ `.env.local` is in `.gitignore`

### Form Validation
- ✅ Client-side validation with react-hook-form
- ✅ Email format validation
- ✅ Required field validation
- ✅ Minimum/maximum length validation

### Error Handling
- ✅ Graceful error handling
- ✅ User-friendly error messages
- ✅ Console logging for debugging
- ✅ Fallback templates

## 📧 Email Templates Best Practices

### Template Variables
Use these variables in your EmailJS templates:
- `{{from_name}}` - User's name
- `{{from_email}}` - User's email
- `{{company}}` - Company name
- `{{phone}}` - Phone number
- `{{project_type}}` - Selected project type
- `{{budget}}` - Budget range
- `{{timeline}}` - Project timeline
- `{{message}}` - User's message

### Template Design
1. **Clear subject lines** with relevant information
2. **Structured content** with labels
3. **Professional formatting**
4. **Include all form data**
5. **Add context** about the source

## 🚨 Troubleshooting

### Common Issues

1. **"Service not found" error**
   - Check your Service ID in environment variables
   - Verify the service is active in EmailJS dashboard

2. **"Template not found" error**
   - Check your Template ID in environment variables
   - Verify the template is published in EmailJS dashboard

3. **"User ID not found" error**
   - Check your User ID in environment variables
   - Verify your EmailJS account is active

4. **Emails not sending**
   - Check browser console for errors
   - Verify all environment variables are set
   - Check EmailJS dashboard for sending limits

### Debug Mode
Enable debug logging by adding to your component:

```tsx
const handleError = (error: string) => {
  console.error('EmailJS Error:', error);
  // Add your error handling logic
};
```

## 📊 Analytics & Monitoring

### EmailJS Dashboard
- Monitor email sending success rates
- Track template usage
- View delivery statistics
- Check for failed deliveries

### Custom Analytics
You can add custom tracking:

```tsx
const handleSuccess = () => {
  // Add analytics tracking
  console.log('Email sent successfully');
  // You can add Google Analytics, Mixpanel, etc.
};
```

## 🔄 Updates & Maintenance

### Regular Tasks
1. **Monitor EmailJS usage** - Check sending limits
2. **Review email templates** - Update content as needed
3. **Test forms** - Ensure they work correctly
4. **Update dependencies** - Keep packages current

### Version Updates
When updating EmailJS:
1. Check the [EmailJS changelog](https://www.emailjs.com/docs/changelog/)
2. Test forms after updates
3. Update environment variables if needed

## 📞 Support

- **EmailJS Documentation**: [docs.emailjs.com](https://docs.emailjs.com/)
- **EmailJS Support**: [support.emailjs.com](https://support.emailjs.com/)
- **Project Issues**: Check the GitHub repository

---

**Note**: This integration provides a lightweight, secure, and user-friendly email solution for your ElegantCodes website. The forms are fully functional and ready for production use. 