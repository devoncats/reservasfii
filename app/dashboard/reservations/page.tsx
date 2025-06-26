import { ReservationDataTable } from "@/components/dashboard/reservations/reservation-data-table";
import { ReservationsHeader } from "@/components/dashboard/reservations/reservations-header";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await auth();

  if (!session) {
    redirect("/signin");
  }

  return (
    <section className="flex flex-col gap-8 p-4">
      <ReservationsHeader />
      <ReservationDataTable />
    </section>
  );
}
