"use client";
import mockData from "./mock/mock_data.json";
import React from "react";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "@/scripts/firestore";

type ResourceData = {
  name: string;
  image: string;
  desc: string;
  index: number;
  display: boolean;
  position: string;
}

export default function Team() {
  const [info, setData] = useState<Object>({});
  const [loading, setLoading] = useState(true);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState<ResourceData>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "team"));
        const documents = querySnapshot.docs;
        const data = Object.fromEntries(
          documents.map((doc) => [doc.id, doc.data()]),
        );
        console.log(data);
        setData(data);
        console.log("Hello", Object.values(data));
      } catch (error) {
        console.error("Error fetching Firestore data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center pb-10">
        <u>
          <h1 className="text-4xl py-10 mb-8">2024-2025 Leadership</h1>
        </u>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
          {Object.values(info)
            .filter(
              (resource: ResourceData, index: number, array: unknown[]) =>
                resource.display && resource.position == "Leadership",
            )
            .sort((a, b) => a.index - b.index)
            .map((resource, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 cursor-pointer flex flex-col items-center max-w-sm"
                onClick={() => {
                  setSelectedResource(resource);
                  setIsOpen(true);
                }}
              >
                <img
                  className="w-48 h-48 object-cover rounded-none border-2 border-indigo-500 mb-4 mx-auto"
                  src={resource.image}
                  alt={resource.name}
                />
                <h2 className="text-gray-800 text-lg font-semibold mb-2 text-center py-4">
                  {resource.name}
                </h2>
                <p className="text-gray-600 text-center px-4">
                  {resource.desc.length > 100
                    ? `${resource.desc.slice(0, 100)}...`
                    : resource.desc}
                </p>
              </div>
            ))}
        </div>

        <hr className="my-4 border-t-2 border-gray-300" />

        {isOpen && selectedResource && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 relative max-w-3xl w-full mx-4">
              <button
                className="absolute top-4 right-4 text-gray-700 text-2xl font-bold"
                onClick={() => setIsOpen(false)}
              >
                &times;
              </button>
              <img
                className="w-full h-auto object-cover rounded-none border-2 border-indigo-500 mb-6"
                src={selectedResource.image}
                alt={selectedResource.name}
              />
              <h2 className="text-2xl font-semibold mb-4 text-center">
                {selectedResource.name}
              </h2>
              <p className="text-gray-700">{selectedResource.desc}</p>
            </div>
          </div>
        )}

        <div className="flex flex-col items-center justify-center">
          <u>
            <h1 className="text-4xl py-10 mb-8">
              2024-2025 Researchers and Engineers
            </h1>
          </u>
          <div className="grid grid-cols-1 gap-6 px-10 justify-items-center">
            {Object.values(info)
              .filter(
                (resource) =>
                  resource.display &&
                  resource.position == "Researchers and Engineers",
              )
              .sort((a, b) => a.index - b.index)
              .map((resource, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg p-6 cursor-pointer flex flex-col items-center max-w-sm"
                  onClick={() => {
                    setSelectedResource(resource);
                    setIsOpen(true);
                  }}
                >
                  <img
                    className="w-48 h-48 object-cover rounded-none border-2 border-indigo-500 mb-4 mx-auto"
                    src={resource.image}
                    alt={resource.name}
                  />
                  <h2 className="text-gray-800 text-lg font-semibold mb-2 text-center py-4">
                    {resource.name}
                  </h2>
                </div>
              ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <hr className="my-4 border-t-2 border-gray-300" />
          <u>
            <h1 className="text-4xl py-10 mb-8">Advisors</h1>
          </u>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-10">
            {Object.values(info)
              .filter(
                (resource) =>
                  resource.display && resource.position == "Advisor",
              )
              .sort((a, b) => a.index - b.index)
              .map((resource, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg p-6 cursor-pointer flex flex-col items-center max-w-sm"
                  onClick={() => {
                    setSelectedResource(resource);
                    setIsOpen(true);
                  }}
                >
                  <img
                    className="w-48 h-48 object-cover rounded-none border-2 border-indigo-500 mb-4 mx-auto"
                    src={resource.image}
                    alt={resource.name}
                  />
                  <h2 className="text-gray-800 text-lg font-semibold mb-2 text-center py-4">
                    {resource.name}
                  </h2>
                  <p className="text-gray-600 text-center px-4">
                    {resource.desc.length > 100
                      ? `${resource.desc.slice(0, 100)}...`
                      : resource.desc}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
