// Reset css
import 'ress'
import '@/styles/globals.css'

import { EmotionJSX } from '@emotion/react/types/jsx-namespace'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps): EmotionJSX.Element {
  return <Component {...pageProps} />
}
export default MyApp
