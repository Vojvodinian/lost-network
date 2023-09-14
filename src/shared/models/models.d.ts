type NBAPlayerModel = {
  first_name: string;
  height_feet?: string;
  height_inches?: string;
  id: number;
  last_name: string;
  position?: string;
  team: TeamModel;
  weight_pounds?: string;
};

type TeamModel = {
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
  full_name: string;
  id: number;
  name: string;
};