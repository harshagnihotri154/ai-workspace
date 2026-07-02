export default function BackgroundEffects() {
  return (
    <>
      <div className="pointer-events-none absolute left-[-180px] top-[-180px] h-[420px] w-[420px] rounded-full bg-violet-700/20 blur-[140px]" />

      <div className="pointer-events-none absolute bottom-[-250px] right-[-150px] h-[500px] w-[500px] rounded-full bg-indigo-700/20 blur-[170px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[250px] w-[250px] -translate-x-1/2 rounded-full bg-fuchsia-700/10 blur-[120px]" />
    </>
  );
}