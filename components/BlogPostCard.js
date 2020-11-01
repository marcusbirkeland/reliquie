import Link from 'next/link'

const BlogPostCard = props => (
        <div className="cardContainer">
            <style jsx>{`
            .cardContainer{
                max-width:300px;
                margin: 24px;
                }
                a{
                    text-decoration:none;
                    color: #000;
                    max-width: 400px;
                    max-height: 350px;
                    position: relative;
                }
                .imageLink{
                    margin: 0 auto;
                    width:300px;
                    height:200px;
                    text-align: center;
                    vertical-align: bottom;
                }
                img{
                    max-width: 300px;
                    height:160px;

                }
                h2{
                    color:#fff;
                }
                .date{
                    color:#888;
                }
                .desc{
                    padding-bottom:24px;
                }
                `}  

            </style>
            <Link href="/post/[slug]" as={`/post/${props.title}`}>
                <a className="imageLink"><img src={props.img} /></a>
            </Link>
            <Link href="/post/[slug]" as={`/post/${props.title}`}>
                <a><h2>{props.title}</h2></a>
            </Link>
            <p className="date"> Date: {props.date}</p>
            <p className="desc">{props.desc}</p>
        </div>

);

const date = (dateIn) => {
    
    let date = new Date(dateIn);
    return (
        <>
            {('0' + date.getDay()).slice(-2) + "." + ('0' + (date.getMonth()+1)).slice(-2) + "." + date.getFullYear()}
        </>

    )
}
export default BlogPostCard;
