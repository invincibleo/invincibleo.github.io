export interface Publication {
  year: string;
  conference?: string;
  journal?: string;
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
    year: "2022",
    journal: "Frontiers in Neuroinformatics",
    title: "Towards Learning Robust Contrastive Embeddings For Binaural Source Localization",
    authors: "Duowei Tang, Maja Taseska, and Toon van Waterschoot",
    paperUrl: "https://www.frontiersin.org/articles/10.3389/fninf.2022.942978/full",
    //codeUrl: "https://github.com/jsmith/scalable-causal-discovery",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "Proposes a weakly-supervised contrastive embedding framework for binaural sound source localization, where a neural network learns low-dimensional representations of binaural cues that preserve spatial proximity, showing robustness to reverberation, noise, and limited training data.",
    imageUrl:
      "/pic/frontiers2022_WSCE_BSL.png",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2021",
    journal: "EURASIP Journal on Audio, Speech, and Music Processing",
    title: "End-to-end speech emotion recognition using a novel context-stacking dilated convolution neural network",
    authors: "Duowei Tang, Peter Kuppens, Luc Geurts, and Toon van Waterschoot",
    paperUrl: "https://link.springer.com/article/10.1186/s13636-021-00208-5",
    //codeUrl: "https://github.com/jsmith/scalable-causal-discovery",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "Proposes an end-to-end speech emotion recognition system using dilated convolutional neural networks with context stacking (DiCCOSER-CS), which eliminates recurrent layers while achieving superior performance to LSTM-based models through its large receptive field and parallelizable architecture, demonstrating improved accuracy on both regression (arousal/valence prediction) and classification tasks.",
    imageUrl:
      "/pic/2021EURASIP_network.png",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2020",
    conference: "28th European Signal Processing Conference (EUSIPCO)",
    title: "Adieu recurrence? End-to-end speech emotion recognition using a context stacking dilated convolutional network",
    authors: "Duowei Tang, Peter Kuppens, Luc Geurts, and Toon van Waterschoot",
    paperUrl: "https://ppw.kuleuven.be/okp/_pdf/Tang2020ARESE.pdf",
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
    paperUrl: "https://ftp.esat.kuleuven.be/pub/SISTA/dtang/reports/19-58.pdf",
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
