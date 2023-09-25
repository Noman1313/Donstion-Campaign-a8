import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";

const Home = () => {
    const datas = useLoaderData();

    
    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    datas?.map(data => <Cards key={data.id} data={data}></Cards>)
                }
            </div>
        </div>
    );
};

export default Home;