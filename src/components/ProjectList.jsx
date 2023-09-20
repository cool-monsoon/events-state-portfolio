export default function ProjectList ({ projectItem }) {
  return (
    <div className="cardsContainer">
      {projectItem.map(({ img, category }) => (
        <img  src={img} alt={category} />
      ))}
    </div>
  );
};