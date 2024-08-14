import "./about.scss"
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className="about">
      <div className="description-card">
        <div className="written">
          <motion.h1>
            Get To Know Us
          </motion.h1>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur vitae temporibus architecto accusantium quasi eos a aspernatur placeat, ipsum quaerat. Debitis deserunt dolor laborum, molestias impedit similique quo dignissimos totam?Consequuntur vitae temporibus architecto accusantium quasi eos a aspernatur placeat, ipsum quaerat. Debitis deserunt dolor laborum, molestias impedit similique quo dignissimos totam?
          </h3>
        </div>
        <img src="/logo1.png"/>
      </div>
    </div>
  )
}

export default About
