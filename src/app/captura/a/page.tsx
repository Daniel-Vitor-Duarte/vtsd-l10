import HeadA from "@/app/components/HeadA"
import Mid from "@/app/components/Mid"
import Footer from "@/app/components/Footer"
import { Suspense } from 'react';
import DataLayer from "@/app/DataLayer";


function CapturaA() {
  return (
    <main>
      <DataLayer
        type_page="captura"
        type_content="pico"
        id_produto="1006882"
        operacao="pico"
        versao_pico="l10"
      />
      <Suspense fallback={<div>Loading...</div>}>
        <HeadA />
        <Mid />
        <Footer />
      </Suspense>
    </main>
  )
}

export default CapturaA