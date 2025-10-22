import { tv } from "tailwind-variants";
import { VariantProps } from "tailwind-variants";
import { forwardRef, InputHTMLAttributes, useState } from "react";
import { InputMask, InputMaskProps } from "@react-input/mask";
import { Eye, EyeClosed } from "lucide-react";

const variants = tv({
  base: "w-full bg-zinc-50 p-2 rounded border-2 border-zinc-200 ",
  variants: {
    variant: {
      default: "focus-within:border-primary-main",
      password:
        "flex border-2 border-zinc-200 focus-within:border-primary-main",
    },
    hasError: {
      true: "border-2 border-rose-500 focus-within:border-rose-500",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
} & VariantProps<typeof variants> &
  InputMaskProps;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ mask, error, className, type, variant, ...rest }, ref) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => type === "password" && setIsOpen(!isOpen);

    return (
      <>
        <div className={variants({ className, hasError: !!error, variant })}>
          {mask ? (
            <InputMask
              ref={ref}
              {...rest}
              mask={mask}
              replacement={{
                _: /\d/,
              }}
              type={isOpen ? type : "text"}
              className="w-full bg-transparent outline-none"
            />
          ) : (
            <input
              ref={ref}
              {...rest}
              type={isOpen ? type : "text"}
              className="w-full bg-transparent outline-none"
            />
          )}
          {type === "password" && (
            <button onClick={toggle}>{isOpen ? <EyeClosed /> : <Eye />}</button>
          )}
        </div>

        {error && <p className="mt-1 text-xs text-rose-600">{error}</p>}
      </>
    );
  }
);

Input.displayName = "Input";
