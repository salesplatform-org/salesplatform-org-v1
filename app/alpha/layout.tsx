import { createServerClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AlphaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerClient();
  const { data } = await supabase.auth.getSession();

  if (!data.session) {
    redirect("/alpha/signin");
  }

  return <>{children}</>;
}
