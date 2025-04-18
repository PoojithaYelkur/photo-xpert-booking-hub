
import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import PhotographerCard from "@/components/photographers/PhotographerCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Slider
} from "@/components/ui/slider";
import { Search, MapPin, SlidersHorizontal, X } from "lucide-react";
import { Photographer } from "@/types";

// Sample photographer data for demonstration
const MOCK_PHOTOGRAPHERS: Photographer[] = [
  {
    _id: "1",
    userId: "user1",
    name: "Alex Johnson",
    bio: "Professional photographer specializing in weddings and portraits.",
    nativePlace: "New York",
    languages: ["English", "Spanish"],
    pricing: {
      hourly: 150,
      fullDay: 1200,
    },
    availability: {
      dates: ["2023-06-15", "2023-06-16", "2023-06-17"],
      locations: ["New York", "New Jersey", "Connecticut"],
    },
    portfolio: [
      {
        _id: "p1",
        photographerId: "1",
        type: "image",
        url: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
        caption: "Mountain landscape",
        createdAt: "2023-01-01",
      },
    ],
    reviews: [],
    rating: 4.8,
    createdAt: "2023-01-01",
  },
  {
    _id: "2",
    userId: "user2",
    name: "Sophia Rodriguez",
    bio: "Fashion and event photographer with 10+ years of experience.",
    nativePlace: "Los Angeles",
    languages: ["English", "French"],
    pricing: {
      hourly: 180,
      fullDay: 1500,
    },
    availability: {
      dates: ["2023-06-20", "2023-06-21", "2023-06-22"],
      locations: ["Los Angeles", "San Diego", "Orange County"],
    },
    portfolio: [
      {
        _id: "p2",
        photographerId: "2",
        type: "image",
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        caption: "Nature shot",
        createdAt: "2023-02-01",
      },
    ],
    reviews: [],
    rating: 4.9,
    createdAt: "2023-01-05",
  },
  {
    _id: "3",
    userId: "user3",
    name: "Michael Chen",
    bio: "Documentary and street photographer passionate about telling stories.",
    nativePlace: "Chicago",
    languages: ["English", "Mandarin"],
    pricing: {
      hourly: 120,
      fullDay: 950,
    },
    availability: {
      dates: ["2023-06-25", "2023-06-26", "2023-06-27"],
      locations: ["Chicago", "Milwaukee", "Indianapolis"],
    },
    portfolio: [
      {
        _id: "p3",
        photographerId: "3",
        type: "image",
        url: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
        caption: "Street photography",
        createdAt: "2023-03-01",
      },
    ],
    reviews: [],
    rating: 4.6,
    createdAt: "2023-01-10",
  },
];

const UserHome = () => {
  const [photographers, setPhotographers] = useState<Photographer[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [eventType, setEventType] = useState("");
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  // Fetch photographers (simulated)
  useEffect(() => {
    // In a real app, this would be an API call
    setTimeout(() => {
      setPhotographers(MOCK_PHOTOGRAPHERS);
      setLoading(false);
    }, 1000);
  }, []);

  // Filter photographers based on search criteria
  const filteredPhotographers = photographers.filter((photographer) => {
    // Search term filter (name or bio)
    const matchesSearch =
      searchTerm === "" ||
      photographer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      photographer.bio.toLowerCase().includes(searchTerm.toLowerCase());

    // Location filter
    const matchesLocation =
      location === "" ||
      photographer.nativePlace.toLowerCase().includes(location.toLowerCase()) ||
      photographer.availability.locations.some((loc) =>
        loc.toLowerCase().includes(location.toLowerCase())
      );

    // Price range filter
    const matchesPrice =
      photographer.pricing.hourly >= priceRange[0] &&
      photographer.pricing.hourly <= priceRange[1];

    // Event type filter (this would be more complex in a real app)
    const matchesEventType =
      eventType === "" || true; // Placeholder as we don't have event types in our mock data

    // Language filter
    const matchesLanguage =
      selectedLanguages.length === 0 ||
      selectedLanguages.every((lang) =>
        photographer.languages.includes(lang)
      );

    return (
      matchesSearch &&
      matchesLocation &&
      matchesPrice &&
      matchesEventType &&
      matchesLanguage
    );
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="container py-8">
        {/* Search Section */}
        <section className="mb-10">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h1 className="text-2xl font-bold mb-6">Find Your Perfect Photographer</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search photographers, services..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Location"
                  className="pl-10"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              
              <div className="flex gap-2">
                <Button 
                  onClick={() => setShowFilters(!showFilters)}
                  variant="outline"
                  className="flex-shrink-0"
                >
                  <SlidersHorizontal className="h-5 w-5 mr-2" />
                  Filters
                </Button>
                <Button className="flex-grow bg-picxpert-primary hover:bg-picxpert-secondary">
                  <Search className="h-5 w-5 mr-2" />
                  Search
                </Button>
              </div>
            </div>
            
            {/* Advanced Filters */}
            {showFilters && (
              <div className="mt-4 pt-4 border-t grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Event Type
                  </label>
                  <Select value={eventType} onValueChange={setEventType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wedding">Wedding</SelectItem>
                      <SelectItem value="portrait">Portrait</SelectItem>
                      <SelectItem value="event">Event</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                      <SelectItem value="family">Family</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Price Range ($ per hour)
                  </label>
                  <div className="px-3">
                    <Slider
                      value={priceRange}
                      min={0}
                      max={500}
                      step={10}
                      onValueChange={setPriceRange}
                    />
                    <div className="flex justify-between mt-2 text-sm text-gray-500">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Languages
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["English", "Spanish", "French", "Mandarin", "Hindi"].map(
                      (lang) => (
                        <Button
                          key={lang}
                          variant={
                            selectedLanguages.includes(lang)
                              ? "default"
                              : "outline"
                          }
                          size="sm"
                          onClick={() => {
                            if (selectedLanguages.includes(lang)) {
                              setSelectedLanguages(
                                selectedLanguages.filter((l) => l !== lang)
                              );
                            } else {
                              setSelectedLanguages([...selectedLanguages, lang]);
                            }
                          }}
                          className={
                            selectedLanguages.includes(lang)
                              ? "bg-picxpert-primary hover:bg-picxpert-secondary"
                              : ""
                          }
                        >
                          {lang}
                          {selectedLanguages.includes(lang) && (
                            <X className="ml-1 h-3 w-3" />
                          )}
                        </Button>
                      )
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Results Section */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">
              {loading
                ? "Loading photographers..."
                : `${filteredPhotographers.length} Photographers Found`}
            </h2>
            <Select defaultValue="recommended">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recommended">Recommended</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Top Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-100 animate-pulse rounded-lg h-96"
                ></div>
              ))}
            </div>
          ) : filteredPhotographers.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-lg font-semibold mb-2">No photographers found</h3>
              <p className="text-gray-500">
                Try adjusting your search criteria to find more results.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPhotographers.map((photographer) => (
                <PhotographerCard
                  key={photographer._id}
                  photographer={photographer}
                />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default UserHome;
