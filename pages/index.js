import Head from 'next/head'
import Image from 'next/image'
import logo from '../public/logo.webp'

export default function Home() {
  return (
    <div>
      <Head>
        <title>V Rising Mods</title>
        <meta name="description" content="V Rising Mods" />
        <link rel="icon" href="/favicon.ico" />
        <script defer data-domain="vrisingmods.com" src="https://traffic.dev.deca.gg/js/script.js"></script>
      </Head>
      <main>
        <div className='flex items-center flex-col flex-auto justify-center h-screen'>
          <div>
            <div className='text-center'>
              <Image src={logo} placeholder="blur" alt='V Rising Mods' className='' width={150} height={150} />
            </div>
            <h1 className='text-5xl text-red-50 mb-4'>V Rising Mods</h1>
            <ul className='text-xl'>
              <li>Join <a href="https://vrisingmods.com/discord">Discord</a></li>
              <li>Submit <a href="https://ideas.vrisingmods.com">Mod Ideas</a></li>
              <li>View <a href="https://wiki.vrisingmods.com">Wiki</a></li>
              <li>Get <a href="https://v-rising.thunderstore.io/">Mods</a></li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
