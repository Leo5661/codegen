import { ListTodo, Timer, CheckCircle2 } from "lucide-react";
import { Badge } from "../ui/badge";
import { RoadmapItem } from "./roadmapItem";
import { RoadmapItemType } from "@/src/lib/lists";
import { cn } from "@/src/lib/utils";

interface RoadmapColumnProps {
  title: string;
  icon: React.ElementType;
  iconColor: string;
  items: RoadmapItemType[];
}

export function RoadmapColumn({
  title,
  icon: Icon,
  iconColor,
  items,
}: RoadmapColumnProps) {
  return (
    <div className="space-y-4 w-full">
      <div className="flex items-center gap-2">
        <Icon className={cn("h-5 w-5", iconColor)} />
        <h2 className="font-semibold text-lg font-mono">{title}</h2>
        <Badge variant="outline" className="ml-2 font-mono">
          {items.length}
        </Badge>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
        {items.map((item, index) => (
          <RoadmapItem key={item.title} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}
