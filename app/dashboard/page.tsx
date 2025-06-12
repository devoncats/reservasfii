import Scheduler from "@/components/dashboard/scheduler/scheduler";
import { SchedulerSidebar } from "@/components/dashboard/scheduler/scheduler-sidebar";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/signin");
  }

  return (
    <div className="flex min-h-0 flex-1">
      <SchedulerSidebar />
      <Scheduler />
    </div>
  );
}
