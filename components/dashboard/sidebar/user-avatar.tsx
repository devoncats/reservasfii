import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserAvatarProps {
  name: string;
  email: string;
  image?: string;
}

export default function UserAvatar({ name, email, image }: UserAvatarProps) {
  return (
    <>
      <Avatar className="h-8 w-8 rounded-lg">
        <AvatarImage src={image || ""} alt={name} />
        <AvatarFallback className="h-8 w-8 rounded-lg">GS</AvatarFallback>
      </Avatar>
      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-medium">{name}</span>
        <span className="truncate text-xs">{email}</span>
      </div>
    </>
  );
}
