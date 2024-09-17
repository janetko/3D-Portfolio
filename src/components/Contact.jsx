import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { PhoneCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { github2, linkedin, resume } from "../assets";


const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: ''});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({...form, [e.target.name] : e.target.value})
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'Janet Olowe',
        from_email: form.email,
        to_email: 'janetkolowe@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);
      alert('Thank you! I will get back to you as soon as possible.');
      setForm({ name: '', email: '', message: ''});
    }).catch((error) => {
      setIsLoading(false);
      console.log(error);
      alert('Something went wrong.')
    })
  };

  return (
    <div className='xl:mt-12 xl:flex-row flex-col flex gap-10 overflow-hidden'>
      <motion.div 
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact Me.</h3>

        <div className='flex flex-row sm:w-[25%] w-[40%] justify-between align-middle'>
          <a href='https://www.linkedin.com/in/janet-olowe-036aa8240/' target='_blank'>
            <img src={linkedin} alt='linkedin' className='w-[30px] h-[30px] transform transition-transform duration-300 hover:scale-125'/>
          </a>
          <a href='https://github.com/janetko' target='_blank'>
            <img src={github2} alt='github' className='w-[30px] h-[30px] transform transition-transform duration-300 hover:scale-125'/>
            </a>
          <a href='/resume.pdf' download='janetoloweResume'>
            <img src={resume} alt='resume' className='w-[30px] h-[30px] transform transition-transform duration-300 hover:scale-125'/>
          </a>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Name</span>
            <input 
              type='text'
              name='name'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              placeholder='ex. Jane Doe'
              required
              value={form.name}
              onChange={handleChange}
          />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Email</span>
            <input 
              type='text'
              name='email'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              placeholder='ex. janedoe@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
          />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Message</span>
            <textarea 
              type='text'
              name='message'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              rows='4'
              placeholder='Let me know how I can help you :)'
              required
              value={form.message}
              onChange={handleChange}
          />
          </label>
   
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none text-white font-bold shadow-md shadow-primary rounded-xl active:shadow-none hover:bg-primary'
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <PhoneCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact');