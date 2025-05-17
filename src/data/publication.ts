export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2019",
    conference: "IEEE Workshop on Applications of Signal Processing to Audio and Acoustics (WASPAA)",
    title: "Supervised Contrastive Embeddings for Binaural Source Localization",
    authors: "Duowei Tang, Maja Taseska, and Toon van Waterschoot",
    paperUrl: "https://lirias.kuleuven.be/retrieve/603070",
    //codeUrl: "https://github.com/jsmith/scalable-causal-discovery",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "Using causal discovery to find the causal structure of high-dimensional time series data.",
    imageUrl:
      "/pic/waspaa2019_SCE.png",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2023",
    conference: "ICML",
    title: "Robust Causal Discovery Under Distribution Shift",
    authors: "Jane Smith, Xue Chen, Sarah Johnson",
    paperUrl: "https://arxiv.org/abs/2302.13095",
    codeUrl: "https://github.com/jsmith/robust-causal-discovery",
  },
];
