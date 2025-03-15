export type NewsletterSubscriber = {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    created_at: string;
    status: 'active' | 'unsubscribed';
};

export type PuppyApplication = {
    id: string;
    created_at: string;
    status: 'pending' | 'approved' | 'rejected';
    
    // Personal Information
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    
    // Address Information
    address: string;
    city: string;
    state: string;
    zip: string;
    
    // Home Environment
    home_type: 'house' | 'apartment' | 'condo' | 'other';
    yard_type: 'fenced' | 'unfenced' | 'none';
    
    // Experience & Plans
    previous_experience: 'first' | 'some' | 'experienced' | 'professional';
    current_pets?: string;
    family_size: string;
    work_schedule: string;
    
    // Preferences
    preferred_gender: 'male' | 'female' | 'either';
    comments?: string;
    
    // Agreement
    agreed_to_terms: boolean;
    deposit_paid?: boolean;
    deposit_amount?: number;
    deposit_date?: string;
}; 