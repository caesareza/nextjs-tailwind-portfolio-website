import '../styles/globals.css'
import MainLayout from '@/components/Layout/MainLayout'

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp
