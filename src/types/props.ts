export interface HeadingType {
    title: string;
    subtitle: string;
}

export interface FeaturedSpacesType {
    icon: any,
    cover: any;
    name: string;
    total: string;  
}

export interface RecentSpaceListing {
    id: number,
    image: any,
    type: string;
    location: string;
    capacity: number;
    assets: any;
}


export interface ProductDetailsType {
  spaceType: string;
  location: string;
  icon: any;
  reviews: string;
  description: string;
  assets: {
    name: string;
  };
}

export interface SliderType {
  image: any;
  title: string;
  subtitle: string
}
