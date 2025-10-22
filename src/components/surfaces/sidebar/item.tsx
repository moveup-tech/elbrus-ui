import { HTMLAttributes, ReactNode } from "react";
import { useSidebar } from "./context/sidebar";

export type ItemProps = {
  icon: ReactNode;
} & HTMLAttributes<HTMLElement>;

export function Item({ icon: Icon, children }: ItemProps) {
  const { state } = useSidebar();

  return (
    <div
      data-open={state}
      className="flex w-full cursor-pointer items-center gap-4 rounded p-4 text-foreground transition-colors hover:bg-foreground/5 data-[open=close]:justify-center dark:text-background dark:hover:bg-background/5"
    >
      {Icon}
      <p data-open={state} className="data-[open=close]:hidden">
        {children}
      </p>
    </div>
  );
}
