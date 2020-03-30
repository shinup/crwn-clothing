import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview} from '../../redux/shop/shop.selector';

import CollectionPrview from '../collection-preview/collection-preview.component'

import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections}) => {   
    return (
    <div className='collections-overivew'>
   { 
        collections.map(({id, ...othersProps}) => (
            <CollectionPrview key={id} {...othersProps} ></CollectionPrview>
        ))
    }

    </div>
)}

const mapStateToProps = createStructuredSelector({
    collections : selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview)