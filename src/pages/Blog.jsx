import "../style/Blog.scss";
import { Helmet } from "react-helmet";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { blogPosts } from "../data/blogPosts.js";
import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import axios from "axios";

function Blog() {
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const [loader, setLoader] = useState(false);
  const blogViewPage = (id) => {
    navigate(`/blog/${id}`);
  };

  // In your BlogView component
  const [searchParams] = useSearchParams();
  const blogid = searchParams.get("id");

  useEffect(() => {
    if (blogid) {
      console.log("Setting blogview state with id:", blogid);
      setBlogView(blogid);
    }
  }, [blogid]);

  const blogsData = async () => {
    try {
      setLoader(true);
const response = await axios.get(
  `${import.meta.env.VITE_APP_URL}posts`,
  {
    params: {
      _embed: true,
      per_page: 100,
    },
  },
);

      const data = response.data;

      console.log(data)

      const blogPosts = data
        .filter((post) => {
          // Check if the post belongs to the 'Blog' category
          return (
            post._embedded &&
            post._embedded["wp:term"] &&
            post._embedded["wp:term"][0].some(
              (category) => category.name === "Blog",
            )
          );
        })
        .map((post) => {
          const featuredMedia = post._embedded["wp:featuredmedia"]?.[0] || {};
          return {
            id: post.id,
            slug: post.slug,
            title: post.title.rendered,
            description: post.excerpt.rendered,
            uploadDate: post.date,
            imageUrl: featuredMedia.source_url || "",
            imageId: featuredMedia.id || null,
            category: "Blog",
          };
        });

        console.log(blogPosts,"blogPosts")

      setBlogData(blogPosts);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    blogsData();
  }, []);

  const startOffset = currentPage * itemsPerPage;
  const paginatedBlogs = blogData.slice(
    startOffset,
    startOffset + itemsPerPage,
  );

  const handleNextPage = () => {
    if (startOffset + itemsPerPage < blogData.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const blogPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": "https://wavesolutions.in/blog#blog",
        url: "https://wavesolutions.in/blog",
        name: "Wave Solution Journal",
        description:
          "Practical writing on performance marketing, AI search, web and content, written for modern brands with real numbers rather than theory.",
        publisher: {
          "@id": "https://wavesolutions.in/#organization",
        },
      },
      {
        "@type": "CollectionPage",
        "@id": "https://wavesolutions.in/blog#webpage",
        url: "https://wavesolutions.in/blog",
        name: "Ideas on Digital Growth | Wave Solution Journal",
        description:
          "Practical writing on performance marketing, SEO, AI marketing, web and e-commerce, CRO, social media and Shopify from Wave Solution.",
        isPartOf: {
          "@id": "https://wavesolutions.in/#website",
        },
        about: {
          "@id": "https://wavesolutions.in/#organization",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://wavesolutions.in/blog#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://wavesolutions.in/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://wavesolutions.in/blog",
          },
        ],
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title> Ideas on Digital Growth | Wave Solution Journal </title>{" "}
        <meta
          name="description"
          content="Practical writing on performance marketing, SEO, AI search, web and e-commerce, CRO, social media and Shopify — written for modern brands, with real numbers rather than theory."
        />{" "}
        <meta
          name="keywords"
          content="Wave Solution blog, digital marketing blog India, SEO blog Pune, AI marketing blog India, performance marketing blog India, CRO blog India, Shopify blog India, social media marketing blog Pune, digital growth blog India"
        />{" "}
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />{" "}
        <meta name="author" content="Wave Solution" />{" "}
        <link rel="canonical" href="https://wavesolutions.in/blog" />{" "}
        {/* =========================          LOCAL SEO      ========================== */}{" "}
        <meta name="geo.region" content="IN-MH" />{" "}
        <meta name="geo.placename" content="Pune, Maharashtra, India" />{" "}
        {/* =========================          OPEN GRAPH      ========================== */}{" "}
        <meta property="og:type" content="website" />{" "}
        <meta property="og:site_name" content="Wave Solution" />{" "}
        <meta
          property="og:title"
          content="Ideas on Digital Growth | Wave Solution Journal"
        />{" "}
        <meta
          property="og:description"
          content="Practical writing on digital marketing, SEO, AI search, web and e-commerce, CRO, social media and Shopify, written for modern brands."
        />{" "}
        <meta property="og:url" content="https://wavesolutions.in/blog" />{" "}
        <meta
          property="og:image"
          content="https://wavesolutions.in/og-image.jpg"
        />{" "}
        <meta
          property="og:image:alt"
          content="Wave Solution Journal — Ideas on digital growth"
        />{" "}
        <meta property="og:locale" content="en_IN" />{" "}
        {/* =========================          TWITTER / X      ========================== */}{" "}
        <meta name="twitter:card" content="summary_large_image" />{" "}
        <meta
          name="twitter:title"
          content="Ideas on Digital Growth | Wave Solution Journal"
        />{" "}
        <meta
          name="twitter:description"
          content="Practical writing on digital marketing, SEO, AI search, web, CRO, social media and Shopify — with real numbers, not theory."
        />{" "}
        <meta
          name="twitter:image"
          content="https://wavesolutions.in/og-image.jpg"
        />{" "}
        <meta name="twitter:image:alt" content="Wave Solution — Pune, India" />{" "}
        <meta name="twitter:site" content="@WaveSolution" />{" "}
        {/* =========================          STRUCTURED DATA      ========================== */}{" "}
        <script type="application/ld+json">
          {JSON.stringify(blogPageSchema)}
        </script>
      </Helmet>

      <section className="tell_parent parent">
        <div className="tell_cont cont">
          <div className="tell_intro">
            <span className="tell_badge">• JOURNAL</span>

            <h1>
              Ideas on
              <br />
              <span> Digital Growth.</span>
            </h1>

            <p>
              Practical writing on performance marketing, AI search, web and
              content — written for modern brands, with real numbers rather than
              theory.
            </p>

            <div className="tell_tags">
              <span>Digital Marketing</span>
              <span>SEO</span>
              <span>Web &amp; e-commerce</span>
              <span>Performance marketing</span>

              <span>Social media</span>
              <span>Shopify</span>
              <span>Technology</span>
            </div>
          </div>

          <div className="tell_grid">
            {paginatedBlogs.map((post) => (
              <Link
                className="tell_card"
                key={post.slug}
                to={`/blog/${post.slug}`}
                aria-label={`Read ${post.title}`}
              >
                <div className="card_image bg-img-cover" style={{backgroundImage: `url(${post.imageUrl})`}}>
                  
                </div>

                <span className="card_category">{post.category}</span>
                <h3>{post.title}</h3>
                <p>
                    {post.description.replace(/<[^>]+>/g, "").substring(0, 100) + "..."}
                </p>
                <span className="card_read_more">Read article &rarr;</span>
              </Link>
            ))}
          </div>

          <div className="tell_pagination">
            <div
              className={`left-arrow arrow ${
                currentPage === 0 ? "disabled" : "left-arrow arrow"
              }`}
              onClick={handlePreviousPage}
            >
              <IoIosArrowBack />
            </div>
            <div
              className={`right-arrow arrow ${
                startOffset + itemsPerPage >= blogData.length
                  ? "disabled"
                  : "right-arrow arrow"
              }`}
              onClick={handleNextPage}
            >
              <IoIosArrowForward />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
