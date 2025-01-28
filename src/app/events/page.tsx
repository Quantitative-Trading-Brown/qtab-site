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
          documents.map((doc) => [doc.id, doc.data()]),
        );
        console.log(data);
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
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Object.values(info)
        .sort((a, b) =>
          (a.date && b.date) && a.occurred ? b.date.seconds - a.date.seconds : 1,
        )
        .map((resource, index) => (
          <div
            key={index}
            className={
              "rounded-lg p-6 flex " +
              (resource.occurred ? "bg-gray-500" : "bg-white")
            }
          >
            <div className="flex flex-col justify-top">
              <h2 className="text-gray-800 text-lg font-semibold mb-2 h-[3em]">
                {resource.name}
              </h2>
              {resource.date ? (
                <div className="text-gray-800 text-lg mb-2">
                  {Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                  }).format(resource.date.seconds * 1000)}
                  {resource.occurred ? " (Completed)" : ""}
                </div>
              ) : null}
              {Array.isArray(resource.hosts) ? (
                <div className="text-gray-800 text-lg mb-2">
                  Hosted by:{" "}
                  {resource.hosts.map((host) => (
                    <div key={host}>{host}</div>
                  ))}
                </div>
              ) : null}
              {resource.description ? (
                <p className="text-gray-600">{resource.description}</p>
              ) : null}
            </div>
          </div>
        ))}
    </div>
  );
}
