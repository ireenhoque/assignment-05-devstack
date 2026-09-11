import React from 'react';
import type { IDevStack } from '../../types/devStackType';

interface YourStackProps {
    stack: IDevStack[];
    onRemove: (id: IDevStack['id']) => void;
}

const YourStack = ({ stack, onRemove }: YourStackProps) => {
    return (
        <aside className="h-fit rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            {/* Header */}
            <div className="mb-4">
                <h2 className="text-sm font-semibold text-slate-900">
                    Your Stack
                </h2>

                <p className="mt-1 text-[10px] text-slate-400">
                    {stack.length === 0
                        ? 'No technologies selected yet.'
                        : `${stack.length} technologies selected.`}
                </p>
            </div>

            {/* Empty state */}
            {stack.length === 0 && (
                <div className="flex h-16 items-center justify-center rounded-lg border border-dashed border-slate-200">
                    <span className="text-[10px] text-slate-400">
                        Your stack is empty.
                    </span>
                </div>
            )}

            {/* Selected technologies */}
            {stack.length > 0 && (
                <div className="space-y-2">
                    {stack.map((technology) => (
                        <div
                            key={technology.id}
                            className="flex items-center gap-2 rounded-lg border border-slate-100 bg-slate-50 p-2"
                        >
                            <img
                                src={technology.icon}
                                alt={technology.name}
                                className="h-6 w-6 object-contain"
                            />

                            <div className="min-w-0 flex-1">
                                <p className="truncate text-[11px] font-medium text-slate-800">
                                    {technology.name}
                                </p>

                                <p className="text-[9px] text-slate-400">
                                    {technology.category}
                                </p>
                            </div>

                            <button
                                onClick={() => onRemove(technology.id)}
                                className="text-xs text-slate-400 transition-colors hover:text-red-500"
                                aria-label={`Remove ${technology.name}`}
                            >
                                ×
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </aside>
    );
};

export default YourStack;