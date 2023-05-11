// import Dogs from 'components/pages/dogs';
// import DogDetails from 'components/pages/dogsDetails';
// import Home from 'components/pages/home';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { Gallery } from './components/gallery';
import { Subbreeds } from './components/subbreeds';
import { Loyout } from './loyout';
// import { RefExample } from './refExample/RefExample';

const Home = lazy(()=> import('components/pages/home'))
const Dogs = lazy(()=> import('components/pages/dogs'))
const DogDetails = lazy(()=> import('components/pages/dogsDetails'))
const Gallery = lazy(()=> import('./components/gallery'))




export const HooksApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Loyout />}>
        <Route index element={<Home />} />
        <Route path="dogs" element={<Dogs />} />
        <Route path="dogs/:dogId" element={<DogDetails />}>
          <Route path="subbreeds" element={<Subbreeds />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>
      </Route>
    </Routes>
  );
};

{
  /* <RefExample /> */
}
