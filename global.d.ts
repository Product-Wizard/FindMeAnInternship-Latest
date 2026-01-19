interface StandardServerResponse<T> {
  error: boolean;
  data: T;
  message: string;
}

export interface ApiPaginationQuery {
  page: number;
  perPage: number;
  type?: string;
  title?: string;
  company?: string;
  location?: string;
  type?: string;
  category?: string;
  link?: string;
  description?: string;
}

export interface pagination {
  nextPage: number;
  previousPage: number;
  totalPages: number;
}