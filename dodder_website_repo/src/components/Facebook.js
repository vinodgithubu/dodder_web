
import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import {Link} from 'react-router-dom';

export default class Facebook extends Component {
    state = {
        isLoggedIn: false,
        userID: "",
        name: "",
        email: "",
        picture: "",
        birthday: "",
        gender: "",
        age_range: "",
        friends: "",
        location: "",
        hometown: "",
        link: "",
        likes: "",
        posts: ""
     };
     
     responseFacebook = response => {
         //console.log(response);
         this.setState({
             isLoggedIn: true,
             userId: response.userID,
             name: response.name,
             email: response.email,
             picture: response.picture.data.url,
             birthday: response.birthday,
             gender: response.gender,
             age_range: response.age_range,
             friends: response.friends.summary.total_count,
             location: response.location.name,
             hometown: response.hometown.name,
             link: response.link,
             likes: response.likes.data[0].name,
             posts: response.posts.data[0].created_time
         });
     };
 
 
 
  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = (
        <div style={{
          width: '400px',
          margin: 'auto',
          background: '#f4f4f4',
          padding: '20px'
        }}>
          <img src={this.state.picture} alt={this.state.name} />
          <h2>welcome{this.state.name}</h2>
          <h2>Email: {this.state.email}</h2>
          <h2>Birthday: {this.state.birthday}</h2>
          <h2>Gender: {this.state.gender}</h2>
          <h2>Age: {this.state.age_range.min}</h2>
          <h2>friends: {this.state.friends}</h2>
          <h2>location: {this.state.location}</h2>
      
          <h2>hometown: {this.state.hometown}</h2>
          <h2>link: {this.state.link}</h2>
          <h2>likes: {this.state.likes}</h2>
          <h2>posts: {this.state.posts}</h2>
         
        </div>
       );

    } else {
      fbContent=(<FacebookLogin
        appId="1246143788884082"
        autoLoad={true}
        fields="name,email,birthday,gender,age_range,friends,location,hometown,link,likes,posts,picture"
        onClick={this.componentClicked}
        callback={this.responseFacebook} />);
      }
    return (
      <div>
        {fbContent}
      </div>
    )
  }
}

