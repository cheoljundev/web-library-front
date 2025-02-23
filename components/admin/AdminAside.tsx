import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export default function AdminAside() {
  return (
    <nav className="w-full bg-background border-b p-4">
      <NavigationMenu className="w-full max-w-7xl mx-auto justify-start z-0">
        <NavigationMenuList className="flex justify-center space-x-4">
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/admin/books"
              className="p-2 rounded-md hover:bg-primary/10"
            >
              도서 관리
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/admin/books/add"
              className="p-2 rounded-md hover:bg-primary/10"
            >
              도서 추가
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/admin/users"
              className="p-2 rounded-md hover:bg-primary/10"
            >
              유저 관리
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/admin/books/rentals"
              className="p-2 rounded-md hover:bg-primary/10"
            >
              대출 관리
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  )
}