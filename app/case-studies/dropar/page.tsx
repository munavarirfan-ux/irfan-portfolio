import FixedNav from '@/components/FixedNav'
import Footer from '@/components/Footer'
import {
  CaseStudyHero,
  ProcessMethodology,
  DecisionBlock,
  ScreenTriplet,
  ValidationOutcome,
  ClosingStatement,
} from '@/components/case-study'
import { droparCaseStudy } from '@/lib/case-study-data'

export const metadata = {
  title: droparCaseStudy.meta.title,
  description: droparCaseStudy.meta.description,
}

export default function CaseStudyDropARPage() {
  const hero = droparCaseStudy.hero
  const methodology = droparCaseStudy.methodology
  const decisions = droparCaseStudy.decisions
  const screenGroups = droparCaseStudy.screenGroups ?? []
  const validationOutcome = droparCaseStudy.validationOutcome
  const closing = droparCaseStudy.closing

  const firstScreenGroup = screenGroups[0]
  const heroScreenPaths = firstScreenGroup
    ? (firstScreenGroup.imagePaths as [string, string, string])
    : undefined
  const heroScreenAlts = firstScreenGroup
    ? (firstScreenGroup.imageAlts as [string, string, string])
    : undefined

  return (
    <main className="min-h-screen">
      <FixedNav />

      <CaseStudyHero
        data={hero}
        screenImagePaths={heroScreenPaths}
        screenImageAlts={heroScreenAlts}
        minimal
      />

      {/* Image section: background card with Apple Intelligence gradient + 3 iPhone mockups */}
      <section className="case-study-light case-study-dot pt-0 pb-16 md:pb-24">
        <div className="case-study-wrap section-spacing-x">
          <div
            className="relative overflow-hidden rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
            style={{
              background: 'linear-gradient(90deg, #FFDAC7 0%, #FFADCB 25%, #E19FEA 50%, #C2A1F0 75%, #B4D7F7 100%)',
              backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, #FFDAC7 0%, #FFADCB 25%, #E19FEA 50%, #C2A1F0 75%, #B4D7F7 100%)',
              backgroundSize: '12px 12px, 100% 100%',
            }}
          >
            <div className="relative flex overflow-x-auto overflow-y-hidden justify-start md:justify-center items-end gap-4 sm:gap-6 md:gap-8 py-16 sm:py-20 px-4 sm:px-6 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-[200px] sm:w-[240px] md:w-[280px] shrink-0 snap-center snap-always">
                  <div className="bg-[#1a1a1a] rounded-[32px] p-2 shadow-xl">
                    <div className="bg-[#2a2a2a] rounded-[24px] overflow-hidden aspect-[1179/2556] w-full flex items-center justify-center relative">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`/case-studies/dropar/${i}.png`}
                        alt={`Screen ${i}`}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm text-[var(--cs-text-muted)] mt-4 text-center font-sans">
            Primary Dashboard interface in real time
          </p>
        </div>
      </section>

      {/* Background, Challenge, Objective, Solution */}
      <section className="case-study-light case-study-dot py-16 md:py-24">
        <div className="case-study-wrap section-spacing-x max-w-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-[28px] font-bold leading-tight tracking-tight mb-6 font-sans">
            Background
          </h2>
          <p className="text-base md:text-lg text-[var(--cs-text)] leading-relaxed mb-6 font-sans">
            Last-mile delivery remains the most expensive and error-prone part of logistics accounting for nearly 53% of total shipping cost. Drivers deal daily with confusing addresses, heavy workloads, and constant switching between navigation, calls, and apps.
          </p>
          <p className="text-base md:text-lg text-[var(--cs-text)] leading-relaxed mb-12 font-sans">
            dropAR was designed to merge real-world navigation and digital workflow into one seamless augmented experience allowing drivers to focus on the road, not the screen.
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-[28px] font-bold leading-tight tracking-tight mb-4 font-sans">
            The Challenge
          </h2>
          <p className="text-base md:text-lg text-[var(--cs-text)] leading-relaxed mb-3 font-sans">
            Delivery agents face three recurring friction points:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-[var(--cs-text)] leading-relaxed mb-12 font-sans">
            <li>Difficulty locating precise drop-off points in dense neighborhoods</li>
            <li>Cognitive overload from switching between navigation and delivery apps</li>
            <li>Manual input and verification errors causing delays</li>
          </ul>

          <h2 className="text-2xl sm:text-3xl md:text-[28px] font-bold leading-tight tracking-tight mb-4 font-sans">
            My Objective
          </h2>
          <p className="text-base md:text-lg text-[var(--cs-text)] leading-relaxed mb-3 font-sans">
            To craft an AR-assisted mobile experience that simplifies last-mile delivery by:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-[var(--cs-text)] leading-relaxed mb-12 font-sans">
            <li>Providing context-aware, real-time guidance</li>
            <li>Reducing mental effort and screen dependency</li>
            <li>Streamlining scan-to-deliver workflow</li>
          </ul>

          {/* Key stats */}
          <div className="flex items-center gap-8 py-6 mb-12 border-y border-[var(--cs-border)]">
            <div>
              <div className="text-4xl md:text-5xl font-bold tracking-tight font-sans text-[var(--cs-text)]">53%</div>
              <div className="text-sm text-[var(--cs-text-muted)] font-sans mt-1">shipping cost</div>
            </div>
            <div className="w-px h-12 bg-[var(--cs-border)]" aria-hidden />
            <div>
              <div className="text-4xl md:text-5xl font-bold tracking-tight font-sans text-[var(--cs-text)]">35%</div>
              <div className="text-sm text-[var(--cs-text-muted)] font-sans mt-1">higher task load</div>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-[28px] font-bold leading-tight tracking-tight mb-4 font-sans">
            The Solution
          </h2>
          <p className="text-base md:text-lg text-[var(--cs-text)] leading-relaxed mb-4 font-sans">
            dropAR overlays digital intelligence on the physical world using AR navigation, voice guidance, and smart recognition to simplify each delivery step.
          </p>
          <p className="text-base md:text-lg font-medium text-[var(--cs-text)] mb-3 font-sans">
            Core features
          </p>
          <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-[var(--cs-text)] leading-relaxed font-sans">
            <li><strong>AR Navigation View:</strong> dynamic route arrows projected onto real environments</li>
            <li><strong>Smart Parcel Scan:</strong> automatic recognition and verification of package IDs</li>
            <li><strong>Voice Workflow:</strong> spoken updates and commands to reduce touch interaction.</li>
            <li><strong>Doorstep Precision Mode:</strong> detects entrances and improves micro-location accuracy</li>
          </ul>
        </div>
      </section>

      <ProcessMethodology methodology={methodology} />

      <section className="decisions-section decisions-dot-pattern py-16 md:py-24">
        <div className="case-study-wrap section-spacing-x">
          {/* Header: gradient pill (white text) + large black title + grey subtitle */}
          <header className="mb-6 md:mb-8">
            {decisions.headerTag && (
              <div className="mb-6">
                <span className="decisions-header-pill tracking-wide">
                  {decisions.headerTag}
                </span>
              </div>
            )}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-[var(--decisions-text)] font-sans mb-4">
              {decisions.heading}
            </h2>
            <p className="text-base md:text-lg text-[var(--decisions-muted)] font-normal max-w-2xl leading-relaxed font-sans">
              {decisions.description ?? 'A detailed breakdown of key decisions made during the project and their subsequent impact.'}
            </p>
          </header>
          {decisions.blocks.map((block, i) => (
            <DecisionBlock key={i} block={block} isFirst={i === 0} />
          ))}
        </div>
      </section>

      {screenGroups.length > 1 && (
        <section className="case-study-dark case-study-dot py-16 md:py-24">
          <div className="case-study-wrap section-spacing-x">
            {screenGroups.slice(1).map((group, i) => (
              <div key={i} className="mb-16 last:mb-0">
                <ScreenTriplet group={group} />
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="case-study-light case-study-dot py-16 md:py-24">
        <div className="case-study-wrap section-spacing-x">
          <ValidationOutcome data={validationOutcome} />
        </div>
      </section>

      <section className="case-study-dark case-study-dot">
        <div className="case-study-wrap section-spacing-x">
          <ClosingStatement data={closing} />
        </div>
      </section>

      <Footer />
    </main>
  )
}
