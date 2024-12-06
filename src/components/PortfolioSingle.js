import React from 'react';
import { useParams, Link } from 'react-router-dom';//주소표시줄


//주소표시줄 /portfolio/1 <- const로 지정한 id

const PortfolioSingle = ({data})=>{
  const {id} = useParams();
  const item = data[id];
  const currentId = Number(id);
  // console.log(currentId, typeof(currentId));

  const prevId = currentId > 0 ? currentId-1 : null; //첫 글-> 이전이 없어야함
  const NextId = currentId<data.length - 1 ? currentId+1 : null; //1번을 보고있으면 2

  if(!item) return <p>Item not found</p>;
  return(
    <main className="content portoflio-single">
      <div className="container">
        <div className="row">
          <div className="col-md-8 decription">
            <div className="contents shadow">
              <img src={item.images.description1} alt="" />
              <p>image description 1</p>
            </div>
            <div className="contents shadow">
              <img src={item.images.description2} alt="" />
              <p>image description 2</p>
            </div>
          </div>
          <div className="col-md-4 portfolio_info">
            <div className="contents shadow">
              <h2>{item.title}</h2>
              <p>{item.content}</p>
              
              <hr className="double" />
              <blockquote>
                <p>“{item.review.content}” </p>
                <small>- {item.review.writer} -</small>
              </blockquote>
              <p className="nav">
                {prevId !== null ? (
                  <Link to={`/portfolio/${prevId}`}  className="secondary-btn">&larr; Previous Project</Link>
                ) : null
              }
                {NextId !== null ? (
                  <Link to={`/portfolio/${NextId}`}  className="secondary-btn">Next Project &rarr;</Link>
                ) : null
              }
              </p>
            </div>
          </div>
        </div>
      </div>          
    </main>
  )
}

export default PortfolioSingle;