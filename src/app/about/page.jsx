import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div>
     <div className={styles.imgContainer}>
      <Image src="https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="about img" width={500} height={500}/>
      </div>
      </div>
  )
}

export default AboutPage