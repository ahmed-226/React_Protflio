import React from "react"
import styles from "./style"
import { Navbar,Testimonials,Billing, Business,CardDeal,CTA,Cleint,Stats,Footer
  ,Hero,GetStarted,FeedbackCard,Button } from "./components"

const App=()=>{

  return (
    <>
      <div className="bg-primary text-white text-3xl w-full overflow-hidden">
        
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar/>
          </div>
        </div>

        <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Hero/>
            </div>
        </div>

        <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}` }>
            <div className={`${styles.boxWidth}`}>
              <Stats/>
              <Business/>
              <Billing/>
              <CardDeal/>
              <Testimonials/>
              <Cleint/>
              <CTA/>
              <Footer/>
            </div>
        </div>
      
      </div>
      
      </>
  )
}

export default App
