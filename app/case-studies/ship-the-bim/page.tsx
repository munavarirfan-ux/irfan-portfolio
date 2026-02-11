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
import { shipTheBimCaseStudy } from '@/lib/case-study-data'

export const metadata = {
  title: shipTheBimCaseStudy.meta.title,
  description: shipTheBimCaseStudy.meta.description,
}

export default function CaseStudyShipTheBimPage() {
  const hero = shipTheBimCaseStudy.hero
  const methodology = shipTheBimCaseStudy.methodology
  const decisions = shipTheBimCaseStudy.decisions
  const screenGroups = shipTheBimCaseStudy.screenGroups ?? []
  const validationOutcome = shipTheBimCaseStudy.validationOutcome
  const closing = shipTheBimCaseStudy.closing

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

      {/* Hero dashboard image + caption */}
      <section className="case-study-light case-study-dot pt-0 pb-16 md:pb-24">
        <div className="case-study-wrap section-spacing-x">
          <div className="relative overflow-hidden rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/case-studies/ship-the-bim/STB 01.png"
              alt="ShipTheBIM dashboard – overview of BIM readiness status"
              className="w-full h-auto object-cover object-top"
            />
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
            In international BIM workflows, model submissions often fail due to non-compliance with local standards. These rejections typically arise from missing data, incorrect classifications and inconsistent terminology.
          </p>
          <p className="text-base md:text-lg text-[var(--cs-text)] leading-relaxed mb-12 font-sans">
            We discovered that most BIM teams don&apos;t know their model is invalid until it&apos;s too late when the submission fails. The last-minute scramble costs time, trust, and quality.
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-[28px] font-bold leading-tight tracking-tight mb-4 font-sans">
            The Challenge
          </h2>
          <p className="text-base md:text-lg text-[var(--cs-text)] leading-relaxed mb-3 font-sans">
            Teams face three repeating blockers:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-[var(--cs-text)] leading-relaxed mb-6 font-sans">
            <li>Missing properties like FireRating or DoorType</li>
            <li>Inconsistent naming across models and levels</li>
            <li>Manual rework with CSVs, checklists, and no clear next step</li>
          </ul>
          <p className="text-base md:text-lg text-[var(--cs-text)] leading-relaxed mb-12 font-sans">
            Despite having powerful modeling tools, BIM professionals lacked a clear way to assess if a model was submission-ready.
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-[28px] font-bold leading-tight tracking-tight mb-4 font-sans">
            Our Objective
          </h2>
          <p className="text-base md:text-lg text-[var(--cs-text)] leading-relaxed mb-3 font-sans">
            To design a pre-submission validation tool that:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-[var(--cs-text)] leading-relaxed mb-12 font-sans">
            <li>Diagnoses readiness with a clear score</li>
            <li>Surfaces issues categorized by severity</li>
            <li>Uses AI to explain what&apos;s wrong, why it matters, and where it lives in the model</li>
            <li>Outputs a Fix Pack that&apos;s usable by anyone, not just Revit or Archicad experts</li>
          </ul>

          <h2 className="text-2xl sm:text-3xl md:text-[28px] font-bold leading-tight tracking-tight mb-4 font-sans">
            The Solution
          </h2>
          <p className="text-base md:text-lg text-[var(--cs-text)] leading-relaxed mb-4 font-sans">
            Ship the BIM sits between your modeling tools and submission systems. It doesn&apos;t edit models; it validates, explains, and empowers.
          </p>
          <p className="text-base md:text-lg font-medium text-[var(--cs-text)] mb-3 font-sans">
            Core Features
          </p>
          <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-[var(--cs-text)] leading-relaxed font-sans">
            <li><strong>Upload &amp; Profile:</strong> Upload an IFC model, select the correct master profile (e.g., Germany DIN)</li>
            <li><strong>Validation Engine:</strong> Parses the model and assigns a Readiness Score</li>
            <li><strong>AI Suggestions:</strong> every issue is explained with &apos;What, Why, Where&apos; guidance</li>
            <li><strong>Fix Pack Docs:</strong> Download a structured CSV, PDF, or DCF-ready package for each scan</li>
            <li><strong>Terminology Mapping:</strong> Flag mismatched room names or attributes; fix them before submission</li>
          </ul>
        </div>
      </section>

      <ProcessMethodology methodology={methodology} showFlowchart={false} videoSrc="/case-studies/ship-the-bim/Product demo.mov" />

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
              showOptions={false}
              visualVariant="gradient"
              tokenPillVariant="simple"
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
