import { ziggyCaseStudy } from '@/lib/case-study-data'

export const metadata = {
  title: ziggyCaseStudy.meta.title,
  description: ziggyCaseStudy.meta.description,
}

export default function ZiggyCaseStudyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
