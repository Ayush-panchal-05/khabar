import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Blueprint from './Blueprint'

const Home = () => {
  
  const instance=axios.create(
    {
      baseURL:'https://newsapi.org/v2/'
    }
  )
  const[news,setNews]=useState([]) ;
  useEffect(()=>{
    const fetchNews=async()=>{
      try {
        const response=await instance.get('top-headlines?country=in&apiKey=08ccb7146e5d4a2aaa9042c910d3630e');
        setNews(response.data.articles) ;
      } catch (error) {
         console.log(error) ;
      }
    }
    fetchNews() ;
  },[]);
  return (
    <div className='container'>
      <div className='row'>
        {news.map((articles)=>(
          <div className='col-md-4'>
            <Blueprint title={articles.title} url={articles.url}  description={articles.description} urltoimage={articles.urlToImage}/>
          </div>
        ))
        }

      </div>
       
    </div>
  )
}

export default Home
