export type Item = {
  id: string;
  name: string;
};

export type ForceEngagementMethod = {
  url: string;
  type: string;
  description: string | null;
  title: string;
};

export type ForceData = {
  description: string | null;
  url: string;
  engagement_methods: ForceEngagementMethod[];
  telephone: string;
  id: string;
  name: string;
};

type NeighborhoodLink = {
  url: string;
  description: string | null;
  title: string;
};

export type Neighborhood = {
  url_force: string;
  contact_details: {
    [key: string]: string;
  };
  name: string;
  links: NeighborhoodLink[];
  centre: {
    latitude: string;
    longitude: string;
  };
  locations: Location[];
  description: string;
  id: string;
  population: string;
};

export type CrimeCategory = {
  url: string;
  name: string;
};

export type CrimeSeverity = 'low' | 'medium' | 'high';

export type Crime = {
  category: string;
  location_type: string;
  location: {
    latitude: string;
    street: {
      id: number;
      name: string;
    };
    longitude: string;
  };
  context: string;
  outcome_status: { category: string } | null;
  persistent_id: string;
  id: number;
  location_subtype: string;
  month: string;
};
