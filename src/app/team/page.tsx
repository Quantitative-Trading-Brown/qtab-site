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
};

function TeamHeader(props:any) {
  return (
    <b>
      <h1 className="text-4xl py-5 mb-8">{props.text}</h1>
    </b>
  );
}

export default function Team() {
  const [info, setData] = useState<Object>({});
  const [loading, setLoading] = useState(true);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState<ResourceData>();

  function Card(props:any) {
    return (
      <div
        className="bg-white shadow-md rounded-lg p-6 cursor-pointer flex flex-col items-center max-w-sm"
        onClick={() => {
          setSelectedResource(props.resource);
          setIsOpen(true);
        }}
      >
        <img
          className="w-64 h-64 object-cover rounded-md border-4 border-black mb-4 mx-auto"
          src={props.resource.image}
          alt={props.resource.name}
        />
        <h2 className="text-gray-800 text-lg font-semibold mb-2 text-center py-4">
          {props.resource.name}
        </h2>
        <p className="text-gray-600 text-center px-4">
          {props.resource.desc.length > 100
            ? `${props.resource.desc.slice(0, 100)}...`
            : props.resource.desc}
        </p>
      </div>
    );
  }

  function Section(props:any) {
    return (
      <div className="flex flex-col items-center justify-center">
        <TeamHeader text={props.header} />
        <div className={`grid md:grid-cols-${props.width} gap-6 px-10`}>
          {Object.values(info)
            .filter(
              (resource) =>
                resource.display && resource.position == props.keyword,
            )
            .sort((a, b) => a.index - b.index)
            .map((resource, index) => (
              <Card resource={resource} key={index} />
            ))}
        </div>
      </div>
    );
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "team"));
        const documents = querySnapshot.docs;
        const data = Object.fromEntries(
          documents.map((doc) => [doc.id, doc.data()]),
        );
        setData(data);
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
        <hr className="my-4 border-t-2 border-gray-300" />

        <div className="flex flex-col items-center justify-center">
          <Section header="Leadership" keyword="Leadership" width={3} />
          <hr className="my-10" />
          <Section header="Advisors" keyword="Advisor" width={3}/>
        </div>

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
                className="w-full h-auto object-cover rounded-none border-2 border-red-500 mb-6"
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
      </div>
    </section>
  );
}
