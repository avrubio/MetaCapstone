interface Link {
  label: string;
  url: string;
}

export const navLinks: Link[] = [
  {
    label: "home",
    url: "/",
  },
  {
    label: "about",
    url: "/about",
  },
  {
    label: "menu",
    url: "/menu",
  },
  {
    label: "reservations",
    url: "/reservation",
  },
  {
    label: "order online",
    url: "/order-online",
  },
  {
    label: "login",
    url: "/login",
  },
];

const Nav = () => {
  return (
    <nav className="navigationBar">
      <img src="src/assets/LittleLemonLogo.jpg" className="logo" />
      <ul>
        {navLinks.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
