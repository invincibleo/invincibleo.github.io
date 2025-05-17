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
      <div className="max-w-screen-lg mx-auto px-8 py-24 flex">
        {/* Main Content */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-0">
          {/* Left Column - Fixed Info */}
          <div className="col-span-12 md:col-span-4 space-y-12 mb-8 md:mb-0">
            <div className="md:sticky top-12 space-y-8">
              <ProfileSection aboutMe={aboutMe} />
            </div>
          </div>

          {/* Right Column - Scrolling Content */}
          <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-24">
            {aboutMe.description && (
              <section id="about">
                <p
                  className="font-serif text-md leading-relaxed text-zinc-700 [&_a]:underline [&_a]:text-zinc-900 [&_a:hover]:text-zinc-600"
                  dangerouslySetInnerHTML={{ __html: aboutMe.description }}
                />
              </section>
            )}
            {sectionOrder.map((sectionName) => {
              // Render sections dynamically
            })}
          </div>
        </div>

        {/* Vertical Navigation Bar */}
        <div className="hidden md:block w-48 ml-8 sticky top-24">
          <nav className="space-y-4">
            <a href="#about" className="text-zinc-700 hover:text-zinc-900 block">
              About
            </a>
            <a href="#publications" className="text-zinc-700 hover:text-zinc-900 block">
              Publications
            </a>
            <a href="#news" className="text-zinc-700 hover:text-zinc-900 block">
              News
            </a>
            {/* Add more links as needed */}
          </nav>
        </div>
      </div>
    </div>
  );
}
