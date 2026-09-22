import ScrollReveal from "@/components/ScrollReveal";
import ShinyText from "@/components/ShinyText";

export default function About() {
  return (
    <section className="about section-shell" id="about">
      <div className="section-label">
        <span>(01)</span>
        ABOUT DENOVAL
      </div>

      <div className="about-grid">
        <div className="about-number">
          <ShinyText>01</ShinyText>
        </div>

        <div className="about-content">
          <ScrollReveal>
            <h2>
              Turning ideas
              <br />
              into <em>visuals.</em>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <p>
              DENOVAL is a graphic design space focused on creating visual
              experiences that feel expressive, intentional, and memorable.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={250}>
            <p>
              From identity systems to digital visuals, every project starts
              with an idea and evolves through typography, composition,
              color, and experimentation.
            </p>
          </ScrollReveal>

          <div className="about-tags">
            <span>GRAPHIC DESIGN</span>
            <span>BRANDING</span>
            <span>DIGITAL</span>
            <span>ART DIRECTION</span>
          </div>
        </div>
      </div>
    </section>
  );
}