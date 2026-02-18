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
              alt="keroHire – evidence-led hiring platform overview"
              className="block w-full h-auto object-cover object-top align-top"
            />
          </div>
          <p className="text-sm text-[var(--cs-text-muted)] mt-4 text-center font-sans">
            keroHire evidence-led hiring platform
          </p>
        </div>
      </section>

      {/* Background, Challenge, Objective, Core Insight, Solution */}
      <section className="case-study-light case-study-dot py-16 md:py-24">
        <div className="case-study-wrap section-spacing-x max-w-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-[28px] font-bold leading-tight tracking-tight mb-6 font-sans">
            Background
          </h2>
          <p className="text-base md:text-lg text-[var(--cs-text)] leading-relaxed mb-6 font-sans">
            Hiring platforms today are optimized for process, not for decision quality.
          </p>
          <p className="text-base md:text-lg text-[var(--cs-text)] leading-relaxed mb-6 font-sans">
            Most tools successfully move candidates across stages, but they fail to answer the core hiring question: Do we actually have enough reliable evidence to hire this person?
          </p>
          <p className="text-base md:text-lg text-[var(--cs-text)] leading-relaxed mb-6 font-sans">
            During my previous experience working on a hiring-adjacent system at Aptagrim, I observed a recurring pattern: recruiters relied heavily on fragmented signals like CVs, interviews, and gut feeling rather than structured proof.
          </p>
          <p className="text-base md:text-lg text-[var(--cs-text)] leading-relaxed mb-12 font-sans">
            As AI-generated applications and global hiring increased, this gap became even more critical.
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-[28px] font-bold leading-tight tracking-tight mb-4 font-sans">
            The Challenge
          </h2>
          <p className="text-base md:text-lg text-[var(--cs-text)] leading-relaxed mb-3 font-sans">
            Modern hiring faces three major structural problems:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-[var(--cs-text)] leading-relaxed mb-6 font-sans">
            <li>ATS workflows create administrative movement, not better decisions</li>
            <li>Interviews generate subjective opinions instead of comparable evidence</li>
            <li>AI-assisted applications make authenticity harder to interpret</li>
            <li>Cross-border hiring introduces language and context gaps</li>
            <li>German hiring environments demand auditability, seriousness, and defensible documentation</li>
          </ul>
          <p className="text-base md:text-lg text-[var(--cs-text)] leading-relaxed mb-12 font-sans">
            The result: Decisions are made with scattered signals and weak justification.
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-[28px] font-bold leading-tight tracking-tight mb-4 font-sans">
            My Objective
          </h2>
          <p className="text-base md:text-lg text-[var(--cs-text)] leading-relaxed mb-3 font-sans">
            Design a next-generation hiring system that:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-[var(--cs-text)] leading-relaxed mb-6 font-sans">
            <li>Replaces traditional psychometric scoring with evidence-based evaluation</li>
            <li>Reduces bias without removing human judgment</li>
            <li>Supports bilingual hiring (DE/EN)</li>
            <li>Introduces structured decision intelligence across the pipeline</li>
            <li>Feels premium and modern, not like a generic ATS dashboard</li>
          </ul>

          <h2 className="text-2xl sm:text-3xl md:text-[28px] font-bold leading-tight tracking-tight mb-4 font-sans">
            The Core Insight
          </h2>
          <p className="text-base md:text-lg text-[var(--cs-text)] leading-relaxed mb-6 font-sans">
            Traditional psychometrics often fail in real hiring contexts. Personality scores are hard to translate into job performance, create false certainty, and are difficult to defend in serious hiring environments.
          </p>
          <p className="text-base md:text-lg text-[var(--cs-text)] leading-relaxed mb-12 font-sans font-medium">
            Instead of scoring personality, keroHire scores evidence.
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-[28px] font-bold leading-tight tracking-tight mb-4 font-sans">
            The Solution: The Evidence-Led Fit Model
          </h2>
          <p className="text-base md:text-lg text-[var(--cs-text)] leading-relaxed mb-6 font-sans">
            A completely new evaluation framework based on three structured evidence streams rather than psychometric traits.
          </p>

          <h3 className="text-xl font-bold text-[var(--cs-text)] mt-8 mb-3 font-sans">1. Work Signals</h3>
          <p className="text-base md:text-lg text-[var(--cs-text)] leading-relaxed mb-2 font-sans">
            Role-specific micro-simulations designed to mirror real job scenarios. Examples: priority trade-off situations, stakeholder conflict responses, decision-making under ambiguity, execution planning tasks.
          </p>
          <p className="text-base md:text-lg text-[var(--cs-text)] leading-relaxed mb-6 font-sans">
            Output: Decision patterns, reasoning quality, and consistency, not personality labels.
          </p>

          <h3 className="text-xl font-bold text-[var(--cs-text)] mt-8 mb-3 font-sans">2. Communication Signals</h3>
          <p className="text-base md:text-lg text-[var(--cs-text)] leading-relaxed mb-2 font-sans">
            Derived from interviews and written responses, always anchored to real examples. Evaluated dimensions: clarity of thought, logical structure, reasoning depth, consistency across interactions, decision explanation quality.
          </p>
          <p className="text-base md:text-lg text-[var(--cs-text)] leading-relaxed mb-6 font-sans">
            This transforms interviews from subjective conversations into structured evidence.
          </p>

          <h3 className="text-xl font-bold text-[var(--cs-text)] mt-8 mb-3 font-sans">3. Reliability Signals</h3>
          <p className="text-base md:text-lg text-[var(--cs-text)] leading-relaxed mb-2 font-sans">
            A trust layer that highlights evidence gaps instead of forcing premature conclusions. Includes: evidence coverage gaps, contradictions between signals, incomplete assessments, AI-assisted content likelihood bands (LOW / MED / HIGH) with disclaimers.
          </p>
          <p className="text-base md:text-lg text-[var(--cs-text)] leading-relaxed font-sans">
            Output focus: &quot;What should we verify next?&quot; instead of &quot;final verdict&quot;.
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
