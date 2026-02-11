import FixedNav from '@/components/FixedNav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'DropAR Case Study | Irfan Portfolio',
  description: 'Reimagining Last-Mile Delivery through Augmented Reality. Product design case study.',
}

const metadataItems = [
  { label: 'Role', value: 'Product Designer' },
  { label: 'Timeline', value: '6 Weeks' },
  { label: 'Domain', value: 'AR • Mobility Tech • Logistics' },
  {
    label: 'Tools',
    value: 'Figma, After Effects (AR motion overlays), research interviews + shadowing',
  },
]

export default function DropARCaseStudy() {
  return (
    <main className="min-h-screen">
      <FixedNav />
      <section className="case-study-light case-study-dot relative pt-[calc(var(--nav-height)+32px)] pb-16 sm:pb-20 md:pb-24">
        <div className="case-study-wrap section-spacing-x max-w-content mx-auto">
          <p className="text-[12px] uppercase tracking-wider text-[#6b6b6b] mb-0 font-sans">
            case study - 2025
          </p>
          <h1 className="text-[40px] sm:text-[48px] md:text-[84px] lg:text-[95px] font-black tracking-tight mb-[-23px] font-sans hero-title-gradient">
            DropAR
          </h1>
          <p className="text-[28px] sm:text-[32px] md:text-[36px] leading-tight max-w-2xl mb-12 font-sans font-extralight pt-[11px] pb-[11px]" style={{ color: '#8a8a8a' }}>
            Reimagining Last-Mile Delivery through Augmented Reality
          </p>

          <div className="py-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {metadataItems.map(({ label, value }, i) => (
                <div
                  key={label}
                  className={`flex flex-col ${i > 0 ? 'lg:border-l lg:border-[#e0e0e0] lg:pl-6' : ''}`}
                >
                  <span className="text-[11px] uppercase tracking-wider font-medium text-[#6b6b6b] mb-0.5 font-sans">
                    {label}
                  </span>
                  <span className="text-sm md:text-base text-[#1a1a1a] leading-snug font-sans">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image section: background card with Apple Intelligence gradient + 3 iPhone mockups */}
          <div className="mt-0">
            <div
              className="relative overflow-hidden rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
              style={{
                background: 'linear-gradient(90deg, #FFDAC7 0%, #FFADCB 25%, #E19FEA 50%, #C2A1F0 75%, #B4D7F7 100%)',
                backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, #FFDAC7 0%, #FFADCB 25%, #E19FEA 50%, #C2A1F0 75%, #B4D7F7 100%)',
                backgroundSize: '12px 12px, 100% 100%',
              }}
            >
              <div className="relative flex overflow-x-auto overflow-y-hidden justify-start md:justify-center items-end gap-4 sm:gap-6 md:gap-8 py-16 sm:py-20 px-4 sm:px-6 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {/* iPhone mockup 1 – placeholder for image */}
                <div className="w-[200px] sm:w-[240px] md:w-[280px] shrink-0 snap-center snap-always">
                  <div className="bg-[#1a1a1a] rounded-[32px] p-2 shadow-xl">
                    <div className="bg-[#2a2a2a] rounded-[24px] overflow-hidden aspect-[1179/2556] w-full flex items-center justify-center border-2 border-dashed border-white/10">
                      <span className="text-white/40 text-xs font-sans">Image 1</span>
                    </div>
                  </div>
                </div>
                {/* iPhone mockup 2 – placeholder for image */}
                <div className="w-[200px] sm:w-[240px] md:w-[280px] shrink-0 snap-center snap-always">
                  <div className="bg-[#1a1a1a] rounded-[32px] p-2 shadow-xl">
                    <div className="bg-[#2a2a2a] rounded-[24px] overflow-hidden aspect-[1179/2556] w-full flex items-center justify-center border-2 border-dashed border-white/10">
                      <span className="text-white/40 text-xs font-sans">Image 2</span>
                    </div>
                  </div>
                </div>
                {/* iPhone mockup 3 – placeholder for image */}
                <div className="w-[200px] sm:w-[240px] md:w-[280px] shrink-0 snap-center snap-always">
                  <div className="bg-[#1a1a1a] rounded-[32px] p-2 shadow-xl">
                    <div className="bg-[#2a2a2a] rounded-[24px] overflow-hidden aspect-[1179/2556] w-full flex items-center justify-center border-2 border-dashed border-white/10">
                      <span className="text-white/40 text-xs font-sans">Image 3</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-[#4a4a4a] mt-4 text-center font-sans">
              Primary Dashboard interface in real time
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
