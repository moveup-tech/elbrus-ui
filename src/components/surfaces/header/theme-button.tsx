import { Moon, Sun } from "lucide-react";

export function ThemeToggleButton() {
  return (
    <button className="relative cursor-pointer rounded border border-foreground/35 p-2 dark:border-background/35">
      {true ? (
        <Sun className="text-foreground/35 dark:text-background" size={18} />
      ) : (
        <Moon className="text-foreground/35 dark:text-background" size={18} />
      )}
    </button>
  );
}
