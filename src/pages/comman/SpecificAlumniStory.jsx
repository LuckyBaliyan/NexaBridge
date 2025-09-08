import { useParams } from "react-router-dom";
import { storiesData } from "../../utils/data";
import Mainbtn from "../../components/ui/Buttons/Mainbtn";
import { Link } from "react-router-dom";

export default function SpecificAlumniStory() {
  const { alumniId } = useParams();
  const data = storiesData.find((story) => story.id === alumniId);

  if (!data) return <h2 className="text-center mt-10">Alumni not found</h2>;

  return (
    <div className="w-full bg-[#f8fbff] min-h-screen py-16 md:py-24 lg:py-26 px-4">
      {/* Image with name overlay */}
      <div className="relative flex flex-col gap-6 items-center justify-center   w-full mx-auto">
       <h2 className=" text-black p-2 ">
          {data.name.split(' ').map((w,i)=>(
            i%2 === 0?(w):(<span key={i}>&nbsp;{w}</span>)
          ))}
      </h2>
       <div className="rounded-2xl relative z-30 aspect-square w-[300px] md:w-[200px] lg:w-[300px]">
        <div className="w-full h-full hidden md:block absolute -z-10 -bottom-5 rounded-2xl -right-8 border-0 bg-[var(--Accent)]"></div>
        <img
          src={data.img ? data.img : "/images/user2.jpg"}
          alt={data.name}
          className="rounded-2xl"
        />
       </div>
      </div>

      {/* Content */}
      <div className="w-full mx-auto mt-12 md:text-center">
        <p className="text-sm leading-tight lg:text-xl md:text-xl font-black text-black  py-2 md:px-6">
          {data.dets}
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          {["Connect", "Visit Profile"].map((w, i) => (
            <Mainbtn
              text={w}
              key={i}
              className={`!rounded text-white px-6 py-2 ${
                i % 2 !== 0 ? "bg-gray-800" : "bg-[var(--Accent)]"
              }`}
            />
          ))}
        </div>
        <div className="w-full flex items-center justify-center mt-6">
           <Link to='/sucessAlumni'>
              <Mainbtn text={"view All"}  className='border-2'/>
           </Link>
        </div>
      </div>
    </div>
  );
}

