import s from './SocialNav.module.css';

const SocialNav = () => {
  return (
      <nav className={s.footer__socialNav}>
        <ul className={s.footer__socialIcons}>
          <li>
            <a href='https://www.facebook.com/' className={s.footer__socialIcon + ' ' + s.facebook}>facebook</a>
          </li>
          <li>
            <a href="https://www.instagram.com/" className={s.footer__socialIcon + ' ' + s.instagram}>instagram</a>
          </li>
          <li>
            <a href="https://www.youtube.com/" className={s.footer__socialIcon + ' ' + s.youtube}>youtube</a>
          </li>
        </ul>
      </nav>
  );
}

export default SocialNav;