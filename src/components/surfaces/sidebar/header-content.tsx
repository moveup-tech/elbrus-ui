import { PanelLeftOpen, PanelRightOpen } from "lucide-react";
import { useSidebar } from "./context/sidebar";

export function HeaderContent() {
  const { state, toggle } = useSidebar();

  return (
    <div
      data-open={state}
      className="mb-8 mt-4 flex items-center justify-center data-[open=open]:justify-between"
    >
      <h3
        data-open={state}
        className="text-lg font-semibold text-foreground data-[open=close]:hidden dark:text-background"
      >
        Menu
      </h3>
      <button onClick={toggle} className="cursor-pointer">
        {state ? (
          <PanelRightOpen
            size={24}
            className="text-foreground dark:text-background"
          />
        ) : (
          <PanelLeftOpen
            size={24}
            className="text-foreground dark:text-background"
          />
        )}
      </button>
    </div>
  );
}
