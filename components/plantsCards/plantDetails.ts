interface PlantDetails {
    author: string;
    bibliography: string;
    common_name: string;
    family: string;
    family_common_name: null | string;
    genus: string;
    genus_id: number;
    id: number;
    image_url: string;
    links: {
      self: string;
      plant: string;
      genus: string;
    };
    rank: string;
    scientific_name: string;
    slug: string;
    status: string;
    synonyms: string[];
    year: number;
  }
  
  export default PlantDetails;
  