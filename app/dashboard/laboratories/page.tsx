import { getAllLaboratoriesAction } from "@/actions/laboratory.actions";
import { laboratoryColumns } from "@/components/dashboard/laboratories/laboratory-colums";
import { DataTable } from "@/components/ui/data-table";

export default async function DashboardLaboratoriesPage() {
  const { success, error, data } = await getAllLaboratoriesAction();

  if (!success) {
    return (
      <div className="container mx-auto py-10">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={laboratoryColumns} data={data || []} />
    </div>
  );
}
