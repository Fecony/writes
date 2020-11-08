import type { AppProps } from 'next/app';
import '../styles/tailwind.css';

function WritesApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default WritesApp;
