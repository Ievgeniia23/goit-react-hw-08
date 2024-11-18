// App.jsx
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation'; 
import './App.css';
import css from './App.module.css';
import Loader from './components/Loader/Loader';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
// const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
// const MovieDetailsPage = lazy(() =>
//   import('./pages/MovieDetailsPage/MovieDetailsPage')
// );
// const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'));
// const MovieReviews = lazy(() =>
//   import('./components/MovieReviews/MovieReviews')
// );
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <div>
        <Navigation />
        <main className={css.mainWrapper}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            
            
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </Suspense>
  );
}

export default App;
