import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import { blogPosts } from "../data/blogPosts.js";
import "../style/BlogDetail.scss";
import { useEffect, useState } from "react";
import axios from "axios";

function BlogDetail() {
  const { slug } = useParams();
  const post = blogPosts.find((blogPost) => blogPost.slug === slug);
  const canonicalUrl = `https://wavesolutions.in/blog/${slug}`;

  const [blogviewdata, setBlogviewData] = useState(null);
  // const [searchParams] = useSearchParams();
  // const blogId = searchParams.get("title");

  const fetchBlogDataById = async (id) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_APP_URL}posts`, {
        params: {
          slug: slug,
          _embed: true,
        },
      });

      setBlogviewData(response.data[0] || null); // Set the blog data based on the single post
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (slug) {
      fetchBlogDataById(slug); // Fetch the blog post data based on the id from URL
    }
  }, [slug]);

  console.log(blogviewdata, "blogviewdata");

  if (!blogviewdata) {
    return (
      <>
        <Helmet>
          <title>Article Not Found | Wave Solution Journal</title>
          <meta name="robots" content="noindex, follow" />
        </Helmet>
        <main className="blog_detail_page">
          <div className="blog_detail_not_found">
            <span className="blog_detail_category">WAVE SOLUTION JOURNAL</span>
            <h1>Article not found</h1>
            <p>This article may have moved or the link may be incorrect.</p>
            <Link to="/blog" className="blog_detail_back">
              Browse all articles
            </Link>
          </div>
        </main>
      </>
    );
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blogviewdata?.title?.rendered,
    description: blogviewdata?.excerpt?.rendered,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    author: {
      "@type": "Organization",
      name: "Wave Solution",
    },
    publisher: {
      "@type": "Organization",
      name: "Wave Solution",
      url: "https://wavesolutions.in/",
    },
  };

  // const relatedPosts = blogPosts
  //   .filter((blogPost) => blogPost.slug !== post.slug)
  //   .slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{`${blogviewdata?.title?.rendered} | Wave Solution Journal`}</title>
        <meta name="description" content={blogviewdata?.excerpt?.rendered} />
        <meta name="author" content="Wave Solution" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Wave Solution" />
        <meta property="og:title" content={blogviewdata?.title?.rendered} />
        <meta
          property="og:description"
          content={blogviewdata?.excerpt?.rendered}
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta
          property="og:image"
          content="https://wavesolutions.in/og-image.jpg"
        />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blogviewdata?.title?.rendered} />
        <meta
          name="twitter:description"
          content={blogviewdata?.excerpt?.rendered}
        />
        <meta
          name="twitter:image"
          content="https://wavesolutions.in/og-image.jpg"
        />
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>

      <main className="blog_detail_page">
        <article className="blog_detail_article">
          <nav className="blog_detail_breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/blog">{blogviewdata?.title?.rendered}</Link>
            {/* <span aria-hidden="true">/</span> */}
            <span>{blogviewdata?.category}</span>
          </nav>

          {/* <header className="blog_detail_header">
            <span className="blog_detail_category">{blogviewdata?.category}</span>
            <h1>{blogviewdata?.title?.rendered}</h1>
            <p>{blogviewdata?.excerpt?.rendered?.replace(/<[^>]*>/g, '')}</p>
          </header> */}

          <div className="blog_detail_content">
         <div
  className="blog_image"
  style={{
    backgroundImage: `url(${blogviewdata?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || ""})`,
  }}
></div>
            <section
              className="blog_detail_section"
              key={blogviewdata?.title?.rendered}
            >
              <h2>{blogviewdata?.title?.rendered}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: blogviewdata?.content?.rendered,
                }}
              />
            </section>
          </div>

          <Link to="/blog" className="blog_detail_back">
            &larr; Back to all articles
          </Link>
        </article>
        {/* 
        <aside className="blog_detail_related" aria-labelledby="related-title">
          <h2 id="related-title">More from the journal</h2>
          <div className="blog_detail_related_grid">
            {relatedPosts.map((relatedPost) => (
              <Link
                className="blog_detail_related_card"
                key={relatedPost.slug}
                to={`/blog/${relatedPost.slug}`}
              >
                <span>{relatedPost.category}</span>
                <h3>{relatedPost.title}</h3>
                <span className="blog_detail_related_link">Read article &rarr;</span>
              </Link>
            ))}
          </div>
        </aside> */}
      </main>
    </>
  );
}

export default BlogDetail;
