import { AxiosResponse } from "axios";
import { CreateNewsLetterSubscriberModel, NewsLetterSubscriberModelInterface } from "@/types/model/NewsLetterSubscriber.model";
import api from "./api";
import { StandardServerResponse } from "@/global";

const createNewsLetterSubscriber = async (data: CreateNewsLetterSubscriberModel) => {
  const result = await api.post<typeof data, AxiosResponse<StandardServerResponse<NewsLetterSubscriberModelInterface>>>("/news_letter_subscriber", data);
  return result.data;
}


const NewsLetterSubscriberApi = {
  createNewsLetterSubscriber,
}

export default NewsLetterSubscriberApi;