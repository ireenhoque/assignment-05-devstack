import React from 'react';
import type { IDevStack } from '../../types/devStackType';

interface StackCardProps {
    technology: IDevStack;
    onAdd: (technology: IDevStack) => void;
}

const StackCard = ({ technology, onAdd }: StackCardProps) => {
    return (
        <div
            className="
                group flex h-full flex-col
                rounded-xl border border-slate-200
                bg-white p-4 shadow-sm
                transition-all duration-200
                hover:-translate-y-0.5
                hover:border-slate-300
                hover:shadow-md
            "
        >
            {/* Icon + Badge */}
            <div className="mb-4 flex items-start justify-between">
                <div className="flex h-9 w-9 items-center justify-center">
                    <img
                        src={technology.icon}
                        alt={`${technology.name} icon`}
                        className="h-7 w-7 object-contain"
                    />
                </div>

                <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-medium text-blue-500">
                    {technology.badge}
                </span>
            </div>

            {/* Title */}
            <h2 className="mb-1.5 text-[15px] font-semibold text-slate-900">
                {technology.name}
            </h2>

            {/* Description */}
            <p className="mb-4 line-clamp-3 min-h-[54px] text-[11px] leading-[18px] text-slate-500">
                {technology.description}
            </p>

            {/* Metadata */}
            <div className="mb-3 flex items-center justify-between gap-2 text-[10px] text-slate-500">
                <span className="rounded bg-slate-100 px-2 py-1 text-slate-600">
                    {technology.category}
                </span>

                <span>{technology.difficulty}</span>

                <span className="flex items-center gap-1">
                    <span className="text-amber-400">★</span>
                    {technology.rating}
                </span>
            </div>

            {/* Add Button */}
            <button
                type="button"
                onClick={() => onAdd(technology)}
                className="
                    mt-auto h-7 w-full rounded-md
                    bg-slate-950 text-[10px]
                    font-medium text-white
                    transition-colors
                    hover:bg-slate-800
                    active:scale-[0.98]
                "
            >
                Add to Stack
            </button>
        </div>
    );
};

export default StackCard;
