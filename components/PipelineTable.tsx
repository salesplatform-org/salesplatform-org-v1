// path: components/PipelineTable.tsx
import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

export default function PipelineTable() {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    const supabase = createClient();

    const subscription = supabase
      .channel('public:deals')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'deals' }, payload => {
        setDeals(current => [payload.new, ...current]);
      })
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Company</TableHead>
          <TableHead>Stage</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Score</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {/* Real data will flow in via Realtime */}
        <TableRow>
          <TableCell colSpan={4} className="text-center opacity-50">
            Your deals will appear here in real time
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
