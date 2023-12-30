import Laptop from "./1.jpg";

const Analytics = () => {
  function handleButton1() {
    window.location.href = "https://www.linkedin.com/posts/sumonta-saha-mridul-b35bb61a0_photographypassion-exhibitionexcitement-photography-activity-7114841593513213952-BvU0?utm_source=share&utm_medium=member_desktop";
  }

  return (
    <div className="w-full mx-auto bg-white py-4 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-1 lg:grid-cols-2 md:gap-20 sm:gap-2">
        <img
          className="md:w-[600px] sm:w-[300px] mx-auto my-4 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
          src={Laptop}
          alt="/"
        />

        <div className="md:w-[580px] sm:w-[300px] flex flex-col justify-center">
          <p className="text-[#020202] text-2xl  font-bold ">Achievement:</p>
          <h1 className="md:text-5xl text-[#349778] sm:text-3xl text-2xl font-bold py-5">
            বিহঙ্গ - Intra Sylhet Photography Exhibition
          </h1>
          <p className="text-justify">
            My Photo got selected for "বিহঙ্গ - Intra Sylhet Photography
            Exhibition" organised by Sylhet Engineering College Photographers'
            Association
          </p>
          <button
            className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3"
            onClick={handleButton1}
          >
            More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
