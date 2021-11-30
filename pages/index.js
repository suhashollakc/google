import Head from 'next/head'
import Image from 'next/image'
import Avatar from '../components/Avatar'
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid"
import { SearchIcon} from "@heroicons/react/outline"
import Footer from '../components/Footer'
import {useRouter} from 'next/router'
import { useRef } from 'react'
export default function Home() {
  const searchInputRef = useRef(null);
  const router = useRouter();
const search = e => {

  e.preventDefault();
  const term = searchInputRef.current.value;

  if(!term) return;
  router.push(`/search?term=${term}`);
}

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <meta name="description" content="Google themed Portfolio" />
        <link rel="icon" href="/google.png" />
      </Head>
      {/* Header */}
      <header className='flex w-full p-5 justify-between text-sm text-gray-700'>
        {/* left section */}
        <div className='flex space-x-4 items-center'>
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>

        {/* right section */}

        <div className='flex space-x-4 items-center'>
          <p className='link'>Gmail</p>
          <p className='link'>Images</p>
          {/* Icon */}
          <ViewGridIcon className='h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer' />

          {/* Avatar */}
          <Avatar url={'https://i.ibb.co/M93q63t/suhasholla-dp.jpg'} />

        </div>
      </header>

      {/* Body */}

      <form className='flex flex-col items-center flex-grow mt-33 w-4/5'>

        <Image 
          src = 'https://vcet.co/wp-content/uploads/2018/08/GOOGLE-1300x730.jpg'
          width='500'
          height='300'
        />

        <div className='flex w-full hover:shadow-lg focus-within: shadow-lg max-w-md rounded-full border px-5 py-3 items-center border-gray-200
        sm:max-w-xl lg:max-w-2xl
        '>
          <SearchIcon className='h-5 mr-3 text-gray-500'/>
          <input type="text" ref={searchInputRef} className='focus:outline-none flex-grow' />
          <MicrophoneIcon className='h-5 ml-3 text-gray-500'/>
        </div>
        <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4'>
          <button onClick={search} className='btn'>Google Search</button>
          <button  onClick={search} className='btn'>I'm Feeling Lucky</button>
        </div>

      </form>


      {/* Footer */}

      <Footer/>

    </div>
  )
}
