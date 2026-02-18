import { kerohireCaseStudy } from '@/lib/case-study-data'

export const metadata = {
  title: kerohireCaseStudy.meta.title,
  description: kerohireCaseStudy.meta.description,
}

export default function KerohireCaseStudyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
