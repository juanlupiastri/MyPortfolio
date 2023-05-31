import { AssistantDirection } from '@mui/icons-material';
import React from 'react';
import Guide from './Guide';
import Title from './Title';

const Main = () => {
    return (
        <div id='mainContainer' className='container w-full grid '>
            <div className='row g-col-12 grid'>
                <Title ></Title>
                <Guide ></Guide>
            </div>
        </div>
    );
};


export default Main;