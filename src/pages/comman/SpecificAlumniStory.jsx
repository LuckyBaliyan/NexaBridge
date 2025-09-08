import { useParams } from "react-router-dom";
import { storiesData } from "../../utils/data";

export default function SpecificAlumniStory() {
  const { alumniId } = useParams();
  const data = storiesData[alumniId];

  if (!data) return <h2>Alumni not found</h2>;

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <img src={data.img} alt={data.name} className="w-full h-80 object-cover rounded-xl mb-6" />
      <h1 className="text-3xl font-bold mb-4">{data.name}</h1>
      <p className="text-lg text-gray-700 mb-6">{data.dets}</p>
      
      <div className="flex gap-4">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow">
          Connect
        </button>
        <button className="bg-gray-800 text-white px-6 py-2 rounded-lg shadow">
          View Profile
        </button>
      </div>
    </div>
  );
}
