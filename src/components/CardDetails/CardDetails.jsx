
const CardDetails = ({ card }) => {
    const { img, title, category, price, card_bg_color, category_bg_color, text_color } = card
    console.log(card);
    return (
        <div>
            <div style={{ backgroundColor: `${card_bg_color}` }} className="flex  rounded-xl">
                <div className=" overflow-hidden rounded-xl ">
                    <img
                        src={img}
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div style={{ color: `${text_color}` }} className="p-6">
                    <h6 style={{ backgroundColor: `${category_bg_color}` }} className=" w-24 text-center rounded-md mb-4 ">
                        {title}
                    </h6>
                    <h4 className="mb-2 ">
                        {category}
                    </h4>
                    <h4 style={{ color: `${text_color}` }} className="mb-8 ">
                        {price}
                    </h4>
                    <button style={{ background: `${text_color}` }} className="btn text-sm md:text-lg font-semibold">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;