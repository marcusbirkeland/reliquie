import Head from 'next/head'
import Layout from "../components/MyLayout";
import BlogPostCard from "../components/BlogPostCard";
import posts from "../content/BlogPosts"
import buildlink from '../content/buildlink'
import ContactForm from '../components/EmailForm'

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
        <img src="/bossarena.png" alt="Hero" class="hero"/>
        <div className="aboutContent">
          <h2>This is ReLiquie</h2>
          <p> 
            - Inspired by N64 nostalgia<br></br>
            - In development using Unreal Engine<br></br>
            - A project by Marcus Birkeland
          </p>
        </div>
      </div>
      <div className="downloadContainer">
        <div className="downloadInfo">
        <img src="/praise.png"/>
        <div className="innerDownload">
          <h2>DEMO AVAILABLE!</h2>
          <h3>What to expect: </h3>
          <ul>
            <li>New tutorial level</li>
            <li>Expanded overworld w/ 2 realm levels</li>
            <li>Major visual updates</li>
            <li>Rewind magic</li>
          </ul>
          <p >Send feedback to: <b>Reliquiegame@gmail.com </b></p>
          <a href={buildlink}><button>Download</button></a>

        </div>

        </div>
        <div className="screenshotSection">
          <div className="doubleIMG">
          <img src="/screen_tutorial.PNG"/>
          <img src="/Skullkid.png"/>

          </div>
          <div className="doubleIMG">
          <img src="/screen_combat.PNG"/>
          <img src="/screen_cave.PNG"/>

          </div>
        </div>
      </div>
      <section>
        <h2>Development updates </h2>
        <div className="postsContainer">
          {GetAllPosts()}
        </div>
      </section>
      <ContactForm/>
      <footer>
        <p>Icons from <a href="https://icons8.com/"> Icons8</a></p>
      </footer>
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
  