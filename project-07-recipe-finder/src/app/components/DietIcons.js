export default function DietIcons({ recipe }) {
  return (
    <div className="diet-icons">
      {recipe.vegetarian && <span className="vegetarian-icon">V</span>}
      {recipe.vegan && <span className="vegan-icon">VG</span>}
      {recipe.glutenFree && <span className="glutenfree-icon">GF</span>}
      {recipe.dairyFree && <span className="dairyfree-icon">LF</span>}
    </div>
  );
}
