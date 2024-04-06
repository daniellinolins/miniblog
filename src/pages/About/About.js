import styles from "./About.module.css";

import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className={styles.about}>
      <h2>
        About Mini <span>Blog</span>
      </h2>
      <p>
        This project is a Mini Blog created with React as front-end and Firebase as back-end.
      </p>
      <Link to="/posts/create" className="btn">New Post</Link>
    </div>
  )
}
export default About