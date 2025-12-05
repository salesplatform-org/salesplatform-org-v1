// path: app/page.tsx
import WaitlistForm from "@/components/WaitlistForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-8">
      <div className="max-w-2xl text-center space-y-12">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">
          salesplatform.org
        </h1>
        <p className="text-2xl opacity-90">
          The sales platform for organizations.
        </p>
        <p className="text-xl opacity-80 max-w-lg mx-auto">
          We guarantee your sales increase or no charge to you.
        </p>
        <WaitlistForm />
      </div>
    </main>
  );
}
