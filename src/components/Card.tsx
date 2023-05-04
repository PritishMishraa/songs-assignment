import Image from "next/image";
import Link from "next/link";

import { BarChart } from "./BarChart";

type TProps = {
    image: string,
    title: string,
    completion_rate: number,
    unique_plays: number,
    total_plays: number
}

export default function Card({ image, title, completion_rate, unique_plays, total_plays }: TProps) {

    if (completion_rate > 100) completion_rate = 100;

    const style = { "--value": completion_rate } as React.CSSProperties;

    const encoded = encodeURIComponent(title);

    return (
        <div
            className="transform hover:scale-[1.01] transition-all rounded-xl w-full p-4">
            <h1 className="mb-1 text-xl font-bold tracking-wide text-white md:text-2xl">{title}</h1>
            <div className="flex flex-col w-full rounded-lg md:flex-row">
                <div className="md:min-w-max md:my-auto md:mx-0">
                    {image ?
                        <Link href={`/song/${encoded}`} passHref>
                            <Image
                                alt={title}
                                src={image}
                                height={128}
                                width={100}
                                quality={100}
                                className="object-cover rounded-lg shadow-lg h-48 w-full"
                            />
                        </Link> :
                        <div className="object-cover w-32 h-24 bg-gray-200 rounded-lg shadow-lg md:w-24 md:h-32 animate-pulse"></div>
                    }
                </div>
                <div className="hidden md:flex w-full items-center justify-evenly gap-8 pt-6 md:pl-6 md:pt-0 md:items-start">
                    <div className="flex flex-col">
                        <h2 className="mb-4 text-lg font-medium text-white md:text-xl text-center">
                            Unique & Total Plays
                        </h2>
                        <div>
                            <BarChart unique_plays={unique_plays} total_plays={total_plays} title={title} />
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h2 className="mb-4 text-lg font-medium text-white md:text-xl text-center">
                            Completion Rate - {completion_rate}%
                        </h2>
                        <div className="radial-progress text-white" style={style}>
                            {completion_rate}%
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}