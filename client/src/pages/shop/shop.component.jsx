import React, {useEffect} from 'react';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';


import CollectionsOverView from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import {selectIsCollectionFetching, selectIsCollectionLoaded} from '../../redux/shop/shop.selector';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverView);
const CollectionsPageWithSpinner =  WithSpinner(CollectionPage);

const  ShopPage = ({fetchCollectionsStartAsync, match, isCollectionLoaded}) =>  {    
    useEffect(() => {     
      fetchCollectionsStartAsync();
    },[fetchCollectionsStartAsync])
    
    return (
        <div className='shop-page'> 
            <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={!isCollectionLoaded} {...props} />}/>
            <Route exact path={`${match.path}/:collectionId`} render={(props) => <CollectionsPageWithSpinner isLoading={!isCollectionLoaded} {...props} />} />
        </div>
    );
   
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching : selectIsCollectionFetching,
    isCollectionLoaded : selectIsCollectionLoaded
});
const mapDispatchToProps = dispatch => ({
 fetchCollectionsStartAsync : () =>  dispatch(fetchCollectionsStartAsync())  
})
export default connect(mapStateToProps,mapDispatchToProps)(ShopPage)
