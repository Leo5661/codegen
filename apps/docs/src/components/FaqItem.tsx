import { Minus, Plus } from "lucide-react";
import { FAQ_Item } from "../lib/lists";
import { cn } from "../lib/utils";

export function FAQItem({
  item,
  isOpen,
  toggleOpen,
}: {
  item: FAQ_Item;
  isOpen: boolean;
  toggleOpen: () => void;
}) {
  return (
    <div className="border-b border-foreground/10 w-full px-10 md:px-0">
      <div
        className="flex justify-between items-center w-full py-4 text-left cursor-pointer"
        onClick={toggleOpen}
      >
        <span className="text-sm font-medium">{item.question}</span>
        {isOpen ? (
          <Minus className="h-5 w-5 text-primary" />
        ) : (
          <Plus className="h-5 w-5 text-primary" />
        )}
      </div>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <p className="pb-4 text-muted-foreground text-sm">{item.answer}</p>
      </div>
    </div>
  );
}
