
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Camera, Calendar, Search, Star, Users } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative">
        {/* Background image with overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-picxpert-DEFAULT/70 to-picxpert-secondary/70">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
        </div>
        
        <div className="container relative z-10 py-20 md:py-32 flex flex-col items-center text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Capture Your Special Moments
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Find and book professional photographers for any occasion in just a few clicks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/register">
              <Button size="lg" className="bg-picxpert-primary hover:bg-picxpert-secondary text-white">
                Get Started
              </Button>
            </Link>
            <Link to="/user/home">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Browse Photographers
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose PicXpert?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-picxpert-light p-8 rounded-lg shadow-sm text-center">
              <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-full bg-picxpert-primary text-white mb-6">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Easy Search</h3>
              <p className="text-gray-600">
                Find the perfect photographer based on style, location, and budget.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-picxpert-light p-8 rounded-lg shadow-sm text-center">
              <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-full bg-picxpert-primary text-white mb-6">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Instant Booking</h3>
              <p className="text-gray-600">
                Book your session with just a few clicks and secure your date instantly.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-picxpert-light p-8 rounded-lg shadow-sm text-center">
              <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-full bg-picxpert-primary text-white mb-6">
                <Star className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Verified Professionals</h3>
              <p className="text-gray-600">
                All photographers are vetted to ensure quality and professionalism.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 bg-picxpert-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="text-center">
              <div className="relative mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-picxpert-primary text-white mb-4">
                <span className="text-xl font-bold">1</span>
                <div className="hidden md:block absolute h-1 bg-picxpert-primary w-full right-0 top-1/2 -translate-y-1/2 translate-x-full"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Create an Account</h3>
              <p className="text-gray-600 text-sm">
                Sign up for free in seconds.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="text-center">
              <div className="relative mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-picxpert-primary text-white mb-4">
                <span className="text-xl font-bold">2</span>
                <div className="hidden md:block absolute h-1 bg-picxpert-primary w-full right-0 top-1/2 -translate-y-1/2 translate-x-full"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Search Photographers</h3>
              <p className="text-gray-600 text-sm">
                Filter by event type, location, and budget.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="text-center">
              <div className="relative mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-picxpert-primary text-white mb-4">
                <span className="text-xl font-bold">3</span>
                <div className="hidden md:block absolute h-1 bg-picxpert-primary w-full right-0 top-1/2 -translate-y-1/2 translate-x-full"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Book Your Session</h3>
              <p className="text-gray-600 text-sm">
                Select your date and confirm your booking.
              </p>
            </div>
            
            {/* Step 4 */}
            <div className="text-center">
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-picxpert-primary text-white mb-4">
                <span className="text-xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Enjoy Your Shoot</h3>
              <p className="text-gray-600 text-sm">
                Meet your photographer and create memories.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-picxpert-DEFAULT text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of happy clients and photographers on PicXpert today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register?role=user">
              <Button size="lg" className="bg-white text-picxpert-DEFAULT hover:bg-gray-100">
                <Users className="mr-2 h-5 w-5" />
                Join as Client
              </Button>
            </Link>
            <Link to="/register?role=photographer">
              <Button size="lg" className="bg-picxpert-primary hover:bg-picxpert-secondary">
                <Camera className="mr-2 h-5 w-5" />
                Join as Photographer
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Camera className="h-6 w-6 text-picxpert-primary mr-2" />
                <span className="text-xl font-bold">PicXpert</span>
              </div>
              <p className="text-gray-400 text-sm">
                Connecting talented photographers with clients across the globe.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white text-sm">Home</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white text-sm">About</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white text-sm">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">For Photographers</h3>
              <ul className="space-y-2">
                <li><Link to="/register?role=photographer" className="text-gray-400 hover:text-white text-sm">Join as Photographer</Link></li>
                <li><Link to="/pricing" className="text-gray-400 hover:text-white text-sm">Pricing</Link></li>
                <li><Link to="/faq" className="text-gray-400 hover:text-white text-sm">FAQs</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/terms" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link></li>
                <li><Link to="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link></li>
                <li><Link to="/cookies" className="text-gray-400 hover:text-white text-sm">Cookies Policy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} PicXpert. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
