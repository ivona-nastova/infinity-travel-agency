interface LocationType {
  city?: string;
  address?: string;
  country: string;
  region?: string;
}

export interface ImageType {
  url: string;
  thumbnail: string;
  location?: LocationType;
  description?: string;
}

type StateType = "Free" | "Reserved" | "Busy";

interface PriceType {
  prices: number[];
  lastMinutePrices: number[];
}

export interface ArrangementType {
  id: number;
  name: string;
  description: string;
  description2?: string;
  location: LocationType;
  transportDescription: string;
  gallery: ImageType[];
  type: string;
  prices: PriceType;
  availabilityDates: Date[];
  priceForNights: number;
  state: StateType[];
  isPublished: boolean;
  isLastMinute: boolean;
  rating?: number;
  coverPhoto: string;
  miscellanies?: string[];
  exoticDestination?: boolean;
}

export interface TestimonialType {
  id: number;
  title: string;
  rating: number;
  image: string;
  description: string;
  arrangement: string;
}

export interface FormSearchType {
  name: string;
  lastName: string;
  email: string;
  phone: string;
}
