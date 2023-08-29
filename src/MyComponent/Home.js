import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Blueprint from './Blueprint'
import Spinner from './Spinner'

const Home = () => {
  
  const instance=axios.create(
    {
      baseURL:'https://newsapi.org/v2/'
    }
  )
  const[news,setNews]=useState([]) ;
  const[page,setPage]=useState(1) ;
  const[v,setv]=useState(0) ;
  const[load,setload]=useState(false) ;
  useEffect(()=>{
    const fetchNews=async()=>{
      try {
        setload(true) ;
        const response=await instance.get(`top-headlines?country=in&apiKey=08ccb7146e5d4a2aaa9042c910d3630e&page=${page}&pagesize=12`);
        setNews(response.data.articles) ;
        setload(false) ;
        setv(response.data.totalResults) ;
      } catch (error) {
         console.log(error) ;
      }
    }
    fetchNews() ;
  },[]);

  const fetchNews=async ()=>{
    try {
      setload(true) ;
      const response=await instance.get(`top-headlines?country=in&apiKey=08ccb7146e5d4a2aaa9042c910d3630e&page=${page}&pagesize=12`)
      setNews(response.data.articles) ;
      setload(false) 
    } catch (error) {
      console.error(error) ;
      
    }
  }
  const Privious=()=>{
    setPage(page-1) ;
    fetchNews() ;
    window.scrollTo(0, 0);
  }
  const Next=()=>{
    setPage(page+1) ;
    fetchNews() ;
    window.scrollTo(0, 0);
  }
  return (
    <div className='container'>
      {load && <Spinner/>}
      <div className='row'>
        {news.map((articles)=>(
          <div className='col-md-4' key={articles.url}>
            <Blueprint title={articles.title} url={articles.url}  description={articles.description} urltoimage={articles.urlToImage}/>
          </div>
          
        ))
        }
        <div className='conatiner my-5' style={({display:'flex',justifyContent:'space-between'})}>
           <button className='btn-hover' onClick={Privious} disabled={page==1}> Previous</button>
           <button className='btn-hover' onClick={Next} disabled={page>=Math.ceil(v/12)}>Next</button>
        </div>
      </div>
       
    </div>
  )
}

export default Home
