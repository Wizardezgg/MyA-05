export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="w-12 h-12 border-4 border-slate-200 border-t-[#E11D48] rounded-full animate-spin"></div>
      <p className="mt-4 text-sm text-slate-500 font-medium">
        Loading technologies...
      </p>
    </div>
  );
}
