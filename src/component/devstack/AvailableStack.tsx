import type { IDevStack } from '../../types/devStackType';
import StackCard from './StackCard';

interface AvailableStackProps {
    technologies: IDevStack[];
    onAddToStack: (technology: IDevStack) => void;
    stack: IDevStack[];
}

const AvailableStack = ({
    technologies,
    onAddToStack,
    stack,
}: AvailableStackProps) => {
    return (
         <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 xl:grid-cols-3">
            {technologies.map((technology) => {
                const isAdded = stack.some(
                    (item) => item.id === technology.id
                );

                return (
                    <StackCard
                        key={technology.id}
                        technology={technology}
                        onAdd={onAddToStack}
                        isAdded={isAdded}
                    />
                );
            })}
        </div>
    );
};

export default AvailableStack;