import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

function Results({results}) {
    return (
        <FlipMove className='px-5 my-10 sm:grid md:grid-cols-3 xl:grid-cols-3 3xl:flex flex-wrap items-center justify-center'>
            {results.map(result => (
                <Thumb key={result.id} result ={result} />
            ))}
        </FlipMove>
    )
}

export default Results
