import PropTypes from 'prop-types';




const NewsCard = ({news}) => {

    const {_id, title, description, author,thumbnail_url, total_view, rating, others_info,} = news;
    return (
        <div>
            <div>
  {/* head */}
<div className="flex justify-between">
 {/* left */}
    <div className="flex gap-4">
      <img className="rounded-full w-10" src={author.img} alt=""/>

      <div>
        <h1> {author.name}</h1>
        <p>{author.published_date}</p>
      </div>
  </div>
{/* right */}
  <div className="flex gap-3">
      <h1>a</h1>
      <h2>b</h2>
  </div>
</div>

{/* body */}
<div className="p-5 border-b-2">
  <h1>Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</h1>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9hxIGIRPVvvpnSQjDGNI0undzKEHbVYvWe-7bvt9W4A&s" alt=""/>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum suscipit, sunt officiis inventore exercitationem eaque veniam ad velit corporis dolorum veritatis, fugit, tempora molestiae asperiores obcaecati? Adipisci ex voluptate iure.... read</p>
</div>
</div>
        </div>
    );
};

NewsCard.propTypes = {
    news: PropTypes.object.isRequired
}
export default NewsCard;