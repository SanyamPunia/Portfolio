// import { SpotifyApiContext } from 'react-spotify-api'
import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    // <SpotifyApiContext.Provider value={token}>
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
    // </SpotifyApiContext.Provider>
  )
}

export default MyApp
