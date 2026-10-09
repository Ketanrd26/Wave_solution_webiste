import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import { blogPosts } from "../data/blogPosts.js";
import "../style/BlogDetail.scss";

function BlogDetail() {
  const { slug } = useParams();
  const post = blogPosts.find((blogPost) => blogPost.slug === slug);
  const canonicalUrl = `https://wavesolutions.in/blog/${slug}`;

  if (!post) {
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
    headline: post.title,
    description: post.excerpt,
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

  const relatedPosts = blogPosts
    .filter((blogPost) => blogPost.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{`${post.title} | Wave Solution Journal`}</title>
        <meta name="description" content={post.excerpt} />
        <meta name="author" content="Wave Solution" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large"
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Wave Solution" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={canonicalUrl} />
        <meta
          property="og:image"
          content="https://wavesolutions.in/og-image.jpg"
        />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
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
            <Link to="/blog">Journal</Link>
            <span aria-hidden="true">/</span>
            <span>{post.category}</span>
          </nav>

          <header className="blog_detail_header">
            <span className="blog_detail_category">{post.category}</span>
            <h1>{post.title}</h1>
            <p>{post.excerpt}</p>
          </header>

          <div className="blog_detail_content">
            {post.sections.map((section) => (
              <section className="blog_detail_section" key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.points && (
                  <ul>
                    {section.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <Link to="/blog" className="blog_detail_back">
            &larr; Back to all articles
          </Link>
        </article>

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
        </aside>
      </main>
    </>
  );
}

export default BlogDetail;
