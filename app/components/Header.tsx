import Link from "next/link";
import Image from "next/image";
import navigation from "@/utils/constants/navigation";
import { NavigationMenu } from "radix-ui";
import { twMerge } from "tailwind-merge";

export default function Header() {
  return (
    <nav
      className={twMerge(
        Styles.wrapper,
        "flex justify-between items-center py-5"
      )}
    >
      <div>
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/full_logo_2x.png"
            width={80}
            height={80}
            alt="tech tank full logo"
            className="w-auto h-auto xs:hidden"
          />
          <Image
            src="/fish_logo.svg"
            width={80}
            height={80}
            alt="tech tank fish logo"
            className="w-auto h-auto hidden xs:block"
          />
        </Link>
      </div>
      <NavigationMenu.Root delayDuration={0}>
        <NavigationMenu.List className="flex items-center justify-center flex-wrap gap-4">
          {navigation.top.map((item) =>
            item.type === "item" ? (
              <NavigationMenu.Item key={item.name}>
                <NavigationMenu.Link asChild>
                  <Link href={item.href} className="text-lg font-light">
                    {item.name}
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            ) : (
              <NavigationMenu.Item key={item.name} className="relative">
                <NavigationMenu.Trigger className="text-lg font-light">
                  {item.name}
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="absolute top-full left-0 w-40 data-[state=open]:animate-fade-in bg-white shadow-lg p-4">
                  <NavigationMenu.Sub>
                    <NavigationMenu.List>
                      {item.items.map((subItem) => (
                        <NavigationMenu.Item key={subItem.name}>
                          <NavigationMenu.Link asChild>
                            <Link
                              href={subItem.href}
                              className="text-lg font-light"
                            >
                              {subItem.name}
                            </Link>
                          </NavigationMenu.Link>
                        </NavigationMenu.Item>
                      ))}
                    </NavigationMenu.List>
                  </NavigationMenu.Sub>
                </NavigationMenu.Content>
              </NavigationMenu.Item>
            )
          )}
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </nav>
  );
}

const Styles = {
  wrapper: "max-w-[1440px] w-[90%] m-auto",
};
