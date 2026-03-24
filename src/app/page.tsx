"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import SplitAbout from '@/components/sections/about/SplitAbout';
import { Clock, Cog, DollarSign, Flag, MapPin, ShieldCheck, Star, Wrench } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="mediumLarge"
        sizing="medium"
        background="grid"
        cardStyle="layered-gradient"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "home",

        },
        {
          name: "Services",
          id: "services",

        },
        {
          name: "Why Choose Us",
          id: "why-choose-us",

        },
        {
          name: "Reviews",
          id: "reviews",

        },
        {
          name: "Service Area",
          id: "service-area",

        },
        {
          name: "About Us",
          id: "about",

        },
      ]}
      brandName="All American Towing LLC"
      bottomLeftText="Boston, NY"
      bottomRightText="(716) 229-1007"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      imagePosition="right"
      title="All American Towing LLC"
      description="24/7 Emergency Towing & Roadside Assistance in Boston, NY. Veteran-Owned • 4.6-Star Rated • Fast Response Times.\n\nWhen you’re stuck, stranded, or in an emergency — we show up. Professional towing and recovery services with honest, upfront pricing. Open 24 Hours. Serving Boston, NY & Surrounding Areas."
      testimonials={[
        {
          name: "Stephen H.",
          handle: "Customer",
          testimonial: "Absolutely a top notch job. They arrived quickly and got my car unstuck fast. They are my new go-to company.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/positive-european-woman-with-long-hair-being-glad-smiling-pleasantly_273609-7692.jpg",
        },
        {
          name: "Sarah M.",
          handle: "Customer",
          testimonial: "Called them for a flat tire, and they were there in record time. Super professional and friendly. Highly recommend!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-successful-businesswoman-suit-cross-arms-chest-smile-look-confident-stan_1258-118782.jpg",
        },
        {
          name: "James K.",
          handle: "Customer",
          testimonial: "My car broke down late at night. All American Towing responded so quickly and towed me safely home. Couldn't be more grateful.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-with-coffee-cup-showing-thumb-up_23-2148055893.jpg",
        },
        {
          name: "Emily R.",
          handle: "Customer",
          testimonial: "Needed a tow after a minor accident. They handled everything with care and made a stressful situation much easier. Great service!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiley-man-posing-indoors-side-view_23-2149883561.jpg",
        },
      ]}
      testimonialRotationInterval={8000}
      buttons={[
        {
          text: "CALL NOW (716) 229-1007",
          href: "tel:+17162291007",
        },
        {
          text: "GET DIRECTIONS",
          href: "https://maps.app.goo.gl/example",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/off-road-car-wilderness_23-2151482980.jpg"
      imageAlt="Powerful tow truck operating at night in an emergency situation"
      mediaAnimation="slide-up"
      fixedMediaHeight={true}
      tag="Emergency? We're Here."
      tagIcon={ShieldCheck}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwelve
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "emergency-towing",
          label: "24/7 Service",
          title: "Emergency Towing",
          items: [
            "Fast dispatch when you need immediate help.",
            "Available around the clock.",
            "Rapid roadside response.",
          ],
        },
        {
          id: "roadside-assistance",
          label: "On-Site Help",
          title: "Roadside Assistance",
          items: [
            "Lockouts, jump starts, tire issues, and more.",
            "Fuel delivery and minor mechanical fixes.",
            "Quick and reliable solutions.",
          ],
        },
        {
          id: "vehicle-recovery",
          label: "Off-Road & Accident",
          title: "Vehicle Recovery",
          items: [
            "Stuck in mud, snow, or off-road? We’ll recover your vehicle safely.",
            "Accident scene management and recovery.",
            "Specialized equipment for tough jobs.",
          ],
        },
        {
          id: "light-medium-duty",
          label: "All Vehicle Types",
          title: "Light & Medium Duty Towing",
          items: [
            "Cars, SUVs, trucks — handled professionally.",
            "Motorcycles and light commercial vehicles.",
            "Damage-free towing techniques.",
          ],
        },
        {
          id: "upfront-pricing",
          label: "No Surprises",
          title: "Upfront Pricing",
          items: [
            "No hidden fees. No surprises. Honest quotes.",
            "Transparent cost breakdown.",
            "Fair rates for quality service.",
          ],
        },
      ]}
      title="Professional Towing & Recovery Services"
      description="Offering a comprehensive range of services, All American Towing LLC ensures you're never left stranded. Dependable help for every situation."
      tag="Our Expert Services"
      tagIcon={Wrench}
    />
  </div>

  <div id="why-choose-us" data-section="why-choose-us">
      <SplitAbout
      textboxLayout="default"
      useInvertedBackground={false}
      title="Why Choose All American Towing LLC?"
      description="Choose a towing service that puts you first. We combine swift response, professional care, and transparent pricing to deliver peace of mind when you need it most."
      bulletPoints={[
        {
          title: "Veteran-Owned & Operated",
          description: "Proudly a veteran-owned business, committed to discipline, integrity, and reliable service for our community.",
          icon: Flag,
        },
        {
          title: "24/7 Rapid Response",
          description: "Emergencies don't wait. Our team is ready around the clock to provide immediate assistance, day or night.",
          icon: Clock,
        },
        {
          title: "Transparent Pricing",
          description: "No hidden fees. We believe in honest, upfront quotes, so you always know what to expect.",
          icon: DollarSign,
        },
        {
          title: "Experienced Professionals",
          description: "Our certified tow operators are skilled, courteous, and equipped to handle any situation safely and efficiently.",
          icon: Cog,
        },
        {
          title: "Local Boston, NY Service",
          description: "As a local business, we know the area and are dedicated to serving our neighbors with unparalleled speed and care.",
          icon: MapPin,
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/man-flag_181624-35439.jpg"
      imageAlt="American flag veteran owned business logo with a silhouette of a man"
      mediaAnimation="slide-up"
      tag="Built on Trust & Service"
      tagIcon={Star}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
