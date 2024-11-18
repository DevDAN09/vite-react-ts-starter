import React from 'react';
import { createBrowserRouter, RouterProvider, RouteObject, Outlet, ScrollRestoration, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense } from 'react';
import { 
  HomePage, 
  ErrorPage 
} from '@/pages';

const queryClient = new QueryClient();

const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: (
      <>
        <ScrollRestoration />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </>
    ),
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
];

const routes: RouteObject[] = [
  {
    path: '/error',
    element: <ErrorPage />,
  },
  {
    element:(
      <QueryClientProvider client={queryClient}>
            <Outlet />
      </QueryClientProvider>
    ),
    errorElement: <Navigate to="/error" replace/>,
    children: [...publicRoutes.filter(route => route.path !== '/error')],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App
