import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

interface EmailParams {
  email: string;
  to_name: string;
  application_status: string;
  next_steps: string;
  [key: string]: unknown;
}

// Test function to verify email functionality
export const sendTestEmail = async (toEmail: string): Promise<{ success: boolean; message: string }> => {
  const testParams: EmailParams = {
    email: toEmail,
    to_name: "Test User",
    application_status: "Test Status",
    next_steps: "This is a test email to verify the email service is working correctly.",
    reply_to: toEmail
  };

  return sendStatusEmail(testParams);
};

export const sendStatusEmail = async (params: EmailParams): Promise<{ success: boolean; message: string }> => {
  try {
    console.log('Sending email with params:', { 
      ...params, 
      email: '***',
      template_params: {
        to_name: params.to_name,
        email: params.email,
        application_status: params.application_status,
        next_steps: params.next_steps,
        reply_to: params.email
      }
    });
    
    // Structure the email parameters according to EmailJS requirements
    const templateParams = {
      to_name: params.to_name,
      email: params.email,
      application_status: params.application_status,
      next_steps: params.next_steps,
      reply_to: params.email,
      from_name: "Elite Bullies",  // Add sender name
      subject: `Elite Bullies Application Status: ${params.application_status}`  // Add subject
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Email sent successfully:', response.status, response.text);
    return {
      success: true,
      message: 'Status update email sent successfully!'
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to send status update email. Please try again later.'
    };
  }
}; 