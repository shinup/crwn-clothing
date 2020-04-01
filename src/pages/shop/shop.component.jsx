import React from 'react';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';


import CollectionsOverView from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import {selectIsCollectionFetching} from '../../redux/shop/shop.selector';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverView);
const CollectionsPageWithSpinner =  WithSpinner(CollectionPage);

class  ShopPage extends React.Component {
    state = {
        loading : true
    };
    unssubScribeFromSnapshot = null;

   componentDidMount(){
      const { fetchCollectionsStartAsync } = this.props;
      fetchCollectionsStartAsync();
    }

    render(){
        const {match, isCollectionFetching} = this.props;
        const {loading} = this.state;
        return (
            <div className='shop-page'> 
                <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />}/>
                <Route exact path={`${match.path}/:collectionId`} render={(props) => <CollectionsPageWithSpinner isLoading={isCollectionFetching} {...props} />} />
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching : selectIsCollectionFetching
});
const mapDispatchToProps = dispatch => ({
 fetchCollectionsStartAsync : () =>  dispatch(fetchCollectionsStartAsync())  
})
export default connect(mapStateToProps,mapDispatchToProps)(ShopPage)
