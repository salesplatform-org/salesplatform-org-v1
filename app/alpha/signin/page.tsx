"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleSignUp = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/alpha`,
      },
    });
    if (!error) {
      alert("Check your email for confirmation link");
    }
    setLoading(false);
  };

  const handleSignIn = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (!error) {
      router.push("/alpha");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-8">
      <div className="max-w-md w-full space-y-8">
        <h1 className="text-3xl font-bold text-center">Alpha Access</h1>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-black border-white/10"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-black border-white/10"
            />
          </div>
          <div className="space-y-2">
            <Button onClick={handleSignUp} className="w-full" disabled={loading}>
              Sign Up
            </Button>
            <Button onClick={handleSignIn} className="w-full" variant="ghost" disabled={loading}>
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
