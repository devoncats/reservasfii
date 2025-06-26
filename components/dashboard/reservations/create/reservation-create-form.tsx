import { Form } from "@/components/ui/form";
import {
  CreateReservationSchema,
  createReservationSchema,
} from "@/schemas/reservation.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function ReservationCreateForm() {
  const form = useForm<CreateReservationSchema>({
    resolver: zodResolver(createReservationSchema),
    defaultValues: {
      group: "",
      date: new Date(),
      start: "07:00",
      end: "07:45",
      comment: "",
      laboratoryId: "",
      responsibleId: "",
      facultyId: "",
      majorId: "",
      courseId: "",
    },
  });

  return (
    <Form {...form}>
      <form></form>
    </Form>
  );
}
