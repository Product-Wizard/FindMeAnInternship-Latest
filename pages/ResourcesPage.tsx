import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Clock,
  User,
  ArrowLeft,
  Calendar,
  Share2,
  Link as LinkIcon,
  Check,
  Facebook,
  Twitter,
  Linkedin,
  Search,
} from "lucide-react";
import { Article } from "../types";
import ResourceService from "@/ApiService/ResourceSevice";
import { useQueryClient } from "@tanstack/react-query";
import ResourceItem from "@/components/ResourceItem";
import { ResourceModelInterface } from "@/types/model/resource.model";
import Paginator from "@/components/Paginator";
import ApiQueryMutationKeys from "@/consts/ApiQueryMutationKeys";
import BlockLoadingIndicator from "@/components/BlockLoadingIndicator";

const PER_PAGE = 20;

export const ResourcesPage: React.FC = () => {
  const queryClient = useQueryClient();
  const [searchParams, setSearchParams] = useSearchParams();
  const articleId = searchParams.get("id");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const fetchResource = ResourceService.fetchResourcesServiceQuery({
    page: page,
    perPage: PER_PAGE,
    author: search,
    body: search,
    category: search,
    title: search,
    summary: search,
  });

  const [activeArticle, setActiveArticle] =
    useState<ResourceModelInterface | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (articleId) {
      const found = fetchResource?.data?.data.find(
        (item) => `${item.id}` == articleId
      );
      if (found) {
        setActiveArticle(found);
        window.scrollTo(0, 0);
      } else {
        setActiveArticle(null);
      }
    } else {
      setActiveArticle(null);
    }
    setCopied(false);
  }, [articleId]);

  const handleResourceClick = (resource: ResourceModelInterface) => {
    setSearchParams({ id: `${resource.id}` });
  };

  const handleBack = () => {
    setSearchParams({});
  };

  const trigerFilterSearch = () => {
    setTimeout(
      () =>
        queryClient.invalidateQueries({
          queryKey: [
            ...ApiQueryMutationKeys.ResourceQuryMutationKeys
              .getResourcesQueryKeys,
            1,
          ],
        }),
      400
    );
  };
  const handleShare = (
    platform: "twitter" | "linkedin" | "facebook" | "copy"
  ) => {
    if (!activeArticle) return;
    const url = window.location.href;
    const text = `Check out this article: ${activeArticle.title}`;

    switch (platform) {
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            text
          )}&url=${encodeURIComponent(url)}`,
          "_blank"
        );
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            url
          )}`,
          "_blank"
        );
        break;
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`,
          "_blank"
        );
        break;
      case "copy":
        navigator.clipboard.writeText(url).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        });
        break;
    }
  };

  const RenderList = () => {
    return (
      <div className='animate-fade-in'>
        {fetchResource.isFetching ? <BlockLoadingIndicator /> : null}
        <div className='flex flex-col md:flex-row justify-between items-end mb-12 gap-4'>
          <div>
            <h2 className='text-4xl font-bold text-brand-dark mb-4'>
              Resources & Blog
            </h2>
            <p className='text-slate-600 max-w-2xl'>
              Expert advice, industry insights, and stories from the community
              to help you navigate your career journey.
            </p>
          </div>
        </div>
        {/* search */}
        {/* <div className='flex-1 relative mb-10'>
          <Search className='absolute left-3 top-2.5 w-4 h-4 text-slate-400' />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // document.getElementById("search-text-input")?.blur();
              // if (!filter) return;
              trigerFilterSearch();
            }}
          >
            <div className='flex items-center'>
              <input
                type='text'
                id='search-text-input'
                placeholder='Search by title or author name'
                className='w-full pl-10 p-2 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-1 focus:ring-brand-teal'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onBlur={() => {
                  // if (!filter) return;
                  trigerFilterSearch();
                }}
              />
              <button
                type='submit'
                className=' rounded-lg bg-brand-teal p-3 ml-1'
              >
                <Search className='w-4 h-4 text-white' />
              </button>
            </div>
          </form>
        </div> */}

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {fetchResource?.data?.data?.map((resource) => (
            <ResourceItem
              handleClick={handleResourceClick}
              key={resource.id}
              resource={resource}
            />
          ))}
        </div>
        {fetchResource?.data?.data?.length === 0 ? (
          <div className='p-12 text-center text-slate-400'>
            No article available on this page
          </div>
        ) : null}
      </div>
    );
  };
  const RenderDetail = () => {
    if (!activeArticle) return null;
    return (
      <div className='animate-fade-in max-w-4xl mx-auto'>
        <button
          onClick={handleBack}
          className='flex items-center gap-2 text-slate-500 hover:text-brand-teal mb-8 font-medium transition-colors'
        >
          <ArrowLeft className='w-4 h-4' /> Back to Articles
        </button>

        <article className='bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden mb-8'>
          <div className='h-[400px] w-full relative'>
            <img
              src={
                activeArticle.imageUrl ||
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
              }
              alt={activeArticle.title}
              className='w-full h-full object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8 md:p-12'>
              <span className='inline-block bg-brand-accent text-brand-dark px-3 py-1 rounded-full text-xs font-bold mb-4 w-fit'>
                {activeArticle.category.replaceAll("_", " ")}
              </span>
              <h1 className='text-3xl md:text-5xl font-bold text-white mb-4 leading-tight'>
                {activeArticle.title}
              </h1>

              <div className='flex items-center gap-6 text-white/90'>
                <div className='flex items-center gap-2'>
                  <User className='w-4 h-4' /> {activeArticle.author}
                </div>
                <div className='flex items-center gap-2'>
                  <Calendar className='w-4 h-4' /> {activeArticle.dateUploaded}
                </div>
                <div className='flex items-center gap-2'>
                  <Clock className='w-4 h-4' />{" "}
                  {Math.ceil(activeArticle?.body.split(" ")?.length / 300) +
                    "min read"}
                </div>
              </div>
            </div>
          </div>

          <div className='p-8 md:p-12 prose prose-slate max-w-none'>
            <div
              className='text-slate-700 text-lg leading-relaxed space-y-6 whitespace-pre-line'
              dangerouslySetInnerHTML={{ __html: activeArticle.body }}
            />

            {/* Social Share Section */}
            <div className='mt-12 pt-8 border-t border-slate-100'>
              <h4 className='font-bold text-slate-900 mb-4 flex items-center gap-2'>
                <Share2 className='w-5 h-5 text-brand-teal' /> Share this
                article
              </h4>
              <div className='flex flex-wrap gap-3'>
                <button
                  onClick={() => handleShare("twitter")}
                  className='p-3 rounded-full bg-slate-100 hover:bg-[#1DA1F2] hover:text-white transition-colors text-slate-600 group'
                  title='Share on Twitter'
                >
                  <Twitter className='w-5 h-5' />
                </button>
                <button
                  onClick={() => handleShare("linkedin")}
                  className='p-3 rounded-full bg-slate-100 hover:bg-[#0A66C2] hover:text-white transition-colors text-slate-600 group'
                  title='Share on LinkedIn'
                >
                  <Linkedin className='w-5 h-5' />
                </button>
                <button
                  onClick={() => handleShare("facebook")}
                  className='p-3 rounded-full bg-slate-100 hover:bg-[#1877F2] hover:text-white transition-colors text-slate-600 group'
                  title='Share on Facebook'
                >
                  <Facebook className='w-5 h-5' />
                </button>
                <div className='h-10 w-px bg-slate-200 mx-2 hidden sm:block'></div>
                <button
                  onClick={() => handleShare("copy")}
                  className='px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors text-slate-600 font-medium flex items-center gap-2 min-w-[140px] justify-center'
                >
                  {copied ? (
                    <Check className='w-4 h-4 text-green-600' />
                  ) : (
                    <LinkIcon className='w-4 h-4' />
                  )}
                  {copied ? "Copied!" : "Copy Link"}
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  };

  return (
    <div className='min-h-screen bg-slate-50 py-12'>
      <div className='max-w-7xl mx-auto px-4'>
        {activeArticle ? <RenderDetail /> : <RenderList />}
        <div>
          <Paginator
            currentPage={page}
            handlePageChange={setPage}
            pagination={fetchResource?.data?.pagination}
          />
        </div>
      </div>
    </div>
  );
};
