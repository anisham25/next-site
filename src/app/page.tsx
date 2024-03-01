import Layout from './layout';
import Image from 'next/image'
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <main className="flex h-full">
      <div className="pl-72 pt-52">
        <a href="/serv-comp" className="block mb-36 ml-0">
            <h1 className="text-white text-5xl font-semibold hover:text-violet-500">
              Server Components
            </h1>
        </a>
        <a href="/approuter" className="block mb-36 ml-0">
          <h1 className="text-white text-5xl font-semibold hover:text-violet-500">
            App Router
          </h1>
        </a>
        <a href="/files" className="block mb-8 ml-0">
          <h1 className="text-white text-5xl font-semibold hover:text-violet-500">
            Next.JS Files
          </h1>
        </a>
      </div>
      <div>
        <Image 
          className="absolute top-32 right-48"
          src="/image.png"
          alt="Anisha giving you inspiration"
          width={720}
          height={619}
        />
      </div>
    </main>
  )
}