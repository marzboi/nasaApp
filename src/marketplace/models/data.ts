export interface Project {
  id: number;
  name: string;
  description: string;
  img: string;
  startDate: Date;
  endDate?: Date;
  isActive: boolean;
  dateUpdated: Date;
  author: Author;
  participants?: Author[];
}

export interface Author {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  projects?: Project[];
}
