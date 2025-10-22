import { HTMLAttributes } from "react";
import { tv } from "tailwind-variants";

import { useSidebar } from "./context/sidebar";

const variant = tv({
  base: "data-[open=open]:w-[276px] w-[100px]",
});

export type SidebarContainerProps = {} & HTMLAttributes<HTMLElement>;

export function Container({
  children,
  className,
  ...rest
}: SidebarContainerProps) {
  const { state } = useSidebar();

  return (
    <aside data-open={state} className={variant({ className })} {...rest}>
      {children}
    </aside>
  );
}
