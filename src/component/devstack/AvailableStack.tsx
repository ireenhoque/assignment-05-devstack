import type { IDevStack } from '../../types/devStackType';
import StackCard from './StackCard';

interface AvailableStackProps {
    technologies: IDevStack[];
    onAddToStack: (technology: IDevStack) => void;
}

const AvailableStack = ({
    technologies,
    onAddToStack,
}: AvailableStackProps) => {
    return (
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 xl:grid-cols-3">
            {technologies.map((technology) => (
                <StackCard
                    key={technology.id}
                    technology={technology}
                    onAdd={onAddToStack}
                />
            ))}
        </div>
    );
};

export default AvailableStack;