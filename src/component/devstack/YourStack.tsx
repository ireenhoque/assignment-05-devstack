import type { IDevStack } from '../../types/devStackType';

interface YourStackProps {
    stack: IDevStack[];
    onRemove: (id: IDevStack['id']) => void;
    onRemoveAll: () => void;
}

const YourStack = ({
    stack,
    onRemove,
    onRemoveAll,
}: YourStackProps) => {
    return (
        <aside className="h-fit rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            {/* Header */}
            <div className="mb-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-sm font-semibold text-slate-900">
                        Your Stack
                    </h2>

                    <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-slate-100 px-1.5 text-[9px] font-medium text-slate-600">
                        {stack.length}
                    </span>
                </div>

                <p className="mt-1 text-[10px] text-slate-400">
                    {stack.length === 0
                        ? 'No technologies selected yet.'
                        : 'Your selected technologies'}
                </p>
            </div>

            {/* Empty state */}
            {stack.length === 0 ? (
                <div className="flex min-h-[80px] flex-col items-center justify-center rounded-lg border border-dashed border-slate-200 bg-slate-50/50 px-3">
                    <div className="mb-1 text-lg text-slate-300">
                        +
                    </div>

                    <p className="text-center text-[10px] text-slate-400">
                        Your stack is empty
                    </p>
                </div>
            ) : (
                <>
                    {/* Selected technologies */}
                    <div className="space-y-2">
                        {stack.map((technology) => (
                            <div
                                key={technology.id}
                                className="
                                    group
                                    flex items-center gap-2
                                    rounded-lg
                                    border border-slate-100
                                    bg-slate-50
                                    p-2
                                    transition-colors
                                    hover:border-slate-200
                                    hover:bg-white
                                "
                            >
                                {/* Icon */}
                                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white">
                                    <img
                                        src={technology.icon}
                                        alt={technology.name}
                                        className="h-5 w-5 object-contain"
                                    />
                                </div>

                                {/* Info */}
                                <div className="min-w-0 flex-1">
                                    <p className="truncate text-[11px] font-medium text-slate-800">
                                        {technology.name}
                                    </p>

                                    <p className="truncate text-[9px] text-slate-400">
                                        {technology.category}
                                    </p>
                                </div>

                                {/* Remove individual */}
                                <button
                                    type="button"
                                    onClick={() =>
                                        onRemove(technology.id)
                                    }
                                    className="
                                        flex h-6 w-6 shrink-0
                                        items-center justify-center
                                        rounded-md
                                        text-slate-300
                                        transition-all
                                        hover:bg-red-50
                                        hover:text-red-500
                                    "
                                    aria-label={`Remove ${technology.name}`}
                                >
                                    ×
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Remove All */}
                    <button
                        type="button"
                        onClick={onRemoveAll}
                        className="
                            mt-4
                            h-8
                            w-full
                            rounded-md
                            border border-red-200
                            bg-red-50
                            text-[10px]
                            font-medium
                            text-red-500
                            transition-colors
                            hover:bg-red-100
                            active:scale-[0.98]
                        "
                    >
                        Remove all
                    </button>
                </>
            )}
        </aside>
    );
};

export default YourStack;