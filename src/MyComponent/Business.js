import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Blueprint from './Blueprint';
import Spinner from './Spinner';

const Business = () => {
   
  const instance= axios.create(
    {
      baseURL:'https://newsapi.org/v2/'
    }
  );
  const[news,setNews]= useState([]) ;
  const[count,setCount]= useState(1) ;
  const[load , setload]=useState(false) ;
  const[v,setv]=useState(0) ;
 

   useEffect(()=>{
    const fetchData=async()=>{
       try {
        setload(true) ;
          const response= await instance.get(`top-headlines?country=in&category=business&apiKey=08ccb7146e5d4a2aaa9042c910d3630e&page=${count}&pagesize=12`)
          setNews(response.data.articles)
          setv(response.data.totalResults)
          setload(false)
       } catch (error) {
        console.log(error) ;
       }
    }
    fetchData() ;
  },[])

  const fetchData= async ()=>{
    try {
      setload(true)
         const response=await instance.get(`top-headlines?country=in&category=business&apiKey=08ccb7146e5d4a2aaa9042c910d3630e&page=${count}&pagesize=12`)
         setNews(response.data.articles) ;
         setload(false)
    } catch (error) {
      console.log(error) ;
    }
  }
 const previous=()=>{
  
    setCount(count-1) ;
    fetchData() ;
  }
 
 const Next=()=>{
  setCount(count+1) ;
  fetchData() ;
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
        <div className='container my-5' style={{display:'flex' , justifyContent:'space-between'}}>
          <button className='btn btn-primary' onClick={previous} disabled={count<=1} >Previous</button>
          <button className='btn btn-primary' onClick={Next} disabled={count>=Math.ceil(v/12)}>Next</button>
        </div>

      </div>
       
    </div>
  )
      }

export default Business
