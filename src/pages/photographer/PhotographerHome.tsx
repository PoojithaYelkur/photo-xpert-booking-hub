
import { DashboardStats } from "@/components/photographers/DashboardStats";
import { FeedItem } from "@/components/photographers/FeedItem";

const PhotographerHome = () => {
  // Mock data - replace with real data from API
  const feedItems = [
    {
      photographerName: "John Doe",
      photographerAvatar: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb",
      imageUrl: "https://images.unsplash.com/photo-1596470236384-c8b6b84f6975",
      caption: "Wedding photoshoot at sunset 📸 ✨",
      likes: 124,
      comments: 8,
      timestamp: "2 hours ago"
    },
    {
      photographerName: "Jane Smith",
      photographerAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      imageUrl: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67",
      caption: "Portrait session in downtown 🌆",
      likes: 89,
      comments: 5,
      timestamp: "4 hours ago"
    }
  ];

  return (
    <div className="container mx-auto py-8 space-y-8">
      <h1 className="text-3xl font-bold mb-8">Photographer Dashboard</h1>
      
      {/* Stats Section */}
      <section className="mb-12">
        <DashboardStats />
      </section>

      {/* Feed Section */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold mb-6">Photography Feed</h2>
        <div className="space-y-8">
          {feedItems.map((item, index) => (
            <FeedItem key={index} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default PhotographerHome;
