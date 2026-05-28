export type GalleryItem = {
  id: number;
  title: string;
  image?: string;
  color: string;
  detailPage?: string;
};

export type CategoryData = {
  slug: string;
  label: string;
  coverImage?: string;
  coverColor: string;
  items: GalleryItem[];
};

export const galleryCategories: CategoryData[] = [
  {
    slug: "jumping-castles",
    label: "Jumping Castles",
    coverImage: "/gallery-jumping-castles.jpg",
    coverColor: "from-[#ff4fa3] to-[#ff7ebd]",
    items: [
      { id: 1, title: "Princess Castle", color: "from-[#ff4fa3] to-[#ff7ebd]" },
      { id: 2, title: "Pirate Ship", color: "from-[#f97316] to-[#fb923c]" },
      { id: 3, title: "Mega Slide", color: "from-[#8b5cf6] to-[#a78bfa]" },
    ],
  },
  {
    slug: "balloon-decor",
    label: "Balloon Décor",
    coverColor: "from-[#4ecbff] to-[#7be0ff]",
    items: [
      { id: 1, title: "Mermaid Arch", color: "from-[#4ecbff] to-[#7be0ff]" },
      { id: 2, title: "Jungle Safari Arch", color: "from-[#10b981] to-[#34d399]" },
    ],
  },
  {
    slug: "party-packs",
    label: "Party Packs",
    coverImage: "/gallery-party-packs.jpg",
    coverColor: "from-[#8f5cff] to-[#a882ff]",
    items: [
      { id: 1, title: "Party Pack 3D Box Only", image: "/party-packs-box-only.jpg", color: "from-[#8f5cff] to-[#a882ff]", detailPage: "/gallery/party-packs/box-only" },
      { id: 2, title: "3D Box Combo", image: "/party-packs-3d-combo.jpg", color: "from-[#ec4899] to-[#f472b6]", detailPage: "/gallery/party-packs/3d-combo" },
      { id: 3, title: "Standard Party Pack Combo", color: "from-[#f97316] to-[#fb923c]" },
    ],
  },
  {
    slug: "party-favors",
    label: "Party Favors",
    coverImage: "/gallery-boys.jpg",
    coverColor: "from-[#ffd93d] to-[#ffe570]",
    items: [
      { id: 1, title: "Boys", image: "/gallery-boys.jpg", color: "from-[#ffd93d] to-[#ffe570]", detailPage: "/gallery/party-favors/boys" },
      { id: 2, title: "Girls", color: "from-[#06b6d4] to-[#22d3ee]" },
      { id: 3, title: "Corporate", color: "from-[#8f5cff] to-[#b08fff]" },
    ],
  },
];
