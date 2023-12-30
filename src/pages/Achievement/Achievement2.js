import Laptop from "./2.jpg";

const Analytics = () => {
  function handleButton1() {
    window.location.href = "https://sumonta056.github.io/";
  }

  return (
    <div className="w-full bg-white py-4 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-1 lg:grid-cols-2 md:gap-20 sm:gap-2">
        <div className="w-[600] flex flex-col justify-center">
          <p className="text-[#020202] text-2xl  font-bold ">Achievement:</p>
          <h1 className="md:text-5xl text-[#349778] sm:text-3xl text-2xl font-bold py-5">
            SUST Exceed Manifestation - Photo Exhibition
          </h1>
          <p className="text-justify">
            শখের বশে ছবি তুলে ইন্সটাগ্রামে পোস্ট দেয়া থেকে শুরু, তখন থেকেই
            photography-র প্রতি আগ্রহ জন্মায়। সেই সূত্রে SUST Exceed
            Manifestation (Photo exhibition) এ নাম দেয়া। And guess what? Final
            round এর photo exhibition এর জন্য আমার তোলা ছবি selected হইসে।
          </p>
          <button
            className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3"
            onClick={handleButton1}
          >
            More
          </button>
        </div>
        <img className="w-[570px] mx-auto my-4" src={Laptop} alt="/" />
      </div>
    </div>
  );
};

export default Analytics;
