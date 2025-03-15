import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

interface EmailParams {
  email: string;
  to_name: string;
  application_status: string;
  next_steps: string;
  reply_to: string;
}

export const sendTestEmail = async (): Promise<{ success: boolean; message: string }> => {
  try {
    console.log('Sending test email...');
    
    const templateParams = {
      email: 'test@example.com',
      to_name: 'Test User',
      application_status: 'Test Status',
      next_steps: 'These are test next steps',
      reply_to: 'test@example.com',
      from_name: "Elite Bullies"
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Test email sent successfully:', response.status);
    return {
      success: true,
      message: 'Test email sent successfully!'
    };
  } catch (error) {
    console.error('Error sending test email:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to send test email'
    };
  }
};

export const sendStatusEmail = async (params: EmailParams): Promise<{ success: boolean; message: string }> => {
  try {
    console.log('Sending application status email to:', params.to_name);
    
    const templateParams = {
      email: params.email,
      to_name: params.to_name,
      application_status: params.application_status,
      next_steps: params.next_steps,
      reply_to: params.reply_to,
      from_name: "Elite Bullies"
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Email sent successfully:', response.status);
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