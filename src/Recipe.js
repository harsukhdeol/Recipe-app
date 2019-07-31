import React from "react";
import style from "./recipe.module.css"
const Recipe = ({ title, cals, img, ingredients }) => {
    return (
        < div className={style.recipe}>
            <h1>{title}</h1>
            <p>{cals}</p>
            <img className={style.image} src={img} alt="" />
            <ul>
                {ingredients.map(ingredients => (
                    <li>{ingredients.text}</li>
                ))}
            </ul>
        </div >
    )
}
export default Recipe