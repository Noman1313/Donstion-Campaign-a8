
const Banner = () => {
    return (
        <div className="text-center my-32">
            <h2 className="text-3xl lg:text-5xl font-bold">I Grow By Helping People In Need</h2>
            <div className="mt-10">
                <input type="text" placeholder="Search here...." className="input input-bordered w-full max-w-xs" />
                <button className="border px-8 py-3 bg-red-500 rounded-md ml-2">Search</button>
            </div>
        </div>
    );
};

export default Banner;