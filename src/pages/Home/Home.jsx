import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Section } from 'components/Section/Section';
import { Navigation } from '../../components/Navigation/Navigation.jsx';

const Home = () => {
  return (
    <>
      <Navigation />
      <main>
        <Section title="Phonebook" />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
export default Home;
