import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { RoadmapItemType } from "../../lib/lists";
import { cn } from "../../lib/utils";
import { Badge } from "../ui/badge";

interface RoadmapItemProps {
  item: RoadmapItemType;
  index: number;
}

export function RoadmapItem({ item, index }: RoadmapItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="group hover:border-primary transition-colors h-full">
        <CardContent className="p-4 flex flex-col h-full">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-medium font-mono text-sm sm:text-base">
              {item.title}
            </h3>
            <Badge
              variant="secondary"
              className={cn(
                "text-xs font-mono ml-2",
                item.priority === "high" && "bg-blue-500/10 text-blue-500",
                item.priority === "medium" &&
                  "bg-orange-500/10 text-orange-500",
              )}
            >
              {item.priority}
            </Badge>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground mb-4 flex-grow">
            {item.description}
          </p>
          <div className="text-xs sm:text-sm text-muted-foreground flex items-center justify-between">
            <span className="font-mono">
              {item.date.type === "expected" ? "Expected: " : "Completed: "}
              <span
                className={cn(
                  item.date.type === "completed" && "text-green-500",
                )}
              >
                {item.date.value}
              </span>
            </span>
            <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
