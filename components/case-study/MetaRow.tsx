import type { MetaItem } from '@/lib/case-study-data'

export default function MetaRow({ items }: { items: MetaItem[] }) {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 py-0"
      role="list"
    >
      {items.map((item, i) => (
        <div
          key={item.label}
          role="listitem"
          className={`flex flex-col ${i > 0 ? 'lg:border-l lg:border-[var(--cs-border)] lg:pl-6' : ''}`}
        >
          <span className="text-[11px] uppercase tracking-wider font-medium text-[var(--cs-text-meta-label)] mb-0.5">
            {item.label}
          </span>
          <span className="text-sm md:text-base text-[var(--cs-text)] leading-snug">
            {item.value}
          </span>
        </div>
      ))}
    </div>
  )
}
