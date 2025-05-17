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
    "I'm currently an AI and speech algorithm designer at Goodix Technology. From 2017 to 2021, I had been a doctoral researcher doctoral researcher at the Electrical Engineering Department (ESAT), in the research group of Stadius Center for Dynamical Systems, Signal Processing, and Data Analytics (STADIUS) under the supervision of Prof. Toon van Watershoot, Prof. Luc Geurts and Prof. Peter Kuppens, in KU Leuven, Belgium. In 2015 and 2016, I received two M.Sc. degrees in Electronics Engineering and in Artificial Intelligence, respectively, from KU Leuven, Belgium. My research is focusing on speech and audio processing with deep learning, speech emotion recognition, real-time deep learning for edge devices.",
  email: "duowei.tang[at]kuleuven.be",
  imageUrl:
    "/pic/duowei_photo.png",
  googleScholarUrl: "https://scholar.google.be/citations?user=tvp7cesAAAAJ&hl=en",
  githubUsername: "invincibleo",
  linkedinUsername: "duowei-tang-64ba24153",
  // twitterUsername: "janesmith",
  // blogUrl: "https://",
  // cvUrl: "https://",
  institutionUrl: "https://www.kuleuven.be",
  // altName: "",
  // secretDescription: "I like dogs.",
};