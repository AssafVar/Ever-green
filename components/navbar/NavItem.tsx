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
    <Link href={href} >
      {text}
    </Link>
  );
};

export default NavItem;
