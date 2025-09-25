import styles from "./Index.module.css";

// Components //
import headShot from "@/assets/img/headShot2x.png";
import Button from "@components/button/Index.jsx";
import Expectation from "@components/expectations/Index.jsx";
import Testimonials from "@components/testimonials/Index.jsx";
import CalendlyEmbed from "@components/calendly/Index.jsx";

// Icons //
import Care from "@assets/icons/Care.jsx";
import Church from "@assets/icons/Church.jsx";
import Handshake from "@assets/icons/Handshake.jsx";
import Hiking from "@assets/icons/Hiking.jsx";
import ForwardArrow from "@assets/icons/ForwardArrow.jsx";
import DownArrow from "@assets/icons/DownArrow";
import Calender from "@assets/icons/Calender.jsx";
import Communication from "@assets/icons/Communication.jsx";
import Conversation from "@assets/icons/Conversation.jsx";
import Finance from "@assets/icons/Finance.jsx";

export default function Home() {
  return (
    <>
      <section className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.heroTxt}>
            <h1>Come As You Are</h1>
            <p>
              Schedule a free consultation <br></br> and start achieving your
              goals today!
            </p>
            <a className={styles.heroMainBtn} href="#contactForm">
              Book a free consultation
            </a>
            <a className={styles.heroSecondaryBtn} href="#aboutMe">
              About Me
            </a>
          </div>
          <div className={styles.heroImg}>
            <img src={headShot} alt="Headshot" />
          </div>
        </div>
      </section>
      <div className={styles.mainWrapper}>
        <section className={styles.divider}>
          <h2>What You Can Expect</h2>
          <div className={styles.expectationContainer}>
            <Expectation
              Icon={Handshake}
              size={48}
              color="black"
              expectation="A Support That Stays"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni eaque dolorem doloremque quis doloribus quae!"
            />
            <Expectation
              Icon={Care}
              size={48}
              color="black"
              expectation="Care First, Always"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni eaque dolorem doloremque quis doloribus quae!"
            />
            <Expectation
              Icon={Church}
              size={48}
              color="black"
              expectation="Growth with Grace"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni eaque dolorem doloremque quis doloribus quae!"
            />
            <Expectation
              Icon={Hiking}
              size={48}
              color="black"
              expectation="Purpose Over Perfection"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni eaque dolorem doloremque quis doloribus quae!"
            />
          </div>
        </section>
        <section className={styles.aboutMe} id="aboutMe">
          <h2>Clarity & Support</h2>
          <p className={styles.aboutMeIntro}>Hi, I'm Cedric —</p>
          <div className={styles.aboutHeader}>
            <img src={headShot} alt="Headshot" />
            <div className={styles.aboutText}>
              <h3>About Me</h3>
              <p className={styles.firstParagraph}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                ex.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                magni reprehenderit reiciendis quasi quibusdam? Velit quis
                quibusdam quaerat perferendis reprehenderit? Lorem, ipsum dolor
                sit amet consectetur adipisicing elit. Mollitia nisi obcaecati
                eius ipsa laboriosam saepe aspernatur rerum sint ratione rem?
              </p>
            </div>
            <a href="#contactForm" className={styles.aboutMeBtn}>
              Book A Chat <ForwardArrow color="#1f1f1f" size={24} />
            </a>
          </div>
        </section>
        <section className={styles.divider}>
          <h2>The Process</h2>
          <div className={styles.processContainer}>
            <div className={styles.iconWrap}>
              <Calender color="black" size={72} />
              <p className={styles.iconHeader}>Schedule a Meeting</p>
              <p>"Choose a time that works for you — no signup, no payment."</p>
              <p>
                "Sessions are 100% free and take less than 2 minutes to
                schedule."
              </p>
              <p>
                "Pick a slot that fits your calender and we'll handle the rest."
              </p>
            </div>
            <div className={styles.downArrow}>
              <DownArrow color="black" size={64} />
            </div>
            <div className={styles.iconWrap}>
              <Conversation color="black" size={72} />
              <p className={styles.iconHeader}>Talk With Us</p>
              <p>
                "We'll dive into your goals, challenges, and what success looks
                like."
              </p>
              <p>
                "Get tailored advice and practical next steps — no generic
                scripts."
              </p>
              <p>
                "A focused, friendly conversation designed to give you clarity
                fast."
              </p>
            </div>
            <div className={styles.downArrow}>
              <DownArrow color="black" size={64} />
            </div>
            <div className={styles.iconWrap}>
              <Finance color="black" size={72} />
              <p className={styles.iconHeader}>See Results</p>
              <p>"Walk away with a clear, actionable plan built for you."</p>
              <p>"Start applying changes immediately and see real progress."</p>
              <p>"Leave the call knowing exactly what to do next."</p>
            </div>
          </div>
        </section>
        <section className={styles.testimonials}>
          <h2>What People Are Saying</h2>
          <div className={styles.testimonialContainer}>
            <Testimonials
              img={headShot}
              review="This is a fantastic service!"
              name="John Doe"
              job="Software Engineer"
            />
            <Testimonials
              img={headShot}
              review="I would highly recommend this to anyone!"
              name="Jane Smith"
              job="Product Manager"
            />
          </div>
        </section>
        <section className={styles.form}>
          <h2 id="contactForm">What are you waiting for?</h2>
          <div className={styles.formContainer}>
            <CalendlyEmbed />
          </div>
        </section>
      </div>
    </>
  );
}
