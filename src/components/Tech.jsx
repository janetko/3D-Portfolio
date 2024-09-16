import { SectionWrapper } from "../hoc"
import { BallCanvas } from "./canvas"
import { technologies } from "../constants"
import { useState } from "react"
import { motion } from "framer-motion"
import { textVariant } from "../utils/motion"
import { styles } from "../styles"

const Tech = () => {
  const [hover, setHover] = useState(null)

  return (
    <>
      <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center mb-12`}>Programming Skills and Technologies</p>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div 
            className='w-28 h-28 relative' 
            key={technology.name}
            onMouseEnter={() => setHover(technology.name)}
            onMouseLeave={() => setHover(null)}
          >
            <BallCanvas icon={technology.icon} />

            {hover === technology.name && (
              <div className="absolute bottom-[-35px] left-1/2 transform -translate-x-1/2 text-white bg-none p-2 whitespace-nowrap">
                {technology.name}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "")