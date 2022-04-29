import classes from 'dom/lib/classes';
import NavLinks from './NavLinks'

const MobileNavigation = () => {
    return ( 
        <nav className={classes.MobileNavigation}>
        <NavLinks />
        </nav>
     );
}

export default MobileNavigation;