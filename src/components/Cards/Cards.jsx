import { Link } from "react-router-dom";

const Cards = ({ data }) => {
    const {id, img, title, category, card_bg_color, category_bg_color, text_color } = data || {}
    return (
        <div>
            <Link to={`/card/${id}`}>
                <div style={{ backgroundColor: `${card_bg_color}` }} className="card card-compact   shadow-xl">
                    <figure><img src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 style={{
                            backgroundColor: `${category_bg_color}`,
                            color: `${text_color}`
                        }} className="card-title flex justify-center w-24 rounded-md">{title}</h2>
                        <p style={{
                            color: `${text_color}`
                        }} className="text-xl font-bold">{category}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Cards;