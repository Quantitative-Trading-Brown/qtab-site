"use client";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "@/scripts/firestore";


export default function Events() {
  const [info, setData] = useState<Object>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "events"));
        const documents = querySnapshot.docs;
        const data = Object.fromEntries(
          documents.map((doc) => [doc.id, doc.data()])
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Object.values(info).map((resource, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-6 flex">
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
  );
}
