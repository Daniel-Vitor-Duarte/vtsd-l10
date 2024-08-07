import HeadA from "@/app/components/HeadA"
import Mid from "@/app/components/Mid"
import Footer from "@/app/components/Footer"
import { Suspense } from 'react';

function CapturaA() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <HeadA />
        <Mid />
        <Footer />
      </Suspense>
    </main>
  )
}

export default CapturaA