import { Typography } from "antd";
import Link from "next/link";

interface IMenuItems {
  id: number;
  name: string;
  link: string;
}

const Header = () => {
  const menuItems: IMenuItems[] = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "About",
      link: "/about",
    },
    {
      id: 3,
      name: "Dental Services",
      link: "/dental-services",
    },
    {
      id: 4,
      name: "Reviews",
      link: "/reviews",
    },
    {
      id: 5,
      name: "Blog",
      link: "/blog",
    },
    {
      id: 6,
      name: "Contact Us",
      link: "/contact-us",
    },
  ];
  return (
    <div className="header-container">
      <div className="container mx-auto flex justify-between items-center p-5">
        <Typography.Title className="uppercase !font-bold !text-[30px] !leading-3 !mb-0 !text-[#203047]">
          Doctors
        </Typography.Title>

        <ul className="flex items-center gap-12">
          {menuItems?.length > 0 &&
            menuItems.map((menuItem) => (
              <li key={menuItem?.id} className={`font-semibold text-[#fff]`}>
                <Link href={menuItem?.link}>{menuItem?.name}</Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
