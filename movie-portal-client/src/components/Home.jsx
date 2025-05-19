import React from 'react'
import SlidesBanner from '../extraHome_section/SlidesBanner'
import Faq from '../extraHome_section/Faq'
import Card from '../extraHome_section/Card'
// import MovieCard from './MovieCard';
import { useLoaderData } from 'react-router-dom';
import HomeCard from '../extraHome_section/HomeCard';
import { Helmet } from 'react-helmet';

export default function Home() {
  const getDatas = useLoaderData();
  // const [movieData, setMovieData] = useState(getData);

  
  return (
    <div className=''>
       <Helmet>
        <title>Movie Portal | Home</title>
      </Helmet>
    <section className='my-20'>
   
      
  
    <SlidesBanner />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {getDatas?.map((data) => (
          <HomeCard key={data._id} sendCards={data} />
        ))}
      </div>
    <Card />
      <Faq/>
    </section>   
   
      </div>
  )
}
