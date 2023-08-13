import React from 'react'
import { useState , useEffect } from 'react';
import axios from 'axios';
import Blueprint from './Blueprint';

const Health = () => {

  const[news,setNews]= useState([]) ;
  const instance=axios.create(
    {
      baseURL: 'https://newsapi.org/v2/'
    }
  )
  useEffect(()=>{
    const fetchData=async ()=>{

      try {
         const response= await instance.get('top-headlines?country=in&category=health&apiKey=08ccb7146e5d4a2aaa9042c910d3630e');
         setNews(response.data.articles) ;
      } catch (error) {
         console.log(error) ;
      }
    }
   fetchData() ;
  },[]) ;

  return (
    <div className='container'>
      <div className='row'>
       {news.map((articles) =>(
        <div className='col-md-4' key={articles.url}>
            <Blueprint title={articles.title} url={articles.url}  description={articles.description} urltoimage={articles.urlToImage}/>
        </div>
       ))

       }

      </div>

    </div>
  )
}

export default Health
