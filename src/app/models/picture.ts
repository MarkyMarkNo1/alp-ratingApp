export interface Comment {
  id?: number;
  fromName?: string;
  comment?: string;
}

export interface Picture {
  id?: number;
  title?: string;
  imageUrl?: string;
  description?: string;
  rate?: number; // one to five stars?
  authorName?: string;
  comments?: Comment[];
}
