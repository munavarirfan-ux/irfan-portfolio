import FixedNav from '@/components/FixedNav'
import Footer from '@/components/Footer'
import {
  CaseStudyHero,
  ProcessMethodology,
  DecisionBlock,
  ValidationOutcome,
  ClosingStatement,
} from '@/components/case-study'
import { psymatrixCaseStudy } from '@/lib/case-study-data'

export default function CaseStudyPsymatrixPage() {
  const hero = psymatrixCaseStudy.hero
  const methodology = psymatrixCaseStudy.methodology
  const decisions = psymatrixCaseStudy.decisions
  const validationOutcome = psymatrixCaseStudy.validationOutcome
  const closing = psymatrixCaseStudy.closing

  return (
    <main className="min-h-screen">
      <FixedNav />

      <CaseStudyHero
        data={hero}
        minimal
      />

      {/* Hero image */}
      <section className="case-study-light case-study-dot pt-0 pb-16 md:pb-24">
        <div className="case-study-wrap section-spacing-x">
          <div className="relative overflow-hidden rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.12)] bg-[var(--cs-bg)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/case-studies/psymatrix/Psy%201.png"
              alt="PsyMatrix – psychometric hiring platform overview"
              className="block w-full h-auto object-cover object-top align-top"
            />
          </div>
          <p className="text-sm text-[var(--cs-text-muted)] mt-4 text-center font-sans">
            PsyMatrix psychometric hiring platform
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
            PsyMatrix is a live psychometric hiring SaaS platform designed to help organizations evaluate candidates using structured behavioral intelligence.
          </p>
          <p className="text-base md:text-lg text-[var(--cs-text)] leading-relaxed mb-6 font-sans">
            Traditional hiring processes rely heavily on resumes and subjective interviews. While psychometric data can offer deeper insight, it is often presented in dense, technical reports that are difficult to interpret.
          </p>
          <p className="text-base md:text-lg text-[var(--cs-text)] leading-relaxed mb-12 font-sans">
            PsyMatrix was built to transform behavioral science into structured, decision-ready intelligence.
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-[28px] font-bold leading-tight tracking-tight mb-4 font-sans">
            The Challenge
          </h2>
          <p className="text-base md:text-lg text-[var(--cs-text)] leading-relaxed mb-3 font-sans">
            The product needed to solve:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-[var(--cs-text)] leading-relaxed mb-6 font-sans">
            <li>Subjective and bias-prone hiring decisions</li>
            <li>Fragmented assessment workflows</li>
            <li>Complex scoring models with low interpretability</li>
            <li>Lack of structured candidate comparison</li>
          </ul>
          <p className="text-base md:text-lg text-[var(--cs-text)] leading-relaxed mb-12 font-sans">
            The difficulty wasn&apos;t collecting data.<br />It was making it usable.
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-[28px] font-bold leading-tight tracking-tight mb-4 font-sans">
            My Objective
          </h2>
          <p className="text-base md:text-lg text-[var(--cs-text)] leading-relaxed mb-3 font-sans">
            As the sole designer, I was responsible for:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-[var(--cs-text)] leading-relaxed mb-6 font-sans">
            <li>Designing the full product architecture from scratch</li>
            <li>Structuring the hiring workflow end-to-end</li>
            <li>Translating behavioral scoring into usable insights</li>
            <li>Building a scalable design system foundation</li>
          </ul>
          <p className="text-base md:text-lg text-[var(--cs-text)] leading-relaxed mb-12 font-sans">
            This was not a feature redesign.<br />It was system creation.
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-[28px] font-bold leading-tight tracking-tight mb-4 font-sans">
            The Solution
          </h2>
          <p className="text-base md:text-lg text-[var(--cs-text)] leading-relaxed mb-6 font-sans">
            PsyMatrix was structured around three core pillars:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-[var(--cs-text)] leading-relaxed mb-6 font-sans">
            <li><strong>Assessment Configuration</strong></li>
            <li><strong>Candidate Intelligence</strong></li>
            <li><strong>Decision Architecture</strong></li>
          </ul>
          <p className="text-base md:text-lg text-[var(--cs-text)] leading-relaxed mb-6 font-sans">
            Each stage was designed to progressively reduce ambiguity.
          </p>
          <p className="text-base md:text-lg text-[var(--cs-text)] leading-relaxed mb-6 font-sans">
            Instead of displaying raw psychometric metrics, the platform converts data into structured hiring signals and role-alignment indicators.
          </p>
          <p className="text-base md:text-lg text-[var(--cs-text)] leading-relaxed font-sans">
            Clarity became the primary design principle.
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
