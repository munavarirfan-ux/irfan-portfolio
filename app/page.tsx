import FixedNav from '@/components/FixedNav'
import Hero from '@/components/Hero'
import SelectedWork from '@/components/SelectedWork'
import ArchitecturalClarity from '@/components/ArchitecturalClarity'
import Philosophy from '@/components/Philosophy'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <FixedNav />
      <Hero />
      <SelectedWork />
      <ArchitecturalClarity />
      <Philosophy />
      <Footer />
    </main>
  )
}
