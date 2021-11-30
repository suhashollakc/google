import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import SearchResults from '../components/SearchResults';
// import {API_KEY,CONTEXT_KEY} from "../keys";
import Response from '../Response';
const API_KEY = process.env.API_KEY;
const CONTEXT_KEY = process.env.CONTEXT_KEY;
function Search({results}) {
    const router = useRouter();
    console.log(results);
    return (
        <div>
            <Head>
            <title> {router.query.term} - Google Search</title>
            <meta name="description" content="Google themed Portfolio" />
        <link rel="icon" href="/google.png" />
            </Head>

            <Header/>

            {/* Search Results */}

            <SearchResults results={results}/>


        </div>
    )
}

export default Search

 export async function getServerSideProps(context){

     const useDummyData = true;
    const startIndex = context.query.start || "0";


     const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}
     $start=${startIndex}`
     ).then(response => response.json());

    //  After SSR, pass results to client
    return {
        props: {
            results: data,
 }
}
 }
