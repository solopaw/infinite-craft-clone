import cx from "classnames";
export enum ButtonVariant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
}

export enum ButtonSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

export type ButtonProps = {
  type?: "submit" | "reset" | "button";
  children?: React.ReactNode;
  variant: ButtonVariant;
  size?: ButtonSize;
  onClick?: (e:React.MouseEvent<HTMLButtonElement,MouseEvent>) => void;
};
const shared =
  "rounded-sm text-white tracking-tighter transition-color duration-150";

const small = "p-1 text-sm font-medium gap-2 border-1";
const medium = "px-3 py-1.5 font-semibold border-2";
const large = "px-4 py-2 text-lg font-semibold border-4";

const primary =
  "bg-emerald-700 border-transparent text-white hover:bg-emerald-600";

const secondary =
  "border border-indigo-700 text-indigo-700 bg-indigo-300 hover:bg-indigo-200";

const tertiary =
  "text-indigo-700 border-transparent bg-indigo-500 hover:bg-indigo-600 hover:text-white";

const getSizeClass = (size: ButtonSize) => {
  if (size === ButtonSize.SMALL) return small;
  if (size === ButtonSize.MEDIUM) return medium;
  if (size === ButtonSize.LARGE) return large;
};

const getVariantClass = (variant: ButtonVariant) => {
  if (variant === ButtonVariant.PRIMARY) return primary;
  if (variant === ButtonVariant.SECONDARY) return secondary;
  if (variant === ButtonVariant.TERTIARY) return tertiary;
};
// Button.tsx


const Button = ({
  type = "submit",
  children,
  size = ButtonSize.MEDIUM,
  variant = ButtonVariant.PRIMARY,
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        if (onClick) onClick(e);
      }}
      className={cx(shared, getSizeClass(size), getVariantClass(variant))}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;