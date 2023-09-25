import { useEffect, useState } from "react";
import CardDetails from "../CardDetails/CardDetails";

const Donation = () => {

    const [donation, setDonation] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        const donationItems = JSON.parse(localStorage.getItem('card'));
        if (donationItems) {
            setDonation(donationItems)
        }
        else {
            setNotFound("No data found");
        }
    }, [])


    return (
        <>
            <div>
                {
                    notFound ?
                        <p className="flex justify-center items-center h-96 text-5xl font-bold">{notFound}</p> :
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            {
                                isShow ?
                                    donation.map(cardDetail => <CardDetails key={cardDetail.id} card={cardDetail}></CardDetails>)
                                    :
                                    donation.slice(0, 4).map(cardDetail => <CardDetails key={cardDetail.id} card={cardDetail}></CardDetails>)
                            }
                        </div>
                }
            </div>
            {donation.length > 4 && <button onClick={() => setIsShow(!isShow)} className="my-8 px-5 py-2 rounded-md bg-green-500 block mx-auto">{isShow ? "See less" : "See more"}</button>}
        </>
    );
};

export default Donation;