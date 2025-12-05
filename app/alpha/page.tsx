// path: app/alpha/page.tsx
import AgentCard from "@/components/AgentCard";
import PipelineTable from "@/components/PipelineTable";

const agents = [
  { name: "Prospect", description: "Finds & books perfect leads automatically" },
  { name: "Qualify", description: "Scores every opportunity with MEDDPICC" },
  { name: "Close", description: "Generates proposals & collects 1% on closed-won" },
  { name: "Nurture", description: "Post-sale expansion & customer success engine" },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">salesplatform.org alpha</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {agents.map((agent) => (
            <AgentCard key={agent.name} {...agent} />
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-6">Live Pipeline</h2>
        <PipelineTable />
      </div>
    </div>
  );
}
