import React from "react";
import { ArrowRight } from "lucide-react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import ServiceCard from "../cards/ServiceCard";
import Button from "../common/Button";
import { SERVICES } from "../../data/services";

export default function ServicesSection({
  limit = 6,
  showHeading = true,
  showViewAll = true,
  className = "",
}) {
  const displayedServices = limit ? SERVICES.slice(0, limit) : SERVICES;

  return (
    <section className={`py-16 sm:py-24 bg-white ${className}`}>
      <Container>
        {showHeading && (
          <SectionHeading
            badge="What We Deliver"
            title="Comprehensive digital capabilities to"
            highlight="scale your enterprise."
            description="From early concept validation to full-scale enterprise software modernization, our cross-functional engineering teams cover every stage of the digital product lifecycle."
          />
        )}

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayedServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        {showViewAll && limit && limit < SERVICES.length && (
          <div className="mt-12 text-center">
            <Button
              to="/services"
              variant="secondary"
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
            >
              Explore All 8 Core Services
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}

