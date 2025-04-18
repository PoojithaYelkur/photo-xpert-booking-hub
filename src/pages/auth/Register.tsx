
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Camera } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters long",
  }),
  confirmPassword: z.string().min(6),
  role: z.enum(["user", "photographer"]),
  nativePlace: z.string().optional(),
  languages: z.string().optional(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
}).refine(
  (data) => {
    // If role is photographer, nativePlace and languages are required
    if (data.role === "photographer") {
      return !!data.nativePlace && !!data.languages;
    }
    return true;
  },
  {
    message: "Required for photographers",
    path: ["nativePlace", "languages"],
  }
);

type FormData = z.infer<typeof formSchema>;

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "user",
      nativePlace: "",
      languages: "",
    },
    mode: "onChange",
  });

  const watchRole = form.watch("role");

  const onSubmit = async (data: FormData) => {
    try {
      setIsLoading(true);
      await register(data);
      
      toast({
        title: "Registration successful",
        description: "Welcome to PicXpert!",
      });
      
      navigate(data.role === "photographer" ? "/photographer/create-profile" : "/user/home");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Registration failed",
        description: "An error occurred during registration. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-picxpert-light">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <div className="flex justify-center">
            <Camera className="h-12 w-12 text-picxpert-primary" />
          </div>
          <h2 className="mt-4 text-3xl font-bold text-picxpert-DEFAULT">
            Create an account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Join PicXpert today to start capturing and sharing moments
          </p>
        </div>

        <div className="mt-6 bg-white p-6 shadow-md rounded-lg">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="John Doe" 
                        {...field} 
                        disabled={isLoading}
                      />
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
                      <Input 
                        placeholder="example@email.com" 
                        {...field} 
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input 
                          type="password" 
                          placeholder="••••••••" 
                          {...field} 
                          disabled={isLoading}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input 
                          type="password" 
                          placeholder="••••••••" 
                          {...field} 
                          disabled={isLoading}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>I am a</FormLabel>
                    <Select 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                      disabled={isLoading}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a role" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="user">User looking for photographers</SelectItem>
                        <SelectItem value="photographer">Professional Photographer</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Select your role on the platform
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {watchRole === "photographer" && (
                <>
                  <FormField
                    control={form.control}
                    name="nativePlace"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Native Place</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="e.g., New York" 
                            {...field} 
                            disabled={isLoading}
                          />
                        </FormControl>
                        <FormDescription>
                          Your home city or base location
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="languages"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Languages</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="e.g., English, Spanish" 
                            {...field} 
                            disabled={isLoading}
                          />
                        </FormControl>
                        <FormDescription>
                          Languages you speak (comma separated)
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              <Button 
                type="submit" 
                className="w-full bg-picxpert-primary hover:bg-picxpert-secondary"
                disabled={isLoading}
              >
                {isLoading ? "Creating account..." : "Create account"}
              </Button>
            </form>
          </Form>

          <div className="mt-6 text-center text-sm">
            <p>
              Already have an account?{" "}
              <Link 
                to="/login" 
                className="font-medium text-picxpert-primary hover:text-picxpert-secondary"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
