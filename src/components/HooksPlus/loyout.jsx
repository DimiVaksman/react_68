import { Suspense } from 'react';
import { NavLink, Outlet, Route, Routes } from 'react-router-dom';

export const Loyout = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home Page</NavLink>
        </li>
        <li>
          <NavLink to="dogs">Colection</NavLink>
        </li>
      </ul>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
