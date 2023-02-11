import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Section } from 'components/Section/Section';

const Home = () => {
  return (
    <>
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
