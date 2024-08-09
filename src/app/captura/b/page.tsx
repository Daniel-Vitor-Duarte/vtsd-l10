import HeadB from "@/app/components/HeadB"
import Mid from "@/app/components/Mid"
import Footer from "@/app/components/Footer"
import { Suspense } from 'react';
import DataLayer from "@/app/DataLayer";


function CapturaB() {
  return (
    <main>
      <DataLayer
        type_page="captura"
        type_content="pico"
        id_produto="1006882"
        operacao="pico"
        versao_pico="L10"
      />
      <Suspense fallback={<div>Loading...</div>}>
        <HeadB />
        <Mid />
        <Footer />
      </Suspense>
    </main>
  )
}

export default CapturaB