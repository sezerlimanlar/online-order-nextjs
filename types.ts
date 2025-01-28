export type Category = {
  id: number;
  name: string;
  color: string;
  icon: {
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
