import React from 'react'
import Hero from '../component/healthcare/hero/Hero'
import Card from '../component/healthcare/card/Card'
import ARMedicalBilling from '../component/healthcare/ARMedicalBilling/ARMedicalBilling'
// import Trusted from '../component/healthcare/trusted/Trusted'


function HealthCarePage() {
  return (
    <div>
      <Hero/>
      <Card/>
      <ARMedicalBilling/>
      {/* <Trusted/>       */}
    </div>
  )
}

export default HealthCarePage
