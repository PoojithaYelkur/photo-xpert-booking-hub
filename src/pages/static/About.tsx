
import Navbar from "@/components/layout/Navbar";
import { Camera, Users, Star, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-picxpert-light py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About PicXpert</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connecting talented photographers with clients looking to capture life's special moments.
          </p>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                At PicXpert, we believe that everyone deserves access to professional photography services 
                that capture life's most precious moments. Our mission is to create a seamless connection 
                between talented photographers and clients, making professional photography accessible 
                to all.
              </p>
              <p className="text-gray-600">
                We're dedicated to empowering photographers to showcase their work, build their business, 
                and connect with clients who value their unique style and expertise. At the same time, 
                we help clients find the perfect photographer for their special occasions, ensuring 
                memories are beautifully preserved for years to come.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
                alt="Nature photography" 
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 bg-picxpert-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-picxpert-primary text-white mb-6">
                <Camera className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality & Excellence</h3>
              <p className="text-gray-600">
                We set high standards for our photographers, ensuring clients receive exceptional service and stunning results.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-picxpert-primary text-white mb-6">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-gray-600">
                We foster a supportive community where photographers can grow, collaborate, and elevate their craft.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-picxpert-primary text-white mb-6">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Accessibility</h3>
              <p className="text-gray-600">
                We make professional photography services accessible to everyone, regardless of budget or location.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">Our Team</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Meet the passionate individuals behind PicXpert who are dedicated to connecting photographers with clients worldwide.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04" 
                  alt="Team member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Sarah Johnson</h3>
              <p className="text-picxpert-primary">Founder & CEO</p>
              <p className="text-gray-600 mt-2">
                Professional photographer with a vision to make photography accessible to all.
              </p>
            </div>
            
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Team member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Michael Chen</h3>
              <p className="text-picxpert-primary">CTO</p>
              <p className="text-gray-600 mt-2">
                Tech enthusiast with a passion for creating seamless digital experiences.
              </p>
            </div>
            
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
                  alt="Team member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Olivia Rodriguez</h3>
              <p className="text-picxpert-primary">Head of Marketing</p>
              <p className="text-gray-600 mt-2">
                Creative strategist focused on connecting photographers with their ideal clients.
              </p>
            </div>
            
            {/* Team Member 4 */}
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                  alt="Team member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">David Williams</h3>
              <p className="text-picxpert-primary">Client Success</p>
              <p className="text-gray-600 mt-2">
                Dedicated to ensuring both photographers and clients have an exceptional experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-picxpert-DEFAULT text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">10,000+</div>
              <p className="text-xl">Photographers</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50,000+</div>
              <p className="text-xl">Satisfied Clients</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100,000+</div>
              <p className="text-xl">Bookings Completed</p>
            </div>
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
                <li><a href="/" className="text-gray-400 hover:text-white text-sm">Home</a></li>
                <li><a href="/about" className="text-gray-400 hover:text-white text-sm">About</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white text-sm">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">For Photographers</h3>
              <ul className="space-y-2">
                <li><a href="/register?role=photographer" className="text-gray-400 hover:text-white text-sm">Join as Photographer</a></li>
                <li><a href="/pricing" className="text-gray-400 hover:text-white text-sm">Pricing</a></li>
                <li><a href="/faq" className="text-gray-400 hover:text-white text-sm">FAQs</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="/terms" className="text-gray-400 hover:text-white text-sm">Terms of Service</a></li>
                <li><a href="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a></li>
                <li><a href="/cookies" className="text-gray-400 hover:text-white text-sm">Cookies Policy</a></li>
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

export default About;
