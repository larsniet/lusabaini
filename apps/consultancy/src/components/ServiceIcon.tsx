import {
  Plane,
  Home,
  FileText,
  Users,
  Briefcase,
  Map,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  passport: Plane,
  home: Home,
  file: FileText,
  users: Users,
  briefcase: Briefcase,
  map: Map,
};

export function ServiceIcon({
  icon,
  className,
}: {
  icon?: string;
  className?: string;
}) {
  const Icon = iconMap[icon ?? ""] ?? FileText;
  return <Icon className={className ?? "h-5 w-5"} aria-hidden />;
}
