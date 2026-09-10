import { Suspense } from 'react';
import Banner from './component/Banner';
import DevStack from './component/devstack/DevStack';
import Nav from './component/Nav';
import type { IDevStack } from './types/devStackType';


const technologiesFetch = async (): Promise<IDevStack[]> => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
}

function App() {
    const technologiesPromise = technologiesFetch();

  return (
    <>
      <Nav />
      <Banner />
      <Suspense fallback={<h2>Loading...</h2>}>
        <DevStack technologiesPromise={technologiesPromise} />
      </Suspense>
      
      
    </>
  )
}

export default App
