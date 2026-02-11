import { psymatrixCaseStudy } from '@/lib/case-study-data'

export const metadata = {
  title: psymatrixCaseStudy.meta.title,
  description: psymatrixCaseStudy.meta.description,
}

export default function PsymatrixCaseStudyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
