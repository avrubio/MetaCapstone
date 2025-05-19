import { navLinks } from './Nav/Nav';

const Footer = () => {
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

      <ul>
        <li>Contact</li>
        <li>123 Wallaby Way, Syndey AUS</li>
        <li>123-445-7788</li>
        <li>LittleLemon@gmail.com</li>
      </ul>
      <ul>
        <li>Ig</li>
        <li>FB</li>
        <li>Linkeidn</li>
        <li>LittleLemon@gmail.com</li>
      </ul>
    </>
  );
};

export default Footer;
