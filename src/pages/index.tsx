import { type NextPage } from "next";
import data from "../utils/data.json"
import Card from "../components/Card";

const Home: NextPage = () => {
  return (
    <div className="w-full h-full bg-gray-900 font-white">
      <div className="flex flex-col justify-center px-8">
        <div className="flex flex-col justify-center px-8">
          <div className="flex flex-col items-start justify-center max-w-4xl pb-16 mx-auto">
            <h1 className="md:text-9xl text-5xl pt-8 ml-4 font-black font-sans tracking-wider text-white">
              Songs
            </h1>
            <div className="flex flex-col w-full mt-16 gap-8">
              {
                data.soundItems.map((song) => (
                  <Card key={song.id} image={song.image} title={song.title} completion_rate={song.completion_rate} unique_plays={song.unique_plays} total_plays={song.total_plays} />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
