import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import './fontAwesome';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import ErrorBoundary from './components/ErrorBoundary';
import Loading from './components/Loading.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<Loading />}>
          <App />
        </Suspense>
      </ThemeProvider>
    </ErrorBoundary>
  </StrictMode>,
)
