"use client";

import SpotlightCard from "@/components/SpotlightCard";
import TiltedCard from "@/components/TiltedCard";
import ScrollReveal from "@/components/ScrollReveal";

const projects = [
  {
    number: "01",
    title: "VISUAL IDENTITY",
    category: "BRANDING",
    className: "project-pink",
    description:
      "A visual identity concept built around expressive typography and a playful visual system.",
  },
  {
    number: "02",
    title: "DIGITAL CAMPAIGN",
    category: "DIGITAL DESIGN",
    className: "project-white",
    description:
      "A digital campaign direction combining editorial layouts with bold graphic elements.",
  },
  {
    number: "03",
    title: "POSTER SERIES",
    category: "GRAPHIC DESIGN",
    className: "project-dark",
    description:
      "Experimental poster compositions exploring type, scale, rhythm, and contrast.",
  },
];

export default function Projects() {
  return (
    <section className="projects section-shell" id="work">
      <div className="section-label">
        <span>(02)</span>
        SELECTED WORK
      </div>

      <div className="projects-heading">
        <ScrollReveal>
          <h2>
            SELECTED
            <br />
            <span>WORK.</span>
          </h2>
        </ScrollReveal>

        <p>
          A collection of visual experiments,
          <br />
          selected projects & design studies.
        </p>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => (
          <ScrollReveal
            key={project.number}
            delay={index * 100}
            className="project-reveal"
          >
            <TiltedCard>
              <SpotlightCard className={`project-card ${project.className}`}>
                <div className="project-card-top">
                  <span>{project.number}</span>
                  <span>{project.category}</span>
                </div>

                <div className="project-visual">
                  <div className="visual-shape visual-shape-one" />
                  <div className="visual-shape visual-shape-two" />
                  <div className="visual-word">
                    {project.title.split(" ")[0]}
                  </div>
                </div>

                <div className="project-card-bottom">
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>

                  <span className="project-arrow">↗</span>
                </div>
              </SpotlightCard>
            </TiltedCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}