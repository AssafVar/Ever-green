import Link from "next/link";
import React from "react";

const NavItem = ({
  text,
  href,
}: {
  text: string;
  href: string;
}) => {
  return (
    <Link href={href} className="p-4">
      {text}
    </Link>
  );
};

export default NavItem;
