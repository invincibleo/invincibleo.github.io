export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Duowei Tang",
  title: "Ph.D.",
  institution: "Goodix / KU Leuven",
  // Note that links work in the description
  description:
    "I'm a final-year <a href='https://www.stanford.edu'>PhD candidate</a> working at the intersection of causal inference and machine learning. My research focuses on developing robust, interpretable systems that can reason about cause and effect in complex environments.",
  email: "duowei.tang[at]kuleuven.be",
  imageUrl:
    "src/pic/duowei_photo.png",
  googleScholarUrl: "https://scholar.google.be/citations?user=tvp7cesAAAAJ&hl=en",
  githubUsername: "invincibleo",
  linkedinUsername: "duowei-tang-64ba24153",
  // twitterUsername: "janesmith",
  blogUrl: "https://",
  cvUrl: "https://",
  institutionUrl: "https://www.kuleuven.be",
  // altName: "",
  // secretDescription: "I like dogs.",
};
