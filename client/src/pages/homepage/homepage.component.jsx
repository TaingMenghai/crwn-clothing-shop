import React from 'react';
import { connect } from 'react-redux';
import Directory from '../../components/directory/directory.component';

import { HomePageContainer } from './homepage.styles';

const HomePage = ({displayName}) => {
  return (
  <HomePageContainer>
    	{displayName ? (
				<h1>{`Hi, ${displayName}`}. Welcome to my store :D</h1>
			) : (
				<h1>Welcome to Menghai store!</h1>
			)}
    <Directory />
  </HomePageContainer>
  )
};

const mapStateToProps = ({user: {currentUser}}) =>{
  if(!currentUser) return {}

  return {
    displayName: currentUser.displayName
  }
}

export default connect(mapStateToProps)(HomePage);
