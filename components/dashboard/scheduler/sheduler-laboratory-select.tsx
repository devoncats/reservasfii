import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCalendar } from "@/hooks/use-calendar";

export function SchedulerLaboratorySelect() {
  const { laboratories, selectedLaboratoryId, setSelectedLaboratoryId } =
    useCalendar();

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
