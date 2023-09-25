import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = () => {

    const  diffToast= () =>{
        toast("successful",{
            position: toast.POSITION.TOP_CENTER
        })
    }

    const [card, setCard] = useState({})

    const { img, category, description, price, text_color } = card;

    const { id } = useParams();
    const idInt = parseInt(id)
    // console.log(idInt);

    const cards = useLoaderData()
    // console.log(cards);

    useEffect(() => {
        const findCard = cards?.find(card => card.id === idInt)
        // console.log(findCard);
        setCard(findCard)
    }, [idInt, cards])


    return (
        <div>
            <div className="flex justify-center items-center">
                <figure className="relative h-3/4 w-3/4">
                    <img
                        className="h-full w-full rounded-xl object-cover object-center"
                        src={img}
                        alt="nature image"
                    />
                    <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-gray/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                        <div>
                            <button onClick={diffToast} style={{ backgroundColor: `${text_color}` }} className="btn text-white font-medium">Donate {price}</button>
                        </div>
                    </figcaption>
                </figure>
            </div>
            <div className="my-10">
                <h2 className="text-4xl font-bold mb-3">{category}</h2>
                <p>{description}</p>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Card;