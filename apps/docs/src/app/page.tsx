import { Card } from "@codegen/ui/components/card";

export default function Page(): JSX.Element {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      Hello
      <Card title="With Tailwind" href="https://github.com/with-tailwindcss">
        Hello this is card
      </Card>
    </main>
  );
}
