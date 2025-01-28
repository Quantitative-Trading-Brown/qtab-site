import mockData from "./mock/mock_data.json";
interface ResourceData {
  name: string;
  image: string;
  description: string;
}

type DataType = {
    [key: string]: ResourceData;
};

export default function Team() {

    const mockDataTyped = mockData as DataType;
    return (
      <section className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <u>
            <h1 className="text-4xl py-10 mb-8">Leadership</h1>
          </u>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.values(mockDataTyped).map((resource, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 flex"
              >
                <img
                  className="w-48 h-48 object-cover rounded-none border-2 border-indigo-500 mr-4"
                  src={resource.image}
                  alt={resource.name}
                />
                <div className="flex flex-col justify-center">
                  <h2 className="text-gray-800 text-lg font-semibold mb-2">
                    {resource.name}
                  </h2>
                  <p className="text-gray-600">{resource.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <u>
            <h1 className="text-4xl py-10 mb-8">Researchers and Engineers</h1>
          </u>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.values(mockDataTyped).map((resource, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 flex"
              >
                <img
                  className="w-48 h-48 object-cover rounded-none border-2 border-indigo-500 mr-4"
                  src={resource.image}
                  alt={resource.name}
                />
                <div className="flex flex-col justify-center">
                  <h2 className="text-gray-800 text-lg font-semibold mb-2">
                    {resource.name}
                  </h2>
                  <p className="text-gray-600">{resource.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <u>
            <h1 className="text-4xl py-10 mb-8">Advisors</h1>
          </u>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.values(mockDataTyped).map((resource, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 flex"
              >
                <img
                  className="w-48 h-48 object-cover rounded-none border-2 border-indigo-500 mr-4"
                  src={resource.image}
                  alt={resource.name}
                />
                <div className="flex flex-col justify-center">
                  <h2 className="text-gray-800 text-lg font-semibold mb-2">
                    {resource.name}
                  </h2>
                  <p className="text-gray-600">{resource.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}
