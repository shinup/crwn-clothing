import React from 'react';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux';

import{ firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import CollectionsOverView from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { updateCollections } from '../../redux/shop/shop.actions';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverView);
const CollectionsPageWithSpinner =  WithSpinner(CollectionPage);

class  ShopPage extends React.Component {
    state = {
        loading : true
    };
    unssubScribeFromSnapshot = null;

   componentDidMount(){
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');
        collectionRef.get().then((snapshot) => {
                const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
                console.log(collectionsMap);
                updateCollections(collectionsMap);
                this.setState({loading : false});
            }
        );
    }

    render(){
        const {match} = this.props;
        const {loading} = this.state;
        return (
            <div className='shop-page'> 
                <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />}/>
                <Route exact path={`${match.path}/:collectionId`} render={(props) => <CollectionsPageWithSpinner isLoading={loading} {...props} />} />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
 updateCollections : (collectionMap) =>  dispatch(updateCollections(collectionMap))  
})
export default connect(null,mapDispatchToProps)(ShopPage)
