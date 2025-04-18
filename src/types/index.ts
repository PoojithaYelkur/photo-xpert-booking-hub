
export interface User {
  _id: string;
  name: string;
  email: string;
  role: 'user' | 'photographer';
  location?: string;
  createdAt: string;
}

export interface Photographer {
  _id: string;
  userId: string;
  name: string;
  bio: string;
  nativePlace: string;
  languages: string[];
  pricing: {
    hourly: number;
    fullDay: number;
  };
  availability: {
    dates: string[];
    locations: string[];
  };
  portfolio: PortfolioItem[];
  reviews: Review[];
  rating: number;
  createdAt: string;
}

export interface PortfolioItem {
  _id: string;
  photographerId: string;
  type: 'image' | 'video';
  url: string;
  caption?: string;
  createdAt: string;
}

export interface Review {
  _id: string;
  userId: string;
  photographerId: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface Booking {
  _id: string;
  userId: string;
  photographerId: string;
  eventType: string;
  eventDate: string;
  location: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  price: number;
  createdAt: string;
}

export interface Message {
  _id: string;
  bookingId?: string;
  senderId: string;
  receiverId: string;
  content: string;
  isRead: boolean;
  createdAt: string;
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: any) => Promise<void>;
  logout: () => void;
}
