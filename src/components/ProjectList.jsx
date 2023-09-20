import uniqid from 'uniqid';

export default function ProjectList ({ projectItem }) {
  return (
    <div className="cardsContainer">
      {projectItem.map(({ img, category }) => (
        <img key={uniqid()} src={img} alt={category} />
      ))}
    </div>
  );
};