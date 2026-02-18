import { psymatrixCaseStudy } from '@/lib/case-study-data'

export const metadata = {
  title: psymatrixCaseStudy.meta.title,
  description: psymatrixCaseStudy.meta.description,
}

export default function KerohireCaseStudyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
