import NavigationItem from "./navigation-item";

export default function Navigation() {
  return (
    <div className=" fixed right-24 top-7">
      <div className="flex items-center gap-1 text-[17px]">
        {links.map((link, i) => {
          const { title, href } = link;
          return <NavigationItem key={i} i={i} title={title} href={href} />;
        })}
      </div>
    </div>
  );
}
const links = [
  {
    title: "Index",
    href: "/",
  },
  {
    title: "Projects",
    href: "/",
  },

  {
    title: "Contact",
    href: "/",
  },
];
