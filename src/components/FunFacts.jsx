import { motion } from "framer-motion"
import { SectionWrapper } from "../hoc"
import { fadeIn } from "../utils/motion"
import { styles } from "../styles"
import { funfacts } from "../constants"
import { Tilt } from "react-tilt"
import ImgSlider from "./ImgSlider"

const FactCard = ({title, image, text}) => {
  return (
    <div>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-white shadow-lg rounded-md p-4 flex flex-col items-center w-[300px] h-[365px]'
      >
        <div className="bg-gray-200 w-full h-[250px] mb-4 flex justify-center items-center">
          <img 
            src={image} 
            alt={title}
            className="object-fill w-full h-full rounded-md"
          />
        </div>
        <p className="text-[13px] text-black mt-2 font-bold font-comic">{text}</p>
      </Tilt>
    </div>
  )
}



const FunFacts = () => {
  return (
    <>
      <motion.div variants={fadeIn('', '', 0.2)}>
          <p className={`${styles.sectionSubText} mb-12 text-center`}>Life Outside the Terminal</p>
      </motion.div>
      <motion.div variants={fadeIn('', '', 0.3)}>
        <ImgSlider>
          {funfacts.map((funfact) => (
            <FactCard key={funfact.title} {...funfact}/>
          ))}
        </ImgSlider>
      </motion.div>
    </>
  )
}

export default SectionWrapper(FunFacts, "")