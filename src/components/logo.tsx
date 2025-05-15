import DarkLogo from "@/assets/logos/dark.svg";
import MLogo from "@/assets/logos/main.svg";

export function Logo() {
  return (
    <div className="relative h-8 max-w-[10.847rem]">
      <MLogo fill="" className="dark:hidden" role="presentation" />
      <DarkLogo fill="" className="hidden dark:block" role="presentation" />
    </div>
  );
}
