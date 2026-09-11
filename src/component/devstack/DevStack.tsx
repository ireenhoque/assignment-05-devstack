import { use, useState } from 'react';
import type { IDevStack } from '../../types/devStackType';
import AvailableStack from './AvailableStack';
import YourStack from './YourStack';

interface DevStackProps {
    technologiesPromise: Promise<IDevStack[]>;
}

const DevStack = ({ technologiesPromise }: DevStackProps) => {
    const technologies = use(technologiesPromise);

    const [stack, setStack] = useState<IDevStack[]>([]);

    const addToStack = (technology: IDevStack) => {
        setStack((currentStack) => {
            if (
                currentStack.some(
                    (item) => item.id === technology.id
                )
            ) {
                return currentStack;
            }

            return [...currentStack, technology];
        });
    };

    const removeFromStack = (id: IDevStack['id']) => {
        setStack((currentStack) =>
            currentStack.filter(
                (item) => item.id !== id
            )
        );
    };

    const removeAll = () => {
        setStack([]);
    };

    return (
        <section className="container mx-auto py-10">
            <div className="mb-6">
                <h2 className="text-3xl font-semibold">
                    Explore the{' '}
                    <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
                        Technologies
                    </span>
                </h2>

                <p className="text-[#475569]">
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_240px]">

                {/* Available Technologies */}
                <AvailableStack
                    technologies={technologies}
                    stack={stack}
                    onAddToStack={addToStack}
                />

                {/* Your Stack */}
                <YourStack
                    stack={stack}
                    onRemove={removeFromStack}
                    onRemoveAll={removeAll}
                />

            </div>
        </section>
    );
};

export default DevStack;
