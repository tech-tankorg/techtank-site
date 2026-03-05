import { MobileNav } from "./MobileNav";
import { DesktopNav } from "./DesktopNav";

export default function Header() {
  return (
    <header className="sticky top-0 z-20">
      <MobileNav />
      <DesktopNav />
    </header>
  );
}
