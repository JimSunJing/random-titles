export default function STitle({ title, desc }) {
  return (
    <div className="font-mono">
      <div className="truncate hover:text-ellipsis hover:overflow-visible text-xl text-slate-500 font-bold underline decoration-2 underline-offset-8">
        {title}
      </div>
      <div className="my-2 p-3 text-sm opacity-0 hover:opacity-80 transition-opacity duration-500 ease-in-out delay-75 font-light border-2 rounded-lg border-opacity-0 hover:border-opacity-50 border-zinc-300">
        {desc.slice(0, 50) + "..."}
      </div>
    </div>
  );
}
