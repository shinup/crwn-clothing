import {connect} from 'react-redux';
import {compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {selectIsCollectionFetching, selectIsCollectionLoaded} from '../../redux/shop/shop.selector';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionsOverView from '../../components/collections-overview/collections-overview.component';

const mapStateToProps = createStructuredSelector({
    isLoading : selectIsCollectionFetching    
});

const CollectionsOverViewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverView)

export default CollectionsOverViewContainer;