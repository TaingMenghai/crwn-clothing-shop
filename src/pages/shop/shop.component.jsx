import React, {useEffect} from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

const ShopPage =({fetchCollectionsStart, match})=> {
  // fechCollectionStart will fire 2 time: 
  // currentUser is still null not yet fired
  // when first page load trigger fetchCollectionStart
  // currentUser fired causes shop page to rerender => trigger fetchCollectionsStart 
 useEffect(()=>{
   fetchCollectionsStart()
 },[fetchCollectionsStart]) // only one, we know that fetchCollectionStart is render only one due to our mapDispatchToProps

    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
