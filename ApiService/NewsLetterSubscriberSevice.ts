import NewsLetterSubscriberApi from "@/api/newsLetterSubscriberApi";
import { useMutation } from "@tanstack/react-query";
import ApiQueryMutationKeys from "@/consts/ApiQueryMutationKeys";

const createNewsLetterSubscriberServiceMutation = () => {
  return useMutation({
    mutationFn: NewsLetterSubscriberApi.createNewsLetterSubscriber,
    mutationKey: ApiQueryMutationKeys.NewsLetterSubscriberApiQuryMutationKeys.createNewsLetterSubscriberApiMutationKeys
  })
}



const NewsLetterSubscriberService = {
  createNewsLetterSubscriberServiceMutation,
}

export default NewsLetterSubscriberService;