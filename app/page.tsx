import { Manrope } from '@next/font/google'
import Header from './Header'

const manrope = Manrope()

export default function Home() {
  return (
    <div className={manrope.className}>
      <Header />
    </div>
  )
}
