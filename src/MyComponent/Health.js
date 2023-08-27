import React from 'react'
import { useState , useEffect } from 'react';
import axios from 'axios';
import Blueprint from './Blueprint';
import Spinner from './Spinner';

const Health = () => {

  const[news,setNews]= useState([]) ;
  const [page,setPage] =useState(1) ;
  const [load,setload]= useState(false) ;
  const[v,setv]=useState(0)
  const instance=axios.create(
    {
      baseURL: 'https://newsapi.org/v2/'
    }
  )
  useEffect(()=>{
    const fetchData=async ()=>{

      try {
         setload(true) ;
         const response= await instance.get(`top-headlines?country=in&category=health&apiKey=08ccb7146e5d4a2aaa9042c910d3630e&page=${page}&pagesize=12`);
         setNews(response.data.articles) ;
         setload(false) ;
         setv(response.data.totalResults)
         //console.log(v) ;
      } catch (error) {
         console.log(error) ;
      }
    }
   fetchData() ;
  },[]) ;

  const fetchData = async () => {
    try {
      setload(true) 
      const response = await instance.get(`top-headlines?country=in&category=Entertainment&apiKey=08ccb7146e5d4a2aaa9042c910d3630e&page=${page}&pagesize=12`);
      setNews(response.data.articles);
     // v=response.data.totalResults ;
      setload(false)
    } catch (error) {
      console.error(error);
    }

  };

  const Next=()=>{
    setPage(page+1) ;
    fetchData() ;
 }
 const Previous=()=>{
  
     setPage(page-1) ;
     fetchData() ;
 }

  return (
    <div className='container'>
      {load && <Spinner/>}
      <div className='row'>
       {news.map((articles) =>(
        <div className='col-md-4' key={articles.url}>
            <Blueprint title={articles.title} url={articles.url}  description={articles.description} urltoimage={articles.urlToImage}/>
        </div>
       ))

       }
       <div className='container my-5' style={{ display: 'flex', justifyContent: 'space-between' }}>
           <button className='btn btn-primary'  onClick={Previous} disabled={page==1}>Previous</button>
           <button className='btn btn-primary' onClick={Next} disabled={page>=Math.ceil(v/12)}>Next</button>
          </div>

      </div>

    </div>
  )
}

export default Health
