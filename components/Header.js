import { CogIcon, MicrophoneIcon, SearchIcon, ViewGridIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import {useRouter} from 'next/router'
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
    const router = useRouter()
    const searchInputRef = useRef(null);

    const search = e => {
        e.preventDefault();
        const term = searchInputRef.current.value;
        if (!term) return;
        router.push(`/search?term=${term}`);
    };

    return (
        <header className='sticky top-0 bg-white'>

        <div className=' flex w-full p-6 items-center'>
        <Image
    src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/272px-Google_2015_logo.svg.png'
    height={40}
    width={120}
    onClick={() => router.push('/')}
    className='cursor-pointer'/>
            <form className=' flex flex-grow border border-gray-200 rounded-full shadow-lg max-w-3xl px-6 py-3 ml-10 mr-5'>
                <input type="text" ref={searchInputRef} className='flex-grow w-full focus:outline-none'/>
                <XIcon className='h-7 cursor-pointer text-gray-500 transition duration-100 transform hover:scale-125 '

                onClick={() => searchInputRef.current.value = ''}/>
                <MicrophoneIcon className='h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300'/>
                <SearchIcon className = 'h-6 text-blue-500 hidden sm:inline-flex '/>

                <button hidden type='submit' onClick={search}>Search</button>
                
            </form>
            {/* {/* <CogIcon className='ml-auto h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer'/>
            <ViewGridIcon className='ml-auto h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer' /> */}
            <Avatar className='ml-auto' url={'https://i.ibb.co/M93q63t/suhasholla-dp.jpg'}/> 
        </div>

        <HeaderOptions/>
           
        </header>
    )
}

export default Header
