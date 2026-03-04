import { MobileNav } from "./MobileNav";
import { DesktopNav } from "./DesktopNav";

export default function Header() {
  return (
    <header className="navbar">
      <MobileNav />
      <DesktopNav />
    </header>
  );
}
