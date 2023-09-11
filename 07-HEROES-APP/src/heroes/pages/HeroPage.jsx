import { Navigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";

export const HeroPage = () => {
  const { id } = useParams();
  const hero = getHeroById(id);

  if (!hero) {
    return <Navigate to={"/marvel"} />;
  }

  const heroImageUrl = `/assets/heroes/${id}.jpg`;

  return (
    <>
      <div className="row mt-5">
        <div className="col-4">
          <img
            className="img-thumbnail"
            src={heroImageUrl}
            alt={hero.superhero}
          />
        </div>
        <div className="col-8">
          <h3>{hero.superhero}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b>Alter ego:</b>
              {hero.alter_ego}
            </li>
            <li className="list-group-item">
              <b>Puiblisher:</b>
              {hero.publisher}
            </li>
            <li className="list-group-item">
              <b>First appearance:</b>
              {hero.first_appearance}
            </li>
          </ul>
          <h5 className="mt-3">Characters</h5>
        </div>
      </div>
    </>
  );
};
