//import React from 'react';
import React, { use } from 'react';
import type { IDevStack } from '../../types/devStackType';

interface DevStackProps {
    technologiesPromise: Promise<IDevStack[]>;
}

const DevStack = ({ technologiesPromise }: DevStackProps) => {

    console.log(technologiesPromise);
    const technologies = use(technologiesPromise);
    console.log(technologies, 'technologies');

    return <div></div>;
};

export default DevStack;