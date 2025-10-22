'use client';

import CardNav from './CardNav';

const Header = () => {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company", href: "#company" },
        { label: "Careers", ariaLabel: "About Careers", href: "#careers" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects", href: "#featured" },
        { label: "Case Studies", ariaLabel: "Project Case Studies", href: "#case-studies" }
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