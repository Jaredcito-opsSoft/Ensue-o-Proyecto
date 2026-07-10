export type BusinessStatus = "draft" | "published" | "hidden";

export type ServiceStatus =
  | "new"
  | "pending_info"
  | "in_progress"
  | "review"
  | "delivered"
  | "changes_requested"
  | "finished"
  | "suspended";

export type BusinessHour = {
  day: string;
  opensAt?: string;
  closesAt?: string;
  isClosed?: boolean;
  notes?: string;
};

export type BusinessItem = {
  id: string;
  name: string;
  description: string;
  price?: string;
  category?: string;
  imageUrl?: string;
  isVisible: boolean;
  isFeatured?: boolean;
  sortOrder: number;
};

export type BusinessImage = {
  id: string;
  imageUrl: string;
  altText: string;
  caption?: string;
  type: "cover" | "gallery" | "product" | "service" | "place" | "logo";
  sortOrder: number;
};

export type Business = {
  id: string;
  name: string;
  slug: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  whatsapp: string;
  phone?: string;
  email?: string;
  address: string;
  mapsUrl: string;
  facebookUrl?: string;
  instagramUrl?: string;
  tiktokUrl?: string;
  websiteUrl?: string;
  logoUrl?: string;
  coverImageUrl: string;
  primaryColor: string;
  accentColor: string;
  status: BusinessStatus;
  serviceStatus: ServiceStatus;
  hours: BusinessHour[];
  items: BusinessItem[];
  images: BusinessImage[];
};
