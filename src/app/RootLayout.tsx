import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { inter, SideMenu } from "./layout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="border-b">
          <div className="flex h-16 items-center px-4 container mx-auto">
            <h1>Mohsin's Photos</h1>
            <div className="ml-auto flex items-center space-x-4">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>

        <div className="flex">
          <SideMenu />

          <div className="w-full px-4 pt-8">{children}</div>
        </div>
      </body>
    </html>
  );
}
