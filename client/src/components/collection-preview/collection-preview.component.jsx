import React from 'react';
import './collection-preview.style.scss'
import CollectionItem from '../collection-item/collection-item.component'

const CollectionPreview = ({title, items, id}) => (
<div className='collection-preview'>
    <h1 className='title'>{title}</h1>
    <div className='preview'>
    {
        items
        .filter((item, index) => index < 4 )
        .map(item => (           
            <CollectionItem key={item.id} item={item} />
        ))}
    </div>
</div>
)

export default CollectionPreview;