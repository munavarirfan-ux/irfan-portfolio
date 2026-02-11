/**
 * Case study content schema – data-driven so you can reuse for other case studies.
 * Edit this file to change copy; replace image paths with your assets in public/case-studies/<slug>/.
 */

export type MetaItem = { label: string; value: string }
export type StatChip = { label: string; value: string }
export type MethodologyStep = {
  index: string
  title: string
  pillLabel: string
  description: string
}
export type DecisionBlock = {
  /** Token above heading (e.g. "Decision 01") */
  token?: string
  title: string
  /** What we did (optional, for What/Why/Outcome/Impact layout) */
  what?: string
  why: string
  options: string
  finalSolution: string
  /** Outcome (optional) */
  outcome?: string
  /** Impact – separate from trade-off when both are shown */
  impact?: string
  tradeOff: string
  imagePath: string
  imageAlt: string
  /** Optional: 3 screen images for iPhone mockups (overrides default set) */
  screenImagePaths?: [string, string, string]
  screenImageAlts?: [string, string, string]
}
export type ScreenTriplet = {
  title?: string
  description?: string
  /** Three image paths for the 3 phone mockups */
  imagePaths: [string, string, string]
  imageAlts: [string, string, string]
}
export type ValidationOutcome = {
  validation: { bullets: string[]; metrics?: string[] }
  outcome: { bullets: string[]; quote?: string }
}
export type ClosingCTA = {
  statement: string
  /** Word or phrase to highlight with gradient (e.g. "measurable outcomes") */
  highlight: string
  primaryButton: { label: string; href: string }
  secondaryButton: { label: string; href: string }
}

export type CaseStudyData = {
  slug: string
  meta: { title: string; description: string }
  hero: {
    label?: string
    title: string
    subtitle: string
    summary: string[]
    meta: MetaItem[]
    stats: StatChip[]
  }
  methodology: {
    /** Small tag above heading (e.g. "Process Methodology") */
    tag?: string
    heading: string
    /** Phrase inside heading to highlight with accent gradient */
    highlight?: string
    description?: string
    /** Subheading below description (e.g. "How I used AI to move faster") */
    subheading?: string
    steps: MethodologyStep[]
  }
  decisions: {
    heading: string
    /** Subtitle/description below the main heading */
    description?: string
    blocks: DecisionBlock[]
  }
  screenGroups?: ScreenTriplet[]
  validationOutcome: ValidationOutcome
  closing: ClosingCTA
}

const droparHeroSummary = [
  'DropAR is a next-generation AR platform for last-mile delivery, enabling drivers to navigate and complete stops using immersive AR overlays. The challenge was to design an experience that reduced cognitive load while keeping safety and accuracy at the center.',
  'We focused on a clear information hierarchy, contextual AR cues, and a single-dashboard view so drivers could see their route progress and stop details at a glance.',
]

const droparMethodologySteps: MethodologyStep[] = [
  { index: '01', title: 'Discovery & Synthesis', pillLabel: 'AI', description: 'Used LLMs to cluster interview notes faster, so I could pivot earlier without waiting days to "finish research".' },
  { index: '02', title: 'Information Architecture', pillLabel: 'AI', description: 'Generated edge-case paths (signal loss, reroutes, mismatch flows) and validated the logic against real delivery steps.' },
  { index: '03', title: 'Content & Microcopy', pillLabel: 'AI', description: 'Explored tone variants for voice prompts + error states, then rewrote with real delivery context (no generic copy).' },
  { index: '04', title: 'Prototyping & Iteration', pillLabel: 'AI', description: 'Accelerated layout options + interaction variations, keeping human focus on motion clarity and safety.' },
  { index: '05', title: 'Quality Assurance', pillLabel: 'AI', description: 'Used structured checklists for states + accessibility: glare readability, contrast, touch targets, offline behavior.' },
]

