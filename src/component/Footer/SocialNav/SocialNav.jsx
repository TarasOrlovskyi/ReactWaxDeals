import s from './SocialNav.module.css';

const SocialNav = () => {
  return (
    <nav className={s.footer__socialNav}>
      <ul className={s.footer__socialIcons}>
        <li>
          <a href='#' className={s.footer__socialIcon + ' ' + s.facebook}/>
        </li>
        <li>
          <a href="#" className={s.footer__socialIcon + ' ' + s.instagram}/>
        </li>
        <li>
          <a href="#" className={s.footer__socialIcon + ' ' + s.youtube}/>
        </li>
      </ul>
    </nav>
  );
}

export default SocialNav;