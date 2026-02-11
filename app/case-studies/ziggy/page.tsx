'use client'

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
import { ziggyCaseStudy } from '@/lib/case-study-data'

export default function CaseStudyZiggyPage() {
  const hero = ziggyCaseStudy.hero
  const methodology = ziggyCaseStudy.methodology
  const decisions = ziggyCaseStudy.decisions
  const screenGroups = ziggyCaseStudy.screenGroups ?? []
  const validationOutcome = ziggyCaseStudy.validationOutcome
  const closing = ziggyCaseStudy.closing

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

      {firstScreenGroup && (
        <section className="case-study-light case-study-dot pt-0 pb-16 md:pb-24">
          <div className="case-study-wrap section-spacing-x">
            <div className="relative overflow-hidden rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
              <div className="relative flex overflow-x-auto overflow-y-hidden justify-start md:justify-center items-end gap-4 sm:gap-6 md:gap-8 py-16 sm:py-20 px-4 sm:px-6 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {firstScreenGroup.imagePaths.map((path, i) => (
                  <div key={i} className="w-[200px] sm:w-[240px] md:w-[280px] shrink-0 snap-center snap-always">
                    <div className="bg-[#1a1a1a] rounded-[32px] p-2 shadow-xl">
                      <div className="bg-[#2a2a2a] rounded-[24px] overflow-hidden aspect-[1179/2556] w-full flex items-center justify-center relative">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={path}
                          alt={firstScreenGroup.imageAlts[i] ?? `Screen ${i + 1}`}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {firstScreenGroup.title && (
              <p className="text-sm text-[var(--cs-text-muted)] mt-4 text-center font-sans">
                {firstScreenGroup.title}
              </p>
            )}
          </div>
        </section>
      )}

      {/* Hero visual above Background */}
      <section className="case-study-light case-study-dot pt-0 pb-12 md:pb-16">
        <div className="case-study-wrap section-spacing-x">
          <div className="relative overflow-hidden rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/case-studies/ziggy/Z1.png"
              alt="Ziggy smart home app – welcome home interface with device controls"
              className="w-full h-auto object-cover object-top"
            />
          </div>
        </div>
      </section>

      <section className="case-study-light case-study-dot pt-10 md:pt-14 pb-16 md:pb-24">
        <div className="case-study-wrap section-spacing-x max-w-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-[28px] font-bold leading-tight tracking-tight mb-6 font-sans">
            Background
          </h2>
          <p className="text-base md:text-lg text-[var(--cs-text)] leading-relaxed mb-6 font-sans">
            Smart assistants today are reactive tools. They respond when spoken to, but rarely understand context, emotion, or environmental nuance.
          </p>
          <p className="text-base md:text-lg text-[var(--cs-text)] leading-relaxed mb-6 font-sans">
            Homes are dynamic spaces. Noise levels shift. Lighting changes. Multiple users coexist. Yet most assistants treat every moment the same.
          </p>
          <p className="text-base md:text-lg text-[var(--cs-text)] leading-relaxed mb-12 font-sans">
            Ziggy was designed as a context-aware AI companion, one that adapts quietly to space, behavior, and presence rather than demanding attention.
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-[28px] font-bold leading-tight tracking-tight mb-4 font-sans">
            The Challenge
          </h2>
          <p className="text-base md:text-lg text-[var(--cs-text)] leading-relaxed mb-3 font-sans">
            Through research and workflow mapping, three friction patterns became clear:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-[var(--cs-text)] leading-relaxed mb-6 font-sans">
            <li>Assistants interrupt rather than blend into the environment</li>
            <li>Voice-only interaction limits accessibility and nuance</li>
            <li>Smart home control is fragmented across apps and devices</li>
          </ul>
          <p className="text-base md:text-lg text-[var(--cs-text)] leading-relaxed mb-12 font-sans">
            The deeper issue wasn&apos;t functionality. It was cognitive friction and emotional disconnect.
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-[28px] font-bold leading-tight tracking-tight mb-4 font-sans">
            My Objective
          </h2>
          <p className="text-base md:text-lg text-[var(--cs-text)] leading-relaxed mb-3 font-sans">
            To design a physically embodied AI assistant that:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-[var(--cs-text)] leading-relaxed mb-12 font-sans">
            <li>Understands spatial and behavioral context</li>
            <li>Communicates visually, verbally, and ambiently</li>
            <li>Reduces command-based interaction</li>
            <li>Feels calm, trustworthy, and non-intrusive</li>
          </ul>

          <h2 className="text-2xl sm:text-3xl md:text-[28px] font-bold leading-tight tracking-tight mb-4 font-sans">
            The Solution
          </h2>
          <p className="text-base md:text-lg text-[var(--cs-text)] leading-relaxed mb-6 font-sans">
            Ziggy transforms smart home interaction from command-based control to context-aware assistance.
          </p>
          <p className="text-base md:text-lg text-[var(--cs-text)] leading-relaxed mb-6 font-sans">
            It senses environment, behavior, and presence before responding, combining ambient light cues, subtle motion, and optional voice into one unified system.
          </p>
          <p className="text-base md:text-lg text-[var(--cs-text)] leading-relaxed font-sans">
            Result: fewer interruptions, less friction, and a calmer, more intuitive home experience.
          </p>
        </div>
      </section>

      <ProcessMethodology methodology={methodology} showFlowchart={false} showBottomBlock={false} />

      <section className="decisions-section decisions-dot-pattern py-16 md:py-24">
        <div className="case-study-wrap section-spacing-x">
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
            {decisions.description && (
              <p className="text-base md:text-lg text-[var(--decisions-muted)] font-normal max-w-2xl leading-relaxed font-sans">
                {decisions.description}
              </p>
            )}
          </header>
          {decisions.blocks.map((block, i) => (
            <DecisionBlock
              key={i}
              block={block}
              isFirst={i === 0}
              showOptions={true}
              visualVariant="gradient"
            />
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
