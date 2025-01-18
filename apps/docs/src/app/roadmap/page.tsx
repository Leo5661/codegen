"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ListTodo, Timer, CheckCircle2, Search } from "lucide-react";
import { Priority, RoadmapItemsList, RoadmapItemType } from "@/src/lib/lists";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { RoadmapColumn } from "@/src/components/roadmap/roadmapColumn";
import { Header } from "@/src/components/header";
import Footer from "@/src/components/footer";

export default function RoadmapPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [priorityFilter, setPriorityFilter] = useState<Priority>("all");

  const filteredItems = useMemo(() => {
    return RoadmapItemsList.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPriority =
        priorityFilter === "all" || item.priority === priorityFilter;
      return matchesSearch && matchesPriority;
    });
  }, [searchQuery, priorityFilter]);

  const groupedItems = useMemo(() => {
    return {
      planned: filteredItems.filter((item) => item.status === "planned"),
      "in-progress": filteredItems.filter(
        (item) => item.status === "in-progress",
      ),
      complete: filteredItems.filter((item) => item.status === "complete"),
    };
  }, [filteredItems]);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-foreground/20 to-neutral-200/0" />

      <main className="relative">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-primary/[0.02]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[40rem] w-[40rem] rounded-full bg-primary/5 blur-3xl" />
        </div>
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

        {/* Content */}
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 text-center mb-12"
          >
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm">
              <Timer className="mr-2 h-3.5 w-3.5 text-primary" />
              <span className="text-primary">Development Roadmap</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/70 to-secondary-foreground">
              Building the Future
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl">
              Track our progress as we build the next generation of web
              development tools.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-4 items-center justify-center mb-12"
          >
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search updates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 w-full"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <Button
                variant={priorityFilter === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setPriorityFilter("all")}
                className="font-mono"
              >
                All
              </Button>
              <Button
                variant={priorityFilter === "high" ? "default" : "outline"}
                size="sm"
                onClick={() => setPriorityFilter("high")}
                className="font-mono"
              >
                High Priority
              </Button>
              <Button
                variant={priorityFilter === "medium" ? "default" : "outline"}
                size="sm"
                onClick={() => setPriorityFilter("medium")}
                className="font-mono"
              >
                Medium Priority
              </Button>
            </div>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <RoadmapColumn
              title="Planned"
              icon={ListTodo}
              iconColor="text-blue-500"
              items={groupedItems.planned}
            />
            <RoadmapColumn
              title="In Progress"
              icon={Timer}
              iconColor="text-purple-500"
              items={groupedItems["in-progress"]}
            />
            <RoadmapColumn
              title="Complete"
              icon={CheckCircle2}
              iconColor="text-green-500"
              items={groupedItems.complete}
            />
          </div>
        </div>
      </main>
      <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-foreground/20 to-neutral-200/0 my-10" />
      <Footer />
    </div>
  );
}
