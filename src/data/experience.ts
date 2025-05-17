export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Feb. 2022 - Present",
    title: "AI / Speech and Audio Processing Algorithm Designer",
    company: "Goodix Technology",
    description:
      "Design efficient deep learning speech enhancement algorithms for the worldwide top-tier smartphones. \n Supervising and managing of internship projects.",
    // advisor: "Peter Wang",
    companyUrl: "https://www.goodix.com/en",
  },
  {
    date: "Aug. 2017 - Oct. 2022",
    title: "Ph.D. Candidate",
    company: "KU Leuven",
    description:
      "Deep Learning for Audio/Speech Applications: A perspective on representation learning and sequence modelling.",
    advisor: "Prof. dr. ir. Toon van Waterschoot, Prof. dr. Peter Kuppens, and Prof. dr. ir. Luc Geurts",
    companyUrl: "https://tvanwate.github.io/team/",
  },
  {
    date: "Sept. 2015 - Aug. 2016",
    title: "Internship Researcher",
    company: "UgenTec",
    description:
      "Semi-supervised machine learning on partially labelled data, application to Polymerase Chain Reaction (PCR) data. \nPropose a semi-supervised model using k-means clustering and LSSVM.",
    // manager: "Prof. dr. ir. Toon van Waterschoot and Prof. dr. ir. Luc Geurts",
    // companyUrl: "https://iiw.kuleuven.be/onderzoek/emedia",
  },
  {
    date: "Sept. 2014 - Aug. 2015",
    title: "Internship Researcher",
    company: "NXP",
    description:
      "Speaker recognition algorithms. Compare, analysis and test state-of-the-art GMM and iVector based speaker recognition algorithms.",
    // manager: "Prof. dr. ir. Toon van Waterschoot and Prof. dr. ir. Luc Geurts",
    // companyUrl: "https://iiw.kuleuven.be/onderzoek/emedia",
  },

];
