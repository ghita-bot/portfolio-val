"use client";

import ScrollReveal from "@/components/ScrollReveal";
import SpotlightCard from "@/components/SpotlightCard";
import TiltedCard from "@/components/TiltedCard";

const services = [
  {
    number: "01",
    title: "SOCIAL MEDIA DESIGN",
    text: "Visual content designed to make your social media feel more consistent, expressive, and intentional.",
    image: "/grapik2.jpg",
  },
  {
    number: "02",
    title: "GRAPHIC DESIGN",
    text: "Posters, promotional visuals, digital graphics, and other visual materials built around your idea.",
    image: "/grapik.jpg",
  },
  {
    number: "03",
    title: "VISUAL IDENTITY",
    text: "A visual direction that helps your brand, project, or personal identity feel recognizable.",
    image: "/identity.jpg",
  },
  {
    number: "04",
    title: "CREATIVE CONTENT",
    text: "Creative visual concepts for campaigns, digital content, events, and social platforms.",
    image: "/content.jpg",
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="section-head">
        <span>(01)</span>
        <span>WHAT I CAN DO</span>
      </div>

      <div className="services-intro">
        <ScrollReveal>
          <h2>
            YOUR IDEA.
            <br />
            <span>MY VISUAL.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <p>
            From a simple idea to a complete visual direction.
            Tell me what you have in mind, and let&apos;s turn it
            into something people can see.
          </p>
        </ScrollReveal>
      </div>

      <div className="service-list">
        {services.map((service, index) => (
          <ScrollReveal key={service.number} delay={index * 80}>
            <TiltedCard>
              <SpotlightCard className="service-card">
                
                <div
                  className="service-image"
                  style={{
                    backgroundImage: `url(${service.image})`,
                  }}
                />

                <div className="service-top">
                  <span>{service.number}</span>
                  <span>↗</span>
                </div>

                <div className="service-main">
                  <h3>{service.title}</h3>

                  <p>{service.text}</p>
                </div>

              </SpotlightCard>
            </TiltedCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}