import React from 'react';
import './Prime.css'

const PrimeVideo = ({containercls, playcls, trailercls, pluscls, charcls, cmtcls,  adults, comments, year, duration, play,img, name, desc, blank }) =>{
	return (
			<div className="ImageCard">

		<img alt={name} className="Thumbnail" src={img}/>
		<div className={containercls}>
			<div className="firstBox">
				<div className="leftSide">
					<div className={playcls} text="Play">{blank}</div>
					<div className="playText">{play}</div>
				</div>
				<div className="rightSide">
					<div className={trailercls} text="Watch Trailer">{blank}</div>
					<div className={pluscls} text="Add to favorites">{blank}</div>
				</div>

			</div>
			<div className="second">
				<div className="filmName">{name}</div>
				<div className="desc">{desc}</div>

			</div>
			<div className="third">
				<p className="duration">{duration}</p>
				<p className="releases">{year}</p>
				<p text="Comments"  className={cmtcls}>{comments}</p>
				<p title="Adult Characters" className={charcls}>{ adults }</p>


			</div>

			</div>

			</div>
		)
}


export default PrimeVideo;