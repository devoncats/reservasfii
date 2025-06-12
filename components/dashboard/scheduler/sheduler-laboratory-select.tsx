import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useScheduler } from "@/hooks/use-scheduler";

export function SchedulerLaboratorySelect() {
  const { laboratories, selectedLaboratoryId, setSelectedLaboratoryId } =
    useScheduler();

  return (
    <Select
      value={selectedLaboratoryId}
      onValueChange={setSelectedLaboratoryId}
    >
      <SelectTrigger className="w-[360px]">
        <SelectValue placeholder="Seleccione el laboratorio" />
      </SelectTrigger>
      <SelectContent>
        {laboratories.map((laboratory) => (
          <SelectItem key={laboratory.id} value={laboratory.id || ""}>
            {laboratory.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
