// path: lib/supabase/client.ts
import { createClient } from "@supabase/ssr";

export const createClient = () => createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
