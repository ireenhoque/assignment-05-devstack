//import React from 'react';
import React, { use } from 'react';

const DevStack = ({ technologiesPromise }) => {

    console.log(technologiesPromise);
    const technologies = use(technologiesPromise);
    console.log(technologies, 'technologies');

    return <div></div>;
};

export default DevStack;