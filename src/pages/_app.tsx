import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline } from '@mui/material';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import AppLayout from '@/components/_app/AppLayout';

export default function App({ Component, pageProps }: AppProps) {
  const apploClient = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_API_GRAPHQL,
    cache: new InMemoryCache()
  })
  return <ApolloProvider client={apploClient}>
    <CssBaseline/>
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  </ApolloProvider>
}
