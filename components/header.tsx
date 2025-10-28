'use client';

import CardNav from './CardNav';

const Header = () => {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "About Us", ariaLabel: "About Us", href: "/about" },
        // { label: "Company", ariaLabel: "About Company", href: "#company" },
        // { label: "Careers", ariaLabel: "About Careers", href: "#careers" }
      ]
    },
    {
      label: "Services", 
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Design", ariaLabel: "Design Services", href: "/design" },
        { label: "Website", ariaLabel: "Website Services", href: "/web-development" },
        { label: "Marketing", ariaLabel: "Marketing Services", href: "/marketing"}
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37", 
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us", href: "mailto:hello@ggt.com" },
        { label: "Twitter", ariaLabel: "Twitter", href: "https://twitter.com" },
        { label: "LinkedIn", ariaLabel: "LinkedIn", href: "https://linkedin.com" }
      ]
    }
  ];

  return (
    <CardNav
      logo="/ggtlogo.png"
      logoAlt="Company Logo"
      items={items}
      baseColor="#fff"
      menuColor="#fff"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
    />
  );
};

export default Header;