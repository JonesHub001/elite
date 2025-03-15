-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Create newsletter_subscribers table
create table newsletter_subscribers (
    id uuid default uuid_generate_v4() primary key,
    first_name text not null,
    last_name text not null,
    email text unique not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    status text default 'active' check (status in ('active', 'unsubscribed')),
    
    -- Add constraints
    constraint email_format check (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

-- Create puppy_applications table
create table puppy_applications (
    id uuid default uuid_generate_v4() primary key,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    status text default 'pending' check (status in ('pending', 'approved', 'rejected')),
    
    -- Personal Information
    first_name text not null,
    last_name text not null,
    email text not null,
    phone text not null,
    
    -- Address Information
    address text not null,
    city text not null,
    state text not null,
    zip text not null,
    
    -- Home Environment
    home_type text not null check (home_type in ('house', 'apartment', 'condo', 'other')),
    yard_type text not null check (yard_type in ('fenced', 'unfenced', 'none')),
    
    -- Experience & Plans
    previous_experience text not null check (previous_experience in ('first', 'some', 'experienced', 'professional')),
    current_pets text,
    family_size text not null,
    work_schedule text not null,
    
    -- Preferences
    preferred_gender text not null check (preferred_gender in ('male', 'female', 'either')),
    comments text,
    
    -- Agreement
    agreed_to_terms boolean not null default false,
    deposit_paid boolean default false,
    deposit_amount numeric(10,2),
    deposit_date timestamp with time zone,
    
    -- Add constraints
    constraint email_format check (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    constraint phone_format check (phone ~* '^\+?1?\d{9,15}$')
);

-- Create RLS Policies
alter table newsletter_subscribers enable row level security;
alter table puppy_applications enable row level security;

-- Create policies for newsletter_subscribers
create policy "Enable read access for all users" on newsletter_subscribers for select using (true);
create policy "Enable insert access for all users" on newsletter_subscribers for insert with check (true);
create policy "Enable update for users based on email" on newsletter_subscribers for update using (auth.email() = email);

-- Create policies for puppy_applications
create policy "Enable read access for all users" on puppy_applications for select using (true);
create policy "Enable insert access for all users" on puppy_applications for insert with check (true);
create policy "Enable update for users based on email" on puppy_applications for update using (auth.email() = email);

-- Create indexes
create index idx_newsletter_email on newsletter_subscribers(email);
create index idx_applications_email on puppy_applications(email);
create index idx_applications_status on puppy_applications(status); 