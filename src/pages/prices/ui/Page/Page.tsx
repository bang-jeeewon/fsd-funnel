import { LayoutHeader } from '@/widgets/prices'
import { Prices } from '@/entities/prices'
import { useState } from 'react'

export function PricePage() {
  const [step, setStep] = useState<'step1' | 'step2' | 'step3'>('step1')

  return (
    <>
      {step === 'step1' && (
        <div>
          <LayoutHeader />
          <Prices onNext={() => setStep('step2')} />
        </div>
      )}
      {step === 'step2' && <div>step2</div>}
    </>
  )
}
