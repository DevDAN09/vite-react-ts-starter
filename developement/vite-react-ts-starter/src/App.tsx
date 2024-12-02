import { createBrowserRouter, RouterProvider, RouteObject, Outlet, ScrollRestoration, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '@/styles';
import { Header, Footer } from '@/components';
import { 
  HomePage, 
  ScrollPage,
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
      {
        path: '/scroll',
        element: <ScrollPage />,
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
        <Header />
        <Outlet />
        <Footer />
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
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App
