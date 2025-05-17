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
  Tang, D., Kuppens, P., Geurts, L., and van Waterschoot, T. (2021, January). Adieu recurrence? End-to-end
speech emotion recognition using a context stacking dilated convolutional network. In 2020 28th European Signal
Processing Conference (EUSIPCO) (pp. 1-5). IEEE.
  {
    year: "2020",
    conference: "28th European Signal Processing Conference (EUSIPCO)",
    title: "Adieu recurrence? End-to-end speech emotion recognition using a context stacking dilated convolutional network",
    authors: "Duowei Tang, Peter Kuppens, Luc Geurts, and Toon van Waterschoot",
    paperUrl: "https://lirias.kuleuven.be/retrieve/623371",
    //codeUrl: "https://github.com/jsmith/scalable-causal-discovery",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "Proposes a fully convolutional end-to-end speech emotion recognition model using dilated causal convolutions and context stacking, eliminating recurrent layers while outperforming LSTM-based approaches in capturing very long temporal dependencies and achieving superior arousal/valence prediction.",
    imageUrl:
      "/pic/eusipco2020_network.png",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2019",
    conference: "IEEE Workshop on Applications of Signal Processing to Audio and Acoustics (WASPAA)",
    title: "Supervised Contrastive Embeddings for Binaural Source Localization",
    authors: "Duowei Tang, Maja Taseska, and Toon van Waterschoot",
    paperUrl: "https://lirias.kuleuven.be/retrieve/603070",
    //codeUrl: "https://github.com/jsmith/scalable-causal-discovery",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "Proposes a supervised contrastive manifold learning method that learns robust embeddings preserving binaural sound source spatial relationships.",
    imageUrl:
      "/pic/waspaa2019_SCE.png",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
];
