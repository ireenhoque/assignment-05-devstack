import { Suspense } from 'react';
import Banner from './component/Banner';
import DevStack from './component/devstack/DevStack';
import Nav from './component/Nav';
import type { IDevStack } from './types/devStackType';
import Footer from './component/Footer';


const technologiesFetch = async (): Promise<IDevStack[]> => {
    const res = await fetch(`${import.meta.env.BASE_URL}data.json`);

    if (!res.ok) {
        throw new Error('Failed to fetch technology data');
    }

    const data = await res.json();
    return data;
};

function App() {
    const technologiesPromise = technologiesFetch();

  return (
    <>
      <Nav />
      <Banner />
      <Suspense fallback={<h2>Loading...</h2>}>
        <DevStack technologiesPromise={technologiesPromise} />
      </Suspense>
      <Footer />
      
      
    </>
  )
}

export default App
