

const AuthQuryMutationKeys = Object.freeze({
  createStudentMutationKeys: [ "create_student" ],
  createOrganizationMutationKeys: [ "create_organization" ],
  loginMutationKeys: [ "login" ],
});

const JobQuryMutationKeys = Object.freeze({
  createJobMutationKeys: [ "create_job" ],
  updateJobMutationKeys: [ "update_job" ],
  getJobsQueryKeys: [ "get_jobs" ],
  getJobQueryKeys: [ "get_job" ],
  deleteJobMutationKeys: [ "delete_job" ],
})

const JobApplicationQuryMutationKeys = Object.freeze({
  createJobApplicationMutationKeys: [ "create_Job_application" ],

})

const NewsLetterSubscriberApiQuryMutationKeys = Object.freeze({
  createNewsLetterSubscriberApiMutationKeys: [ "create_news_letter_subscriber" ],

})

const ApiQueryMutationKeys = Object.freeze({
  AuthQuryMutationKeys,
  JobQuryMutationKeys,
  JobApplicationQuryMutationKeys,
  NewsLetterSubscriberApiQuryMutationKeys,
})

export default ApiQueryMutationKeys