import {Link, NavLink} from 'react-router-dom';
import LogoS from '../../assets/images/logo-k.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import {faCode, faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons';
import {faDiscord, faGithub, faLinkedin, faTelegram} from '@fortawesome/free-brands-svg-icons';
import './index.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo"/>
            <img className="sub-logo" src={LogoSubtitle} alt="kostiatnyn"/>

        </Link>
        <nav>
            <NavLink excact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color = "#4d4d4e" />
            </NavLink>
            <NavLink excact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color = "#4d4d4e" />
            </NavLink>
            <NavLink excact="true" activeclassname="active" className="projects-link" to="/projects">
                <FontAwesomeIcon icon={faCode} color = "#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='link'>
                    <FontAwesomeIcon icon={faLinkedin} color="4d4d4e" />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='link'>
                    <FontAwesomeIcon icon={faTelegram} color="4d4d4e" />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='link'>
                    <FontAwesomeIcon icon={faGithub} color="4d4d4e" />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='link'>
                    <FontAwesomeIcon icon={faDiscord} color="4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar