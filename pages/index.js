import Head from 'next/head'
import Layout from "../components/MyLayout";
import BlogPostCard from "../components/BlogPostCard";
import posts from "../content/BlogPosts"

export default function Home() {
  return (
    <>
    <Head>
      <title>ReLiquie</title>
      <link rel="icon" href="/favicon.PNG" />
      <meta property="og:url" content="http://www.reliquie.now.sh" />
      <meta property="og:type" content="blog" key="blog"/>
      <meta property="og:title"  content="ReLiquie" key="title" />
      <meta property="og:description" content="In development for Nintendo Switch and PC" key="description"/>
      <meta property="og:image"  content="/img/hero.png" key="shareimage"/>
    </Head>
    <Layout>
      <div className="aboutContainer">
        <img src="/img/hero.png" alt="Hero" class="hero"/>
        <div class="aboutContent">
          <h2>This is ReLiquie</h2>
          <p> 
            - Inspired by N64 nostalgia<br></br>
            - Blending modern and classic<br></br>
            - In development using Unreal Engine<br></br>
            - A project by Marcus Birkeland
          </p>
        </div>
      </div>
      <section>
        <h2>Development updates </h2>
        <div className="postsContainer">
          {GetAllPosts()}
        </div>
      </section>
    </Layout>
    </>
  )}

  const GetAllPosts = () => {
    return(
      <>
        {posts.sort((a, b) => new Date(b.date) - new Date (a.date)).map(post => <BlogPostCard date={post.date} title={post.title} desc={post.desc} img={post.img} url={post.url}/>)}
      </>
    )
  }
  