import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline, NoSsr } from '@mui/material';
import { ApolloClient, ApolloProvider, InMemoryCache, TypePolicies } from '@apollo/client';
import AppLayout from '@/components/_app/AppLayout';
import { relayStylePagination } from '@apollo/client/utilities';

export const typePolicies: TypePolicies = {
  Query: {
    fields: {
      productsConnection: relayStylePagination()
    },
  }
};

export default function App({ Component, pageProps }: AppProps) {
  const apploClient = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_API_GRAPHQL,
    cache: new InMemoryCache({
      typePolicies,
    })
  })
  return <NoSsr>
    <ApolloProvider client={apploClient}>
      <CssBaseline/>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ApolloProvider>
  </NoSsr>
}
