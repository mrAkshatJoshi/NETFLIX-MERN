import React from 'react'
import {PlayArrow, InfoOutlined} from '@material-ui/icons'
import './featured.scss'

export default function Featured({type}) {
  return (
    <div className='featured'>
        {type && (
            <div className="category">
                <span>{type ==="movie" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}
        <img src='https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt="" />
        <div className="info">
            <img src="data:image/jpeg;base64,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" alt="" />
        
            <span className="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam quae doloribus nam dolore nisi cum. Dicta repudiandae, eius tenetur cum deserunt, quis nisi ratione dolorum impedit culpa quos suscipit officia?</span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow />
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined />
                    <span>Info</span>
                </button>
            </div>
        </div>
    </div>
  )
}
