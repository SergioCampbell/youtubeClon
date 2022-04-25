import React from 'react'
import Dayjs from 'dayjs';

export default function Cards ({...props}) {

    const { show } = props
    return (
        <div className="row">
        <div className="card col-sm-4 mt-3 bg-secondary text-light">
          { show.map((item, i) =>
          <div className='card-body'  key={ i }>
            <img  className="img-fluid card-img-top" src={item.snippet.thumbnails.high.url}/>
            <h2 className='card-title'>{item.snippet.title}</h2>
            <sub className='card-subtitle mb-2 text-dark'>{item.snippet.channelTitle}</sub>
            <sub className='card-subtitle mb-2 text-dark'>{item.snippet.publishedAt} ago</sub>
          </div>
          ) }
          </div>
          </div>
    )
}