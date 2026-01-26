interface StandardServerResponse<T> {
  error: boolean;
  data: T;
  message: string;
  pagination?: pagination
  token?: string;
}

export interface ApiPaginationQuery {
  page: number;
  perPage: number;
}

interface JobQuery {
  type?: string;
  title?: string;
  company?: string;
  location?: string;
  type?: string;
  category_by_user?: string;
  state_by_user?: string;
  link?: string;
  description?: string;
  remote?: string;
  on_site?: string;
  hybrid?: string;
}

interface NewsLetterSubscriberQuery {

}

export interface ResourceQuery {
  title?: string;
  category?: string;
  author?: string;
  imageUrl?: string;
  summary?: string;
  body?: string;
}

export interface pagination {
  nextPage: number;
  previousPage: number;
  totalPages: number;
}