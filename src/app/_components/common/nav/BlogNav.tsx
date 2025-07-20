import Image from "next/image";
import Link from "next/link";

export default function BlogNav() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <header className="border-text-primary sticky top-0 z-50 flex w-full items-center justify-between border-b-[1px] bg-white">
      <div className="text-text-primary mx-auto flex w-full max-w-6xl items-center justify-between p-4 px-8">
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            className="p-2"
            width={104}
            height={52}
            alt="AD AVL Logo"
            title="AD AVL Logo"
          />
        </Link>
        <div className="hidden space-x-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              title={item.label}
              className="text-text-primary text-sm underline transition-colors duration-200 hover:text-blue-500"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="lg:hidden">
          <Link
            href="/blog"
            className="text-text-primary text-sm underline transition-colors duration-200 hover:text-blue-500"
          >
            Blog
          </Link>
        </div>
      </div>
    </header>
  );
}
