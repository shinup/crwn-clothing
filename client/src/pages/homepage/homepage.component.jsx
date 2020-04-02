import React from 'react';
import './homepage.style.scss';
import Directory  from './../../components/directory/directory.component';
import {HomePageContainer} from './homepage.styles';

const HomePage = () => (
    <HomePageContainer>
        <Directory></Directory> 
    </HomePageContainer>
)
    
    export default HomePage;