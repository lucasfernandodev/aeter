import style from "./style.module.css";
import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import { BlogPost } from "../../types/post";
import Layout from "../../components/Layout";
import PostCards from "../../components/PostCards";
import Loading from "../../components/Loading";
import { getPublishedBlogPosts } from "../../lib/notion";

const Postagens = ({
  posts,
}: {
  posts: { results: BlogPost[]; cursor: string };
}) => {
  const [postsList, setPostsList] = useState<BlogPost[] | null>(null);
  const [cursorCurrent, setCursorCurrent] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setPostsList(posts.results);
    posts.cursor && setCursorCurrent(posts.cursor);
  }, [posts]);

  async function getMorePosts() {
    setLoading(true);
    const request = await fetch(`/api/blogs?cursor=${cursorCurrent}`);

    if (request.status === 200) {
      const response = await request.json();
      postsList !== null && setPostsList([...postsList, ...response.data]);
      setCursorCurrent(response.cursor);
    }

    setLoading(false);
  }

  return (
    <Layout
      hero={{
        title: "Publicações",
        description: "Navegue por todos os artigos publicados até agora.",
        type: "color",
        bg: "var(--color-default)",
      }}
      title="Publicações"
    >
      <div className={style.posts}>
        {postsList === null && loading === false && (
          <p>Nenhuma publicação encontrada.</p>
        )}
        {postsList && <PostCards posts={postsList} widthStyle="long" />}

        {cursorCurrent !== null && (
          <div className={style.loadMore}>
            <button onClick={getMorePosts}>
              {loading ? <Loading /> : "ver mais"}
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {

  const posts = await getPublishedBlogPosts();
  return {
    props: {
      posts: posts,
    },
  };
};

export default Postagens;
