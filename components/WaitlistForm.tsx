// path: components/WaitlistForm.tsx
"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In production this would hit Supabase waitlist table
    setSubmitted(true);
  };

  return (
    <div className="w-full max-w-md mx-auto mt-12">
      {submitted ? (
        <p className="text-xl">You're on the list. We'll be in touch soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Get early access</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-black border-white/10 text-white placeholder:text-white/40"
            />
          </div>
          <Button type="submit" className="w-full bg-white text-black hover:bg-white/90">
            Join Waitlist
          </Button>
        </form>
      )}
    </div>
  );
}
