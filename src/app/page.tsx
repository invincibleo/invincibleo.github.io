import { EducationEntry } from "@/components/education-entry";
import { educationData } from "@/data/education";
import { PublicationEntry } from "@/components/publication-entry";
import { publicationData } from "@/data/publication";
import { ProfileSection } from "@/components/profile-section";
import { aboutMe } from "@/data/aboutme";
import { NewsEntry } from "@/components/news-entry";
import { newsData } from "@/data/news";
import { ExperienceEntry } from "@/components/experience-entry";
import { experienceData } from "@/data/experience";
import { PortfolioEntry } from "@/components/portfolio-entry";
import { portfolioData } from "@/data/portfolio";
import { sectionOrder, Section } from "@/data/section-order";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      {/* Don't have a great call on whether max-w-screen-xl is better */}
      <div className="max-w-screen-xl mx-auto px-8 py-24 flex">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          {/* Left Column - Fixed Info */}
          <div className="col-span-12 md:col-span-4 space-y-12 mb-8 md:mb-0">
            {/* Profile */}
            <div className="md:sticky top-12 space-y-8">
              <ProfileSection aboutMe={aboutMe} />
            </div>
          </div>

          {/* Right Column - Scrolling Content */}
          <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-24">
            {/* About section is typically first */}
            {aboutMe.description && (
              <section id="about">
                <p
                  className="font-serif text-md leading-relaxed text-zinc-700 [&_a]:underline [&_a]:text-zinc-900 [&_a:hover]:text-zinc-600"
                  dangerouslySetInnerHTML={{ __html: aboutMe.description }}
                />
              </section>
            )}
            {/* Map through sectionOrder to render sections in correct order */}
            {sectionOrder.map((sectionName) => {
              // Most of this is redundant... but in case it needs to be unique.
              switch (sectionName) {
                case Section.News:
                  return (
                    newsData.length > 0 && (
                      <section id="news" key={sectionName}>
                        <h2 className="font-serif text-l mb-12 tracking-wide uppercase">
                          News
                        </h2>
                        <div className="space-y-12">
                          {newsData.map((news, index) => (
                            <div key={index}>
                              <NewsEntry news={news} />
                            </div>
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Education:
                  return (
                    educationData.length > 0 && (
                      <section id="education" key={sectionName}>
                        <h2 className="font-serif text-zinc-700 mb-12 tracking-wide uppercase">
                          Education
                        </h2>
                        <div className="space-y-12">
                          {educationData.map((education, index) => (
                            <EducationEntry key={index} education={education} />
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Publication:
                  return (
                    publicationData.length > 0 && (
                      <section id="publications" key={sectionName}>
                        <h2 className="font-serif text-l mb-12 tracking-wide uppercase">
                          Publications
                        </h2>
                        <div className="space-y-12">
                          {publicationData.map((publication, index) => (
                            <div key={index}>
                              <PublicationEntry publication={publication} />
                              {index < publicationData.length - 1 && (
                                <div className="h-px bg-zinc-200 my-8" />
                              )}
                            </div>
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Experience:
                  return (
                    experienceData.length > 0 && (
                      <section id="experiences" key={sectionName}>
                        <h2 className="font-serif text-md mb-12 tracking-wide uppercase">
                          Experience
                        </h2>
                        <div className="space-y-12">
                          {experienceData.map((experience, index) => (
                            <ExperienceEntry
                              key={index}
                              experience={experience}
                            />
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Portfolio:
                  return (
                    portfolioData.length > 0 && (
                      <section id="portfolio" key={sectionName}>
                        <h2 className="font-serif text-md mb-12 tracking-wide uppercase">
                          Portfolio
                        </h2>
                        <div className="space-y-12">
                          {portfolioData.map((portfolio, index) => (
                            <PortfolioEntry key={index} portfolio={portfolio} />
                          ))}
                        </div>
                      </section>
                    )
                  );
                default:
                  return null;
              }
            })}
          </div>
        </div>

          {/* Vertical Navigation Bar */}
          <div className="hidden md:block w-48 ml-8">
            <nav className="sticky top-12 space-y-4">
              <a href="#about" className="text-zinc-700 hover:text-zinc-900 block">
                About
              </a>
              <a href="#news" className="text-zinc-700 hover:text-zinc-900 block">
                News
              </a>
            <a
              href="#publications"
              className="text-zinc-700 hover:text-zinc-900 block"
            >
                Publications
              </a>
            <a
              href="#experience"
              className="text-zinc-700 hover:text-zinc-900 block"
            >
                Experience
              </a>
            <a
              href="#education"
              className="text-zinc-700 hover:text-zinc-900 block"
            >
                Education
              </a>
            <a
              href="#portfolio"
              className="text-zinc-700 hover:text-zinc-900 block"
            >
                Portfolio
              </a>
            </nav>
        </div>
      </div>
    </div>
  );
}