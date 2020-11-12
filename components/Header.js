import Link from 'next/link'
import buildlink from '../content/buildlink'

const linkStyle = {
  marginRight: 15
  
};


const Header = () => (
  <div className="headerContainer">
    <style jsx>{`

    .headerContainer{
      background-color:#000;
    }
      .neon {
        color: #fff;
        text-shadow:
          0 0 5px #fff,
          0 0 10px #0067ff,
          0 0 20px #0067ff,
          0 0 40px #0067ff,
          0 0 80px #0067ff,
          0 0 90px #0067ff,
          0 0 100px #0067ff,
          0 0 150px #0067ff,
          0 0 200px #0067ff,
          0 0 250px #0067ff;
      }
      h1{
        font-size:1.3em;
        color:#fff;
      }
       a{
         text-decoration:none;
         margin-right:32px;
         color: #fff;
         font-size: 1.3em;
       }
       a:hover {
         color: #00ff95;
         transition: color .4s; 
       }
      .headerItems{
        display:flex;
        justify-content:space-evenly;
        align-items:center;

      }
      h1{
        font-size:2em;
      }
      .linkContainer{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-wrap:wrap;
        margin-left: 10%;
      }
      @media screen and (max-width: 800px) {
        .linkContainer{
          margin-left:0px;
        }
        .headerItems{
          width:100%;
          display:flex;
          justify-content:space-evenly;
          align-items:center;
        }
        a{
          margin-top:8px;
        }
      }

      .titleContainer{
        display:flex;
        flex-direction: row;
        justify-content:center;
        align-items:center;
      }

      `}</style>
      <div className="headerItems">
        <div className="titleContainer">
          <a><img src="/icon2.png" height="100" width="100"/></a>
          <Link href="/">
            <a><h1 className="neon">ReLiquie</h1></a>
          </Link>
        </div>
        <div className="linkContainer">
          <Link href="/">
            <a>Blog</a>
          </Link>
           <a href={buildlink}>Try</a>
        </div>
    </div>
  </div>
);

export default Header;