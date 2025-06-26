import { ReservationCreateHeader } from "@/components/dashboard/reservations/create/reservation-create-header";

export default function page() {
  return (
    <section className="flex flex-col gap-8 p-4">
      <ReservationCreateHeader />

      <div>{/* Fomulario */} </div>
    </section>
  );
}
