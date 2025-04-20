
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Calendar, MessageSquare, Users } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
}

const StatsCard = ({ title, value, icon }: StatsCardProps) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      {icon}
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
    </CardContent>
  </Card>
);

export const DashboardStats = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title="Total Bookings"
        value="28"
        icon={<Calendar className="h-4 w-4 text-muted-foreground" />}
      />
      <StatsCard
        title="Rating"
        value="4.8"
        icon={<Star className="h-4 w-4 text-muted-foreground" />}
      />
      <StatsCard
        title="Messages"
        value="12"
        icon={<MessageSquare className="h-4 w-4 text-muted-foreground" />}
      />
      <StatsCard
        title="Profile Views"
        value="2,464"
        icon={<Users className="h-4 w-4 text-muted-foreground" />}
      />
    </div>
  );
};
