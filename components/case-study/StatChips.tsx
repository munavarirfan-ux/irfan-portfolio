import type { StatChip } from '@/lib/case-study-data'

export default function StatChips({ stats }: { stats: StatChip[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {stats.map(({ label, value }) => (
        <div
          key={value}
          className="px-4 py-2 rounded-full border border-[var(--cs-border)] bg-white/50 dark:bg-white/5 text-[var(--cs-text)] text-sm"
        >
          <span className="font-semibold">{label}</span>
          <span className="text-[var(--cs-text-muted)] ml-1.5">{value}</span>
        </div>
      ))}
    </div>
  )
}
