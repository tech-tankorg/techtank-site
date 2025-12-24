import Link from "next/link";
import Image from "next/image";
import navigation from "@/utils/constants/navigation";
import { NavigationMenu } from "radix-ui";
import { twMerge } from "tailwind-merge";

export function DesktopNav() {
  return (
    <nav
      className={twMerge(
        "wrapper",
        "flex justify-between items-center py-5",
        "hidden sm:flex"
      )}
    >
      <div>
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/full_logo_2x.png"
            width={80}
            height={80}
            alt="tech tank full logo"
            className="w-auto h-auto"
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
