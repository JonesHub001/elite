import { createClient } from '@supabase/supabase-js';
import { NewsletterSubscriber, PuppyApplication } from '../types/supabase';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient<{
    Tables: {
        newsletter_subscribers: {
            Row: NewsletterSubscriber;
            Insert: Omit<NewsletterSubscriber, 'id' | 'created_at'>;
            Update: Partial<Omit<NewsletterSubscriber, 'id' | 'created_at'>>;
        };
        puppy_applications: {
            Row: PuppyApplication;
            Insert: Omit<PuppyApplication, 'id' | 'created_at'>;
            Update: Partial<Omit<PuppyApplication, 'id' | 'created_at'>>;
        };
    };
}>(supabaseUrl, supabaseAnonKey);

// Newsletter Subscriber Functions
export async function subscribeToNewsletter(data: Omit<NewsletterSubscriber, 'id' | 'created_at' | 'status'>) {
    try {
        const { data: result, error } = await supabase
            .from('newsletter_subscribers')
            .insert({
                ...data,
                status: 'active'
            })
            .select()
            .single();

        if (error) throw error;
        return { data: result, error: null };
    } catch (error) {
        console.error('Newsletter subscription error:', error);
        return { data: null, error };
    }
}

// Puppy Application Functions
export async function submitPuppyApplication(data: Omit<PuppyApplication, 'id' | 'created_at' | 'status'>) {
    try {
        const { data: result, error } = await supabase
            .from('puppy_applications')
            .insert({
                ...data,
                status: 'pending'
            })
            .select()
            .single();

        if (error) throw error;
        return { data: result, error: null };
    } catch (error) {
        console.error('Application submission error:', error);
        return { data: null, error };
    }
}

export async function getPuppyApplication(email: string) {
    try {
        const { data, error } = await supabase
            .from('puppy_applications')
            .select('*')
            .eq('email', email)
            .order('created_at', { ascending: false })
            .limit(1);

        if (error) throw error;
        return { data: data?.[0] || null, error: null };
    } catch (error) {
        console.error('Get application error:', error);
        return { data: null, error };
    }
}

export async function updatePuppyApplication(id: string, data: Partial<Omit<PuppyApplication, 'id' | 'created_at'>>) {
    try {
        const { data: result, error } = await supabase
            .from('puppy_applications')
            .update(data)
            .eq('id', id)
            .select()
            .single();

        if (error) throw error;
        return { data: result, error: null };
    } catch (error) {
        console.error('Update application error:', error);
        return { data: null, error };
    }
} 