import React from 'react';
import styled from 'styled-components';

    // - followers
    // - styling
    // - contribution graph

    
class UserCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      
    }

    render() {
            // avatar_url name username location followers following bio
            // calendar
        console.log(`props/githubProfile = ${this.props.githubProfile}`);
        return (
            <div>
                    <img src={this.props.githubProfile.avatar_url} alt='profile image' />
            <h2>{this.props.githubProfile.name}</h2>
            <h3>{this.props.githubProfile.username}</h3>
            <h4>{this.props.githubProfile.location}</h4>
            <h5>Followers:  {this.props.githubProfile.followers}   |   Following:  :  {this.props.githubProfile.following}</h5>
            <p>Bio:  : { this.props.githubProfile.bio}</p >
                <button>THIS IS THE USERCARD COMPONENT!</button>
</div>
      );
    }
}


export default UserCard;
