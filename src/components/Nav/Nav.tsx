interface Link {
  label: string;
  url: string;
}

const navLinks: Link[] = [
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
    <>
      <img src="" />
      <ul>
        {navLinks.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Nav;
