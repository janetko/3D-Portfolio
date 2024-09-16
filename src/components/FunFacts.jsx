import { motion } from "framer-motion"
import { SectionWrapper } from "../hoc"
import { textVariant } from "../utils/motion"
import { styles } from "../styles"

const FunFacts = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} mb-12`}>A little bit about me</p>
      </motion.div>
    </>
  )
}

export default SectionWrapper(FunFacts, "")