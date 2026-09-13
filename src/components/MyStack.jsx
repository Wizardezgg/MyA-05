export default function MyStack({ stack, onRemove, onRemoveAll }) {
  const count = stack.length;

  return (
    <aside className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm sticky top-24">
      {/* Header */}
      <div className="text-left">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
          Your Stack
        </h2>
        <p className="text-sm text-slate-400 mt-1">
          {count === 0
            ? 'No technologies selected yet.'
            : `${count} ${count === 1 ? 'Technology' : 'Technologies'} Selected`}
        </p>
      </div>

      {/* Stack content: empty state or item list */}
      <div className="mt-6">
        {count === 0 ? (
          /* Empty state */
          <div className="border border-dashed border-sky-200/80 rounded-2xl py-10 px-4 text-center">
            <p className="text-slate-400 text-sm font-medium">
              Your stack is empty.
            </p>
          </div>
        ) : (
          /* Selected items list */
          <div className="space-y-3">
            <div className="max-h-[460px] overflow-y-auto pr-1 space-y-3">
              {stack.map((item) => (
                <div
                  key={item.id}
                  className="border border-slate-100 rounded-xl p-3.5 flex items-center justify-between bg-white hover:border-slate-200 transition-all"
                >
                  {/* Item info */}
                  <div className="flex items-center gap-3">
                    <img
                      src={item.icon}
                      alt={`${item.name} logo`}
                      className="w-8 h-8 object-contain"
                    />
                    <div className="text-left">
                      <h4 className="text-sm font-bold text-slate-900 leading-tight">
                        {item.name}
                      </h4>
                      <p className="text-xs text-slate-400 font-medium mt-0.5">
                        {item.category}
                      </p>
                    </div>
                  </div>

                  {/* Remove button */}
                  <button
                    type="button"
                    onClick={() => onRemove(item.id)}
                    className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
                    aria-label={`Remove ${item.name}`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            {/* Remove All button */}
            <button
              type="button"
              onClick={onRemoveAll}
              className="w-full mt-4 py-2.5 px-4 rounded-xl border border-red-300 text-red-600 hover:bg-red-50 font-bold text-sm transition-colors duration-200"
            >
              Remove All
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}
