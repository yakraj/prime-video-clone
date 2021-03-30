import React, {Component} from 'react';
import PrimeVideo from './PrimeVideo'
import './App.css';
import VideoList from './VideoList';
import {Details} from './Details'



class App extends Component {
constructor(){
	super()
	this.state ={
		films:Details,
		searchfield: ''
	}
}

searchInspector =(event)=>{
	this.setState({searchfield:event.target.value});
}
exit = () => {
	const popup = document.querySelector('.popup');
	popup.style.display = 'none';
}
clickme 	= () => {
	const popup = document.querySelector('.popup');
	popup.style.display = 'flex';
}
addedfields = () => {
			const name = document.querySelector('.name');
			const img = document.querySelector('.img');
			const year = document.querySelector('.year');
			const character = document.querySelector('.character');
			const duration = document.querySelector('.durat');
			const description = document.querySelector('.descript');


	const field = {
					img: `${img.value}`,
					blank: ' ',
					containercls: 'fullContainer',
					playcls: 'play',
					trailercls: 'trailer',
					pluscls: 'plus',
					cmtcls: 'comments',
					chrcls: 'characters',
					play:'Play',
					duration:`${duration.value}`,
					year: `${year.value}`,
					adults: `${character.value}`,
					comments:'------',
					name: `${name.value}`,
					desc: `${description.value}`
				};
	if( name.value.length > 0 
		&& img.value.length > 0 
		&& year.value.length > 0 
		&& character.value.length > 0 
		&& description.value.length > 0
		&& duration.value.length > 0){this.setState({films: this.state.films.concat(field)});
	name.value ='';
	img.value ='';
	year.value ='';
	character.value ='';
	duration.value ='';
	description.value ='';
	setTimeout(alert("Your Details are successfully added on Movies List."),2000)}else{
		alert("Please fill all fields")
	}
}



render(){
		const getReturn = this.state.films.filter(Films =>{
			return Films.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})



  return (
									<div className="App">
									<nav>
											<div className="left"><img className="primevideo" src="https://logodownload.org/wp-content/uploads/2018/07/prime-video.png" alt="Prime Video" /></div>
													<div className="right">
													<div className="search">
													<div className="searchIcon"></div>
													<input onChange={this.searchInspector} type="search" placeholder="Search Movie"/>

													</div>
													<div onClick={this.clickme} className="addmovieItem">
													<p>Add Movie</p>
													<div className="add"></div>
													</div>
											</div>

									</nav>
									<div className="FanofMarvel"></div>
      <PrimeVideo />
      <div>		
									<div className="popup">
									      <div className="box">
									      <div onClick={this.exit} className="close"><div class="Line"></div></div>
									        <input className="name" type="text" placeholder="Film Name"/>
									        <input id="img" className="img" type="url" placeholder="Your Thumbnail Image URL"/>
									        <div className="twocol">
									        <input className="year" type="date" placeholder="Published Year"/>
									        <input className="character" type="text" placeholder="Adult Characters"/>
									        </div>
									        <input className="durat" type="text" placeholder="Duration"/>
									        <textarea className="descript" cols="30" rows="2" placeholder="Description..."></textarea>
									        <p onClick={this.addedfields} id="submit">Add Movie +</p>
									      </div>
									  </div>
					</div>
      <VideoList Details={getReturn} />
    </div>
  );
  }
}

export default App;
