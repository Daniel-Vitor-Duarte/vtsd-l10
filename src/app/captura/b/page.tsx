import HeadB from "@/app/components/HeadB"
import Mid from "@/app/components/Mid"
import Footer from "@/app/components/Footer"
import { Suspense } from 'react';

function CapturaB() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <HeadB />
        <Mid />
        <Footer />
      </Suspense>
    </main>
  )
}

export default CapturaB