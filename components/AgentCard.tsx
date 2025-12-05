// path: components/AgentCard.tsx
"use client";

import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { useState } from "react";

export default function AgentCard({ name, description }: { name: string; description: string }) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    // Will trigger respective API route
    await fetch(`/api/agents/${name.toLowerCase()}`, { method: "POST" });
    setLoading(false);
  };

  return (
    <Card className="p-8 bg-black border-white/10 hover:border-white/30 transition-all">
      <h3 className="text-2xl font-bold mb-3">{name}</h3>
      <p className="opacity-80 mb-8">{description}</p>
      <Button 
        onClick={handleClick} 
        disabled={loading}
        className="w-full mt-6 bg-white text-black hover:bg-white/90"
      >
        {loading ? "Working..." : `Run ${name}`}
      </Button>
    </Card>
  );
}
