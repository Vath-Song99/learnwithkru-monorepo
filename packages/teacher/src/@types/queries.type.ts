export interface IQueries {
  pageSize?: number;
  pageNumber?: number;
  name?: string;
  subject?: string;
  time_available?: string;
  province?: string;
  pricing?: string;
}

type FilterCondition = {
  [key: string]: any; // Allow any key with any value type for flexibility
};

export type Filter = {
  $or?: FilterCondition[];
  "date_available.day"?: string;
  province?: string;
  pricing?: { $eq: number };
  subject?: string;
};
