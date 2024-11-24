import css from './HomePage.module.css'

const HomePage = () => {
  return (
    <div className={css.homePageWrap}>
      
        <h1>Welcome to the Contacts App!</h1>
        <p>
          This app allows you to manage your personal contacts easily and
          securely
        </p>
      
    </div>
  );
}

export default HomePage;