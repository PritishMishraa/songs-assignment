import { type NextPage } from "next";
import { useRouter } from 'next/router';

import Link from "next/link";
import data from "../../utils/data.json"
import { BarChart } from "../../components/BarChart";

const Song: NextPage = () => {
    const router = useRouter()
    const { id } = router.query

    const song = data.soundItems.find((song) => song.title === id)

    const style = { "--value": song?.completion_rate } as React.CSSProperties

    return (
        <div className="w-full h-full min-h-screen bg-gray-900 font-white">
            <div className="flex flex-col justify-center px-8">
                <div className="flex flex-col justify-center px-8">
                    <div className="flex flex-col items-start justify-center max-w-4xl w-full pb-16 mx-auto gap-8">
                        <Link href="/">
                            <h1 className="md:text-9xl text-5xl py-8 font-black font-sans tracking-wider text-white">
                                {id}
                            </h1>
                        </Link>
                        <h2 className="mb-4 text-lg font-medium text-white md:text-xl text-center">
                            Completion Rate - {song?.completion_rate}%
                        </h2>
                        {
                            song && <div className="radial-progress text-white" style={style}>
                                {song.completion_rate}%
                            </div>
                        }
                        <h2 className="mb-4 text-lg font-medium text-white md:text-xl text-center">
                            Unique & Total Plays
                        </h2>
                        {
                            song && <BarChart title={song.title} unique_plays={song.unique_plays} total_plays={song.total_plays} />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Song;