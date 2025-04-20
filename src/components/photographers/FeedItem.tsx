
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageSquare, Share } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FeedItemProps {
  photographerName: string;
  photographerAvatar: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
  timestamp: string;
}

export const FeedItem = ({
  photographerName,
  photographerAvatar,
  imageUrl,
  caption,
  likes,
  comments,
  timestamp,
}: FeedItemProps) => {
  return (
    <Card className="max-w-xl w-full mx-auto">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={photographerAvatar} alt={photographerName} />
            <AvatarFallback>{photographerName[0]}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{photographerName}</p>
            <p className="text-xs text-muted-foreground">{timestamp}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <img
          src={imageUrl}
          alt="Portfolio work"
          className="w-full aspect-square object-cover"
        />
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2 pt-4">
        <div className="flex gap-4 w-full">
          <Button variant="ghost" size="sm" className="gap-2">
            <Heart className="h-4 w-4" />
            {likes}
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <MessageSquare className="h-4 w-4" />
            {comments}
          </Button>
          <Button variant="ghost" size="sm" className="gap-2 ml-auto">
            <Share className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-sm">
          <span className="font-semibold">{photographerName}</span> {caption}
        </p>
      </CardFooter>
    </Card>
  );
};
