export interface Puppy {
  id: string;
  name: string;
  images: string[];
  parents: {
    sire: string;
    dam: string;
  };
  gender: 'Male' | 'Female';
  dateOfBirth: string;
  color: string;
  status: 'Available' | 'Reserved' | 'Sold';
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  image: string;
  content: string;
  location: string;
}