import '@/styles/globals.css';
import { Amplify } from 'aws-amplify';
import awsExports from '../src/aws-exports'

Amplify.configure(awsExports);

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}