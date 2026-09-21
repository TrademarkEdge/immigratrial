"use client";

import { useState } from "react";

import {
  ArrowRight,
  Award,
  Check,
  ChevronDown,
  Clock3,
  FileCheck2,
  GraduationCap,
  Menu,
  MessageSquareText,
  ShieldCheck,
  UsersRound,
  X
} from "lucide-react";

const services = [
  {
    icon: FileCheck2,
    title: "Expert Opinion Letters",
    copy:
      "Independent, field-specific professional analysis tailored to the evidentiary needs of your U.S. immigration matter.",
    chips: ["H-1B", "EB-1", "EB-2 NIW", "O-1"]
  },
  {
    icon: UsersRound,
    title: "Recommendation Letters",
    copy:
      "Professionally developed letters that communicate your achievements, contributions, expertise and impact with clarity.",
    chips: ["EB-1A", "EB-2 NIW", "O-1"]
  },
  {
    icon: GraduationCap,
    title: "Credential Evaluations",
    copy:
      "Clear evaluation of international education and credentials for U.S. immigration and professional purposes.",
    chips: ["Course-by-Course", "Document-by-Document"]
  },
  {
    icon: Award,
    title: "Position Evaluations",
    copy:
      "Detailed analysis of job duties, requirements, education and experience for specialty-occupation and related matters.",
    chips: ["H-1B", "L-1", "RFE Support"]
  },
  {
    icon: MessageSquareText,
    title: "RFE & NOID Support",
    copy:
      "Focused documentation support built around the specific evidentiary issue identified in your USCIS notice.",
    chips: ["RFE", "NOID", "Case Review"]
  }
];

const faq = [
  [
    "What is an Expert Opinion Letter?",
    "An Expert Opinion Letter is a professional assessment prepared by a qualified expert to address a defined issue relevant to an immigration matter. The scope and evidence considered depend on the engagement."
  ],
  [
    "What is the difference between an Expert Opinion Letter and a Recommendation Letter?",
    "An expert opinion generally provides independent professional analysis. A recommendation letter is an endorsement from someone who knows the beneficiary or their work and can discuss achievements, contributions or qualifications."
  ],
  [
    "Which immigration categories do you support?",
    "Our documentation services support employment-based matters including H-1B, EB-1A, EB-1B, EB-2 NIW, O-1 and L-1, subject to the facts and requirements of the particular engagement."
  ],
  [
    "Can you help with an RFE or NOID?",
    "Yes. We can review the notice and supplied materials to identify documentation needs and determine whether an expert opinion, evaluation or related professional document is appropriate."
  ],
  [
    "Do you guarantee USCIS approval?",
    "No. Immigration outcomes cannot be guaranteed. We provide professional documentation based on the information and evidence supplied and the agreed scope of work."
  ],
  [
    "Do you provide legal advice?",
    "Immigra Evaluations provides professional documentation and evaluation services, not legal representation. For legal advice or petition strategy, clients should consult a qualified U.S. immigration attorney."
  ],
  [
    "Can you work with my immigration attorney?",
    "Yes. Attorneys can communicate case-specific requirements and evidentiary priorities, and we can prepare professional documentation for counsel's review and use."
  ],
  [
    "How quickly can I receive my document?",
    "Turnaround varies by service, complexity, expert availability and selected package. Your confirmed scope and delivery timeframe will be provided before work begins."
  ]
];

