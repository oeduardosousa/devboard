function SummaryCard({ title, value }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_0_30px_rgba(168,85,247,0.08)] backdrop-blur-sm">
      <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
        {title}
      </p>
      <h2 className="mt-3 text-3xl font-bold text-white">{value}</h2>
    </div>
  );
}

export default SummaryCard;
