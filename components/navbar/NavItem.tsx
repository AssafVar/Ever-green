import Link from "next/link";
import React from "react";

const NavItem = ({
  text,
  href,
  setUrl
}: {
  text: string;
  href: string;
  setUrl: any;
}) => {
  return (
    <Link href={href} onClick={()=>setUrl(text)}>
      {text}
    </Link>
  );
};

export default NavItem;
