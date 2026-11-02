import React from "react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import TestimonialCard from "../cards/TestimonialCard";
import { TESTIMONIALS } from "../../data/testimonials";

export default function TestimonialsSection({ className = "" }) {
  return (
    <section className={`py-16 sm:py-24 bg-[#FFFCF7] border-t border-[#3D3D3D]/10 ${className}`}>
      <Container>
        <SectionHeading
          badge="Client Endorsements"
          title="What leaders say about partnering with"
          highlight="Smart Matrix."
          description="Hear directly from founders, technical executives, and product leaders who rely on our team for mission-critical software engineering."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
}