const droparDecisions: DecisionBlock[] = [
  {
    token: 'Decision 01',
    title: 'Consolidated Delivery Workflow (No App Switching)',
    why: 'App switching drives cognitive fatigue and slows deliveries.',
    options: 'Keep navigation external + delivery inside app · Split AR as a separate mode · Unify navigation + verification + confirmation inside one flow',
    finalSolution: 'A single delivery loop: route → AR cues → scan/verify → confirm → next stop.',
    impact: 'Lower mental overhead, fewer "where am I / what next" moments, faster progression between stops (qualitative from observation + workflow mapping).',
    tradeOff: 'More complexity in state handling (offline, reroute, mismatch) — solved through explicit states + quick recovery actions.',
    imagePath: '/case-studies/dropar/decision-1.png',
    imageAlt: 'Consolidated delivery workflow – single flow',
    screenImagePaths: ['/case-studies/dropar/4.png', '/case-studies/dropar/5.png', '/case-studies/dropar/6.png'],
    screenImageAlts: ['Today\'s Route', 'Stop detail – Michael Chen', 'AR Navigation Ready'],
  },
  {
    token: 'Decision 02',
    title: 'AR Cues Over Addresses',
    why: 'Addresses alone fail in dense areas; drivers use landmarks and visual memory.',
    options: 'Stronger map UI · Text-based step guidance · AR camera overlay with directional cues',
    finalSolution: 'Camera view becomes the primary navigation surface, with route arrows and contextual cues.',
    impact: 'Faster orientation at the last 20–50 meters, less second-guessing entrances and drop points (behavioral insight-driven).',
    tradeOff: 'Visibility issues in glare/bright light — handled with contrast-first UI and simplified overlays.',
    imagePath: '/case-studies/dropar/decision-2.png',
    imageAlt: 'AR cues over addresses',
    screenImagePaths: ['/case-studies/dropar/7.png', '/case-studies/dropar/8.png', '/case-studies/dropar/9.png'],
    screenImageAlts: ['Screen 7', 'Screen 8', 'Screen 9'],
  },
  {
    token: 'Decision 03',
    title: 'Smart Parcel Scan With Verification States',
    why: 'Manual input + verification mistakes cause delays and escalations.',
    options: 'Manual entry only · Scan only (no verification) · Scan + match confirmation + mismatch recovery',
    finalSolution: 'Smart parcel scan with clear outcomes: match / mismatch / rescan / manual fallback.',
    impact: 'Reduced error likelihood during time pressure by making the "correct next action" obvious.',
    tradeOff: 'Extra step when scan fails — softened with fast retry + one-tap manual entry.',
    imagePath: '/case-studies/dropar/decision-3.png',
    imageAlt: 'Smart parcel scan with verification states',
    screenImagePaths: ['/case-studies/dropar/10.png', '/case-studies/dropar/11.png', '/case-studies/dropar/12.png'],
    screenImageAlts: ['Screen 10', 'Screen 11', 'Screen 12'],
  },
  {
    token: 'Decision 04',
    title: 'Voice Workflow + Minimal Touch Completion',
    why: 'Drivers multitask; touch-heavy UIs are unsafe and slow during motion.',
    options: 'Full touch UI · Voice-only · Hybrid: voice prompts + simple touch confirmations',
    finalSolution: 'Spoken updates and commands paired with minimal-touch confirmations and one-hand gestures.',
    impact: 'Less screen dependency, smoother flow when hands are occupied, calmer delivery behavior.',
    tradeOff: 'Voice reliability in noisy environments — kept commands limited and always provided touch fallback.',
    imagePath: '/case-studies/dropar/decision-4.png',
    imageAlt: 'Voice workflow + minimal touch completion',
    screenImagePaths: ['/case-studies/dropar/13.png', '/case-studies/dropar/14.png', '/case-studies/dropar/15.png'],
    screenImageAlts: ['Screen 13', 'Screen 14', 'Screen 15'],
  },
]

export const droparCaseStudy: CaseStudyData = {
  slug: 'dropar',
  meta: {
    title: 'DropAR Case Study | Irfan Portfolio',
    description: 'Reimagining Last-Mile Delivery through Augmented Reality. Product design case study.',
  },
  hero: {
    label: 'case study - 2025',
    title: 'DropAR',
    subtitle: 'Reimagining Last-Mile Delivery through Augmented Reality',
    summary: droparHeroSummary,
    meta: [
      { label: 'Role', value: 'Product Designer' },
      { label: 'Timeline', value: '6 Weeks' },
      { label: 'Domain', value: 'AR · Mobility Tech · Logistics' },
      { label: 'Tools', value: 'Figma, After Effects (AR motion overlays), research interviews + shadowing' },
    ],
    stats: [
      { label: '2.5M+', value: 'Downloads' },
      { label: '200k+', value: 'MAU' },
      { label: '90%', value: 'Retention' },
    ],
  },
  methodology: {
    tag: 'Process Methodology',
    heading: 'Architectural efficiency through intelligent integration',
    highlight: 'intelligent integration',
    description: 'A look into how I streamlined the design lifecycle by embedding AI at key friction points, speeding delivery without losing structural clarity.',
    subheading: 'How I used AI to move faster',
    steps: droparMethodologySteps,
  },
  decisions: {
    heading: 'Decisions & Impact',
    description: "An architectural breakdown of the key product decisions that shaped dropAR's core experience.",
    blocks: droparDecisions,
  },
  screenGroups: [
    {
      title: 'Primary Dashboard interface in real time',
      imagePaths: ['/case-studies/dropar/1.png', '/case-studies/dropar/2.png', '/case-studies/dropar/3.png'],
      imageAlts: ['Screen 1', 'Screen 2', 'Screen 3'],
    },
  ],
  validationOutcome: {
    validation: {
      bullets: [
        'Quick checks through mock scenarios (bright glare, reflective surfaces, in-motion gestures) to verify legibility and interaction comfort, iterating the overlay density and control placement.',
        ],
    },
    outcome: {
      bullets: [
        'dropAR delivers a unified, AR-led delivery workflow that reduces switching, improves verification clarity, and keeps drivers focused through contextual cues and voice support.',
      ],
    },
  },
  closing: {
    statement: 'I ship clean, scalable UX that respects constraints and delivers measurable outcomes.',
    highlight: 'measurable outcomes.',
    primaryButton: { label: 'Download Case Study', href: '/case-studies/dropar/dropar%20case%20study.pdf' },
    secondaryButton: { label: 'Download Resume', href: '/Resume/Munavar%20Irfan%20Alisha_Product%20Design_Resume.pdf' },
  },
}
