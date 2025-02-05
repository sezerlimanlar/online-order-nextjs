export type Category = {
  id: number;
  name: string;
  color: string;
  icon: {
    url: string;
  };
};
export type Products = {
  id: number;
  name: string;
  description: string;
  mrp: string;
  sellingPrice: string;
  itemQuantityType: string;
  slug: string;
  categories: string;
  images: {
    url: string;
  };
};

export type Sliders = {
  id: number;
  url: {
    formats: {
      thumbnail: {
        url: string;
      };
    };
  };
};
