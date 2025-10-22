import { Bell } from "lucide-react";

export function NotificationButton() {
  return (
    <button className="relative cursor-pointer rounded border border-foreground/35 p-2 dark:border-background/35">
      <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-secondary-main" />
      <Bell className="text-foreground/35 dark:text-background" size={18} />
    </button>
  );
}
