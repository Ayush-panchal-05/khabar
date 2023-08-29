import React from 'react'

const Blueprint = (props) => {
    return (
       <>
        <div className="card my-5" style={{width:"18rem", boxShadow:'2px 3px lightgray' ,}} >
            <img className="card-img-top" src={props.urltoimage==null?'https://media.istockphoto.com/id/1182477852/photo/breaking-news-world-news-with-map-backgorund.jpg?s=1024x1024&w=is&k=20&c=S9FBe3KUvooZHZktJzr8Nt94wtg56BQTQiqAz8zUK8M=':props.urltoimage} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.title==null?'':props.title.slice(0,52)}</h5>
                <p className="card-text">{props.description==null?'...':props.description.slice(0,57)}</p>
                <a href={props.url} target='_blank' className="btn btn-primary">Read More</a>
            </div>
        </div>
       </>
    )
}

export default Blueprint
