import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './components/Loader/Loader';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';
import { apiRefreshUser } from './redux/auth/operations';
// import css from './App.module.css';
import Layout from './components/Layout/Layout';

// Ліниве завантаження сторінок
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RegistrationPage = lazy(() =>
  import('./pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(state => state.auth.isRefreshing);

  // Автоматичне відновлення авторизації при перезавантаженні сторінки
  useEffect(() => {
    dispatch(apiRefreshUser());
  }, [dispatch]);

  // Відображення завантажувача, поки триває перевірка авторизації
  if (isRefreshing) {
    return <Loader />;
  }

  return (
    <Suspense fallback={<Loader />}>
      {/* Загальне обгортання Layout */}
      <Layout>
        {/* <main className={css.mainWrapper}> */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  element={<RegistrationPage />}
                  redirectTo="/"
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  element={<LoginPage />}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute element={<ContactsPage />} redirectTo="/login" />
              }
            />
          </Routes>
        {/* </main> */}
      </Layout>
    </Suspense>
  );
};

export default App;
