import classes from 'styles/widgets/logo.module.css';

const Logo = () => {
  return (
    <div className={classes.logo}>
      <img alt="TakeUForward Logo" className={classes.logo_img} src="/images/logo.png"/>
      <h1>
        <a href="/" rel="home">
          takeUforward
        </a>
      </h1>
    </div>
  );
};

export default Logo;