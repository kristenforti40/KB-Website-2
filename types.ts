
export interface Horse {
  id: number;
  name: string;
  bio: string;
  imageUrl: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface SuccessStory {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export interface NewsPost {
  id: number;
  title: string;
  date: string;
  content: string;
  imageUrl?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface NavDropdown {
  label: string;
  links: NavLink[];
}

export interface RacingStat {
  starts: number;
  wins: number;
  earnings: string;
}

export interface RacingStats {
  currentYear: RacingStat;
  career: RacingStat;
}