const pricing = [
  {
    name: "Essential",
    price: "$495",
    time: "Standard turnaround",
    desc: "For a clearly defined documentation need.",
    features: [
      "Case & document review",
      "Customized document",
      "Expert matching where applicable",
      "1 revision round",
      "Standard processing"
    ]
  },
  {
    name: "Professional",
    price: "$675",
    time: "5–7 business days",
    desc: "For a more tailored engagement with deeper analysis.",
    popular: true,
    features: [
      "Everything in Essential",
      "Expanded evidence analysis",
      "Enhanced customization",
      "2 revision rounds",
      "Priority case support"
    ]
  },
  {
    name: "Priority",
    price: "$875",
    time: "2–3 business days*",
    desc: "For time-sensitive or more complex documentation.",
    features: [
      "Everything in Professional",
      "Priority processing",
      "Expedited delivery where available",
      "Complexity review",
      "Dedicated coordination"
    ]
  }
];

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [serviceTab, setServiceTab] = useState(
    "Expert Opinion Letters"
  );

  const go = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });

    setMenu(false);
  };

  return (
    <main>

      <div className="topbar">
        <div className="wrap topbarInner">

          <span>
            <ShieldCheck size={14} />
            Professional immigration documentation
          </span>

          <span>5,000+ cases completed*</span>

          <span>300+ experts on panel*</span>

          <span>
            AACRAO EDGE-aligned credential evaluation methodology*
          </span>

        </div>
      </div>

      <header className="header">

        <div className="wrap nav">

          <button
            className="logo"
            onClick={() => go("home")}
            aria-label="Immigra Evaluations home"
          >

            <span className="logoIcon">
              IE
            </span>

            <span className="logoWords">
              <b>IMMIGRA</b>
              <small>EVALUATIONS</small>
            </span>

          </button>

          <nav
            className={
              menu
                ? "links show"
                : "links"
            }
          >

            <button onClick={() => go("services")}>
              Services
            </button>

            <button onClick={() => go("pricing")}>
              Pricing
            </button>

            <button onClick={() => go("why")}>
              Why Immigra
            </button>

            <button onClick={() => go("about")}>
              About
            </button>

            <button onClick={() => go("faq")}>
              FAQ
            </button>

            <button onClick={() => go("contact")}>
              Contact
            </button>

            <button
              className="navCta"
              onClick={() => go("contact")}
            >
              Start Your Case
              <ArrowRight size={16} />
            </button>

          </nav>

          <button
            className="hamburger"
            onClick={() => setMenu(!menu)}
            aria-label="Open menu"
          >
            {menu ? <X /> : <Menu />}
          </button>

        </div>

      </header>

      <section id="home" className="hero">

        <div className="wrap heroGrid">

          <div className="heroText">

            <div className="eyebrow">
              PROFESSIONAL DOCUMENTATION · REAL OPPORTUNITIES
            </div>

            <h1>
              Expert evidence for your{" "}
              <em>U.S. immigration journey.</em>
            </h1>

            <p className="lead">
              Expert opinion letters, recommendation letters,
              credential evaluations, position evaluations and
              RFE support — prepared around the evidence that
              matters to your case.
            </p>

            <div className="buttons">

              <button
                className="btn primary"
                onClick={() => go("contact")}
              >
                Start Your Case
                <ArrowRight size={18} />
              </button>

              <button
                className="btn secondary"
                onClick={() => go("services")}
              >
                View Our Services
              </button>

            </div>

            <div className="heroChecks">

              <span>
                <Check />
                USCIS-focused documentation*
              </span>

              <span>
                <Check />
                AACRAO EDGE methodology*
              </span>

              <span>
                <Check />
                Field-specific expertise
              </span>

              <span>
                <Check />
                Confidential handling
              </span>

            </div>

          </div>

          <div className="heroImage">

            <div className="imageGlow" />

            <img
              src="/immigra-hero.png"
              alt="Professional woman representing the professionals Immigra serves"
            />

            <div className="imageOverlay" />

            <div className="heroQuote">
              Your expertise deserves
              <br />
              documentation that
              <br />
              tells the full story.
            </div>

            <div className="heroBadge">

              <div>
                <ShieldCheck />
              </div>

              <span>
                <b>Evidence-led documentation</b>
                <small>
                  Professional support for your case
                </small>
              </span>

            </div>

          </div>

        </div>

      </section>

      <section className="stats">

        <div className="wrap statsGrid">

          <div>
            <strong>5,000+</strong>
            <span>Cases completed*</span>
          </div>

          <div>
            <strong>300+</strong>
            <span>Experts on our panel*</span>
          </div>

          <div>
            <strong>150+</strong>
            <span>Countries represented*</span>
          </div>

          <div>
            <strong>100%</strong>
            <span>Documentation-focused service</span>
          </div>

        </div>

      </section>

      <section id="services" className="section">

        <div className="wrap">

          <div className="sectionIntro">

            <div>

              <div className="eyebrow">
                OUR SERVICES
              </div>

              <h2>
                Comprehensive documentation
                for{" "}
                <em>U.S. immigration.</em>
              </h2>

            </div>

            <p>
              From a single expert opinion to complex
              RFE documentation, every engagement is
              scoped around your actual professional
              and evidentiary needs.
            </p>

          </div>

          <div className="serviceGrid">

            {services.map((service) => {

              const Icon = service.icon;

              return (

                <article
                  className="serviceCard"
                  key={service.title}
                >

                  <div className="serviceIcon">
                    <Icon />
                  </div>

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.copy}
                  </p>

                  <div className="chips">

                    {service.chips.map((chip) => (
                      <span key={chip}>
                        {chip}
                      </span>
                    ))}

                  </div>

                  <button
                    onClick={() => go("contact")}
                  >
                    Learn More
                    <ArrowRight />
                  </button>

                </article>

              );

            })}

          </div>

        </div>

      </section>

      <section className="splitSection">

        <div className="wrap splitGrid">

          <div className="splitCopy">

            <div className="eyebrow">
              FOR A BRIGHTER TOMORROW
            </div>

            <h2>
              Your potential knows
              <em> no borders.</em>
            </h2>

            <p>
              Your education, research, leadership,
              innovation and professional achievements
              represent years of work. We help turn that
              record into clear, credible professional
              documentation.
            </p>

            <button
              className="btn primary"
              onClick={() => go("contact")}
            >
              Start Your Journey
              <ArrowRight />
            </button>

          </div>

          <div className="audienceBox">

            <div className="audience">

              <div className="audIcon">
                <ShieldCheck />
              </div>

              <div>

                <h3>
                  I'm an Attorney
                </h3>

                <p>
                  Partner with a specialized
                  documentation provider for
                  your clients.
                </p>

                <button
                  onClick={() => go("contact")}
                >
                  Attorney Services
                  <ArrowRight />
                </button>

              </div>

            </div>

            <div className="divider" />

            <div className="audience">

              <div className="audIcon">
                <UsersRound />
              </div>

              <div>

                <h3>
                  I'm a Petitioner
                </h3>

                <p>
                  Get professional documentation
                  tailored to your immigration matter.
                </p>

                <button
                  onClick={() => go("contact")}
                >
                  Get Started
                  <ArrowRight />
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="section categories">

        <div className="wrap">

          <div className="center">

            <div className="eyebrow">
              IMMIGRATION CATEGORIES
            </div>

            <h2>
              Built for your{" "}
              <em>immigration goals.</em>
            </h2>

            <p>
              Professional documentation for a range
              of employment-based U.S. immigration matters.
            </p>

          </div>

          <div className="categoryGrid">

            {[
              ["H-1B", "Specialty Occupation"],
              ["EB-1A", "Extraordinary Ability"],
              ["EB-1B", "Outstanding Researchers & Professors"],
              ["EB-2 NIW", "National Interest Waiver"],
              ["O-1", "Individuals of Extraordinary Ability"],
              ["L-1", "Intracompany Transferees"]
            ].map(([title, text]) => (

              <button
                className="categoryCard"
                key={title}
                onClick={() => go("contact")}
              >

                <div className="categoryIcon">
                  <Award />
                </div>

                <strong>
                  {title}
                </strong>

                <span>
                  {text}
                </span>

                <ArrowRight />

              </button>

            ))}

          </div>

        </div>

      </section>

      <section
        id="pricing"
        className="section pricingSection"
      >

        <div className="wrap">

          <div className="center">

            <div className="eyebrow">
              POPULAR SERVICES & PRICING
            </div>

            <h2>
              Transparent pricing.
              <em> Flexible options.</em>
            </h2>

            <p>
              Choose the level of support that fits
              the complexity and timing of your
              documentation need.
            </p>

          </div>

          <div className="tabs">

            {[
              "Expert Opinion Letters",
              "Recommendation Letters",
              "Credential Evaluations",
              "Position Evaluations",
              "RFE Support"
            ].map((tab) => (

              <button
                key={tab}
                className={
                  serviceTab === tab
                    ? "active"
                    : ""
                }
                onClick={() => setServiceTab(tab)}
              >
                {tab}
              </button>

            ))}

          </div>

          <div className="pricingGrid">

            {pricing.map((plan) => (

              <article
                className={
                  plan.popular
                    ? "priceCard popularCard"
                    : "priceCard"
                }
                key={plan.name}
              >

                {plan.popular && (
                  <div className="popularTag">
                    MOST REQUESTED
                  </div>
                )}

                <h3>
                  {plan.name}
                </h3>

                <div className="bigPrice">
                  {plan.price}
                  <small>
                    starting
                  </small>
                </div>

                <div className="time">
                  <Clock3 />
                  {plan.time}
                </div>

                <p>
                  {plan.desc}
                </p>

                <div className="features">

                  {plan.features.map((feature) => (

                    <span key={feature}>
                      <Check />
                      {feature}
                    </span>

                  ))}

                </div>

                <button
                  onClick={() => go("contact")}
                >
                  {plan.popular
                    ? "Choose Professional"
                    : "Get Started"}

                  <ArrowRight />

                </button>

              </article>

            ))}

          </div>

          <div className="microPrices">

            <div>
              <b>
                Recommendation Letters
              </b>
              <span>
                From $395
              </span>
            </div>

            <div>
              <b>
                Course-by-Course Evaluations
              </b>
              <span>
                From $175
              </span>
            </div>

            <div>
              <b>
                Position Evaluations
              </b>
              <span>
                From $455
              </span>
            </div>

            <div>
              <b>
                RFE Review
              </b>
              <span>
                From $150
              </span>
            </div>

          </div>

          <p className="note">
            *Final pricing depends on service type,
            complexity, expert availability and turnaround.
            A written scope is confirmed before work begins.
          </p>

        </div>

      </section>

      <section
        id="why"
        className="section whySection"
      >

        <div className="wrap whyGrid">

          <div>

            <div className="eyebrow">
              WHY IMMIGRA
            </div>

            <h2>
              Because important cases
              deserve{" "}
              <em>more than a template.</em>
            </h2>

            <p className="largeP">
              We built Immigra around a simple principle:
              professional evidence should be understood
              before it is written.
            </p>

            <button
              className="btn secondary"
              onClick={() => go("about")}
            >
              Meet Immigra
              <ArrowRight />
            </button>

          </div>

          <div className="benefitGrid">

            {[
              [
                "Specialized focus",
                "We focus on professional immigration documentation—not general travel or visa processing."
              ],
              [
                "300+ experts*",
                "Our panel spans diverse academic, technical and professional disciplines."
              ],
              [
                "Attorney collaboration",
                "Counsel can communicate case-specific requirements and evidentiary priorities."
              ],
              [
                "Transparent options",
                "Packages make the scope, revisions and turnaround expectations clear."
              ],
              [
                "Quality review",
                "Every deliverable is reviewed for clarity, consistency and completeness within the agreed scope."
              ],
              [
                "Confidential process",
                "Professional records, credentials and case materials are handled with discretion."
              ]
            ].map(([title, description], index) => (

              <div
                className="benefit"
                key={title}
              >

                <span>
                  0{index + 1}
                </span>

                <div>

                  <h3>
                    {title}
                  </h3>

                  <p>
                    {description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      <section className="standards">

        <div className="wrap standardsGrid">

          <div>

            <div className="eyebrow light">
              QUALITY & STANDARDS
            </div>

            <h2>
              Built for serious{" "}
              <em>professional documentation.</em>
            </h2>

            <p>
              Our applicable credential evaluation
              services are designed with AACRAO EDGE
              reference standards and relevant U.S.
              documentation requirements in mind.*
            </p>

          </div>

          <div className="standardCards">

            <div>

              <ShieldCheck />

              <b>
                USCIS-focused documentation*
              </b>

              <span>
                Structured around the evidentiary
                purpose of the engagement.
              </span>

            </div>

            <div>

              <GraduationCap />

              <b>
                AACRAO EDGE-aligned evaluations*
              </b>

              <span>
                Applied to applicable international
                credential evaluation services.
              </span>

            </div>

          </div>

        </div>

      </section>

      <section
        id="about"
        className="section aboutSection"
      >

        <div className="wrap aboutGrid">

          <div className="aboutMark">
            IE
          </div>

          <div>

            <div className="eyebrow">
              ABOUT IMMIGRA EVALUATIONS
            </div>

            <h2>
              Professional expertise,
              <em> purpose-built for immigration.</em>
            </h2>

            <p>
              Immigra Evaluations provides specialized
              professional documentation for U.S.
              employment-based immigration matters.
              We help turn academic credentials,
              professional achievements, occupational
              expertise and career impact into clear,
              credible documentation.
            </p>

            <p>
              Our work is designed to complement the
              work of immigration counsel and give
              petitioners access to professional
              documentation organized around the
              purpose of their case.
            </p>

            <div className="aboutPills">

              <span>Accuracy</span>
              <span>Integrity</span>
              <span>Confidentiality</span>
              <span>Responsiveness</span>

            </div>

          </div>

        </div>

      </section>

      <section className="process">

        <div className="wrap">

          <div className="center">

            <div className="eyebrow">
              THE IMMIGRA PROCESS
            </div>

            <h2>
              From documents to{" "}
              <em>opportunity.</em>
            </h2>

            <p>
              A simple, transparent process designed
              around your convenience.
            </p>

          </div>

          <div className="processGrid">

            {[
              [
                "01",
                "Tell us about your case",
                "Complete a short intake and identify the documentation you need."
              ],
              [
                "02",
                "Submit your materials",
                "Share your CV, credentials, employment information and relevant case materials."
              ],
              [
                "03",
                "Review & scope",
                "We confirm the appropriate service, requirements and timeline."
              ],
              [
                "04",
                "Expert matching",
                "Where applicable, an appropriate professional is selected from our panel."
              ],
              [
                "05",
                "Development & review",
                "Your document is developed and reviewed against the agreed scope."
              ],
              [
                "06",
                "Secure delivery",
                "Receive your completed documentation electronically for your records or counsel."
              ]
            ].map(([number, title, text]) => (

              <div
                className="processItem"
                key={number}
              >

                <b>
                  {number}
                </b>

                <h3>
                  {title}
                </h3>

                <p>
                  {text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      <section
        id="faq"
        className="section faqSection"
      >

        <div className="wrap faqGrid">

          <div>

            <div className="eyebrow">
              FREQUENTLY ASKED QUESTIONS
            </div>

            <h2>
              Questions before you{" "}
              <em>begin?</em>
            </h2>

            <p>
              Clear answers to questions clients
              and attorneys ask most often.
            </p>

            <button
              className="btn primary"
              onClick={() => go("contact")}
            >
              Ask Us Directly
              <ArrowRight />
            </button>

          </div>

          <div className="faqList">

            {faq.map(([question, answer], index) => (

              <div
                className="faqItem"
                key={question}
              >

                <button
                  onClick={() =>
                    setFaqOpen(
                      faqOpen === index
                        ? null
                        : index
                    )
                  }
                >

                  <span>
                    {question}
                  </span>

                  <ChevronDown
                    className={
                      faqOpen === index
                        ? "rotated"
                        : ""
                    }
                  />

                </button>

                {faqOpen === index && (

                  <p>
                    {answer}
                  </p>

                )}

              </div>

            ))}

          </div>

        </div>

      </section>

      <section
        id="contact"
        className="contact"
      >

        <div className="wrap contactGrid">

          <div>

            <div className="eyebrow light">
              START YOUR CASE
            </div>

            <h2>
              Let's identify the{" "}
              <em>right documentation</em>{" "}
              for your case.
            </h2>

            <p>
              Tell us what you need. Our team will
              review your request and guide you to
              the appropriate service and package.
            </p>

            <div className="contactInfo">

              <div>

                <span>
                  EMAIL
                </span>

                <b>
                  info@immigraevaluations.com
                </b>

              </div>

              <div>

                <span>
                  FOR ATTORNEYS
                </span>

                <b>
                  Priority case coordination available
                </b>

              </div>

            </div>

          </div>

          <form
            className="form"
            action="https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID"
            method="POST"
          >

            <div className="formRow">

              <label>
                Full Name

                <input
                  name="name"
                  required
                  placeholder="Your full name"
                />

              </label>

              <label>
                Email

                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                />

              </label>

            </div>

            <div className="formRow">

              <label>
                Immigration Category

                <select
                  name="category"
                  defaultValue=""
                >

                  <option
                    value=""
                    disabled
                  >
                    Select category
                  </option>

                  <option>H-1B</option>
                  <option>EB-1A</option>
                  <option>EB-1B</option>
                  <option>EB-2 NIW</option>
                  <option>O-1</option>
                  <option>L-1</option>
                  <option>Other</option>

                </select>

              </label>

              <label>
                Service Needed

                <select
                  name="service"
                  defaultValue=""
                >

                  <option
                    value=""
                    disabled
                  >
                    Select service
                  </option>

                  <option>
                    Expert Opinion Letter
                  </option>

                  <option>
                    Recommendation Letter
                  </option>

                  <option>
                    Credential Evaluation
                  </option>

                  <option>
                    Position Evaluation
                  </option>

                  <option>
                    RFE / NOID Support
                  </option>

                  <option>
                    Not sure yet
                  </option>

                </select>

              </label>

            </div>

            <label>

              Tell Us About Your Request

              <textarea
                name="message"
                required
                placeholder="Briefly describe your case and the documentation you are looking for..."
              />

            </label>

            <label className="checkBox">

              <input
                type="checkbox"
                required
              />

              <span>
                I understand that Immigra Evaluations
                provides professional documentation
                services and not legal representation.
              </span>

            </label>

            <button
              className="btn primary full"
              type="submit"
            >
              Request a Case Review
              <ArrowRight />
            </button>

          </form>

        </div>

      </section>

      <footer className="footer">

        <div className="wrap footerGrid">

          <div>

            <button
              className="logo footerLogo"
              onClick={() => go("home")}
            >

              <span className="logoIcon">
                IE
              </span>

              <span className="logoWords">

                <b>
                  IMMIGRA
                </b>

                <small>
                  EVALUATIONS
                </small>

              </span>

            </button>

            <p>
              Expert documentation for U.S. immigration.
            </p>

          </div>

          <div>

            <h4>
              Services
            </h4>

            <button onClick={() => go("services")}>
              Expert Opinion Letters
            </button>

            <button onClick={() => go("services")}>
              Recommendation Letters
            </button>

            <button onClick={() => go("services")}>
              Credential Evaluations
            </button>

            <button onClick={() => go("services")}>
              RFE Support
            </button>

          </div>

          <div>

            <h4>
              Company
            </h4>

            <button onClick={() => go("why")}>
              Why Immigra
            </button>

            <button onClick={() => go("about")}>
              About
            </button>

            <button onClick={() => go("faq")}>
              FAQ
            </button>

            <button onClick={() => go("contact")}>
              Contact
            </button>

          </div>

        </div>

        <div className="wrap footerBottom">

          <span>
            © 2026 Immigra Evaluations.
            All rights reserved.
          </span>

          <span>
            Privacy · Terms
          </span>

        </div>

        <div className="wrap disclaimer">

          *Business-specific statistics and claims should
          only be published after they have been verified
          and can be substantiated. References to USCIS
          compliance must not imply USCIS endorsement,
          certification or approval. AACRAO EDGE references
          should only be used for applicable credential
          evaluation services actually performed using the
          relevant methodology. Immigra Evaluations does
          not guarantee an immigration outcome and does
          not provide legal representation unless separately
          stated by a properly licensed attorney.

        </div>

      </footer>

    </main>
  );
}
