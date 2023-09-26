import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const totalDonation = 12;


const Statistics = () => {
    const [donation, setDonation] = useState(0);
    useEffect(() => {
        const data = localStorage.getItem('card')
        console.log(data);
        setDonation(data);
    }, [])
    console.log(donation);
    const options = donation
    return (
        <div>
            <h3>Pai chart</h3>
            <Chart
                chartType="PieChart"
                data={totalDonation}
                options={options}
                width={"100%"}
                height={"400px"}
            />
        </div>
    );
};

export default Statistics;