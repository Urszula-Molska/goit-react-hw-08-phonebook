import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Section } from 'components/Section/Section';

export const Home = () => {
  /*useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetchTrending();
      setMovies(response.results);
    };
    fetchMovies();
  }, []);*/

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
