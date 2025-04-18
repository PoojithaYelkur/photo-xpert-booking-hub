
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin } from "lucide-react";
import { Photographer } from "@/types";

interface PhotographerCardProps {
  photographer: Photographer;
}

const PhotographerCard = ({ photographer }: PhotographerCardProps) => {
  // Function to display the star rating
  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < Math.floor(rating)
              ? "text-yellow-400 fill-yellow-400"
              : "text-gray-300"
          }`}
        />
      ));
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
        {photographer.portfolio && photographer.portfolio.length > 0 ? (
          <img
            src={photographer.portfolio[0].url}
            alt={`${photographer.name}'s portfolio`}
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
            alt="Default portfolio"
            className="w-full h-full object-cover opacity-70"
          />
        )}
      </div>
      
      <CardContent className="pt-4">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-lg font-semibold">{photographer.name}</h3>
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <MapPin className="h-3.5 w-3.5" />
              <span>{photographer.nativePlace}</span>
            </div>
          </div>
          <div className="flex gap-1">{renderStars(photographer.rating)}</div>
        </div>
        
        <div className="flex flex-wrap gap-1.5 mb-4">
          {photographer.languages.map((lang, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {lang}
            </Badge>
          ))}
        </div>
        
        <div className="flex justify-between items-center text-sm">
          <div>
            <span className="text-gray-500">Starting from</span>
            <p className="text-base font-semibold text-picxpert-primary">
              ${photographer.pricing.hourly}/hr
            </p>
          </div>
          <div>
            <span className="text-gray-500">Full day</span>
            <p className="text-base font-semibold">
              ${photographer.pricing.fullDay}
            </p>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Link to={`/user/photographer/${photographer._id}`} className="w-full">
          <Button className="w-full">View Profile</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PhotographerCard;
