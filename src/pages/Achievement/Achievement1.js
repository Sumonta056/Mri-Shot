import Laptop from "./1.jpg";

const Analytics = () => {
  function handleButton1() {
    window.location.href = "https://sumonta056.github.io/";
  }

  return (
    <div className="w-full mx-auto bg-white py-4 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="w-[600px] mx-auto my-4">
          <img className="w-full h-full bg-cover" src={Laptop} alt="/" />
        </div>

        <div className="w-[580px] flex flex-col justify-center">
          <p className="text-[#020202] font-bold ">Meet the Developer:</p>
          <h1 className="md:text-6xl text-[#349778] sm:text-3xl text-2xl font-bold py-2">
            Sumonta Saha Mridul
          </h1>
          <p className="text-justify">
            I am currently studying Software Engineering in Shahjalal University
            of Science and Technology (SUST). Besides, I am a Software
            Developer💻 with a passion for coding and problem solving. I also
            love Photography📸 as a creative outlet and capturing the world
            around me.
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
