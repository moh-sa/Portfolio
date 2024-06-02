export function AnchorEmptyState({ children }: { children: React.ReactNode }) {
  return (
    <div className="pointer-events-none inline-flex h-9 w-full cursor-not-allowed items-center justify-center gap-2 whitespace-nowrap rounded bg-navy-700 px-4 py-2 text-lg capitalize text-stone-300 opacity-75">
      {children}
    </div>
  );
}
