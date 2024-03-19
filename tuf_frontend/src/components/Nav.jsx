import classes from 'styles/components/nav.module.css';
import LanguagesDropdown from 'widgets/LanguagesDropdown';
import Logo from 'widgets/Logo';

const Navigation = ({language, onChange, setUsername, isEditor = true}) => {
    return <nav className={classes.navigation}>
        <Logo/>
        {isEditor && <div className={classes.navItems}>
            <input className={classes.navInput} placeholder="Username" onChange={(event) => setUsername(event.target.value)}/>
            <LanguagesDropdown onSelectChange={onChange} language={language}/>
        </div>}
    </nav>
};

export default Navigation;
