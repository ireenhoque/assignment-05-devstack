import React, { useState } from 'react';
import StackCard from './StackCard';
import YourStack from './YourStack';
import type { IDevStack } from '../../types/devStackType';

interface Props {
    technologies: IDevStack[];
}

const StackPage = ({ technologies }: Props) => {
    const [stack, setStack] = useState<IDevStack[]>([]);

    const addToStack = (technology: IDevStack) => {
        setStack((currentStack) => {
            // Prevent duplicates
            if (currentStack.some((item) => item.id === technology.id)) {
                return currentStack;
            }

            return [...currentStack, technology];
        });
    };

    const removeFromStack = (id: string) => {
        setStack((currentStack) =>
            currentStack.filter((item) => item.id !== id)
        );
    };

    return (
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_220px]">
            
            {/* Technology Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {technologies.map((technology) => (
                    <StackCard
                        key={technology.id}
                        technology={technology}
                        onAdd={() => addToStack(technology)}
                    />
                ))}
            </div>

            {/* Your Stack */}
            <YourStack
                stack={stack}
                onRemove={removeFromStack}
            />

        </div>
    );
};

export default StackPage;