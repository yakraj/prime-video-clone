import React from 'react';
import PrimeVideo from './PrimeVideo';


const VideoList = ({Details})=>{
		const Films = Details.map((name, i)=>{
			return <PrimeVideo 
			key={i} 
			adults={Details[i].adults} 
			comments={Details[i].comments} 
			year={Details[i].year} 
			duration={Details[i].duration} 
			blank = {Details[i].blank} 
			name={Details[i].name} 
			desc={Details[i].desc} 
			play={Details[i].play}
			playcls={Details[i].playcls}
			img={Details[i].img}
			containercls={Details[i].containercls}
			trailercls ={Details[i].trailercls}
			pluscls ={Details[i].pluscls}
			cmtcls ={Details[i].cmtcls}
			charcls ={Details[i].chrcls}



			/>
		})
		

 	return	(
				<div className="Display">
					{Films}
				</div>
				)
} 

export default VideoList;