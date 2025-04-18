
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Camera } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      setIsLoading(true);
      
      // In a real app, this would send data to an API endpoint
      // Simulating API call with setTimeout
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "An error occurred",
        description: "Unable to send your message. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-picxpert-light py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We'd love to hear from you. Get in touch with our friendly team.
          </p>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-picxpert-light p-6 rounded-lg text-center">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-picxpert-primary text-white mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600">
                <a href="mailto:contact@picxpert.com" className="hover:text-picxpert-primary">
                  contact@picxpert.com
                </a>
              </p>
            </div>
            
            <div className="bg-picxpert-light p-6 rounded-lg text-center">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-picxpert-primary text-white mb-4">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600">
                <a href="tel:+1234567890" className="hover:text-picxpert-primary">
                  +1 (234) 567-890
                </a>
              </p>
            </div>
            
            <div className="bg-picxpert-light p-6 rounded-lg text-center">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-picxpert-primary text-white mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-600">
                123 Photography Lane<br />
                San Francisco, CA 94107
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} disabled={isLoading} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="example@email.com" {...field} disabled={isLoading} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="How can we help you?" {...field} disabled={isLoading} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your inquiry..." 
                            rows={5}
                            {...field} 
                            disabled={isLoading}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-picxpert-primary hover:bg-picxpert-secondary"
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
            
            {/* Map (Placeholder) */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Our Location</h2>
              <div className="bg-gray-200 rounded-lg overflow-hidden h-[400px] w-full">
                {/* In a real app, this would be a Google Maps embed */}
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-500">Map goes here</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-picxpert-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">How do I book a photographer?</h3>
              <p className="text-gray-600">
                You can book a photographer by creating an account, searching for photographers 
                in your area, and selecting your preferred date and package.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">How do payments work?</h3>
              <p className="text-gray-600">
                We securely process payments through our platform. You'll pay a deposit to 
                confirm your booking, with the remainder due after your session.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">Can I cancel a booking?</h3>
              <p className="text-gray-600">
                Yes, bookings can be cancelled according to each photographer's cancellation 
                policy, which is clearly stated on their profile.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">How do I become a photographer on PicXpert?</h3>
              <p className="text-gray-600">
                Simply register for an account, select the photographer role, and complete 
                your profile with your portfolio, pricing, and availability.
              </p>
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

export default Contact;
