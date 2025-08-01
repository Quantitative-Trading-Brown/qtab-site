"use client";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "@/scripts/firestore";

type Event = {
  date: {
    seconds: number;
    nanoseconds: number;
  };
  occurred: boolean;
  hosts: string[];
  name: string;
  description: string;
};

export default function Events() {
  const [info, setData] = useState<Object>("");
  const [loading, setLoading] = useState(true);

  const [showPast, setShowPast] = useState(true);

  const toggleSwitch = () => setShowPast(!showPast);

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

  const eventSorter = (a: Event, b: Event) => {
    // Events without dates should go to beginning
    if (a.date && !b.date) {
      return 1;
    } else if (!a.date && b.date) {
      return -1;
    } else if (!a.date && !b.date) {
      return 0;
    }

    // Events that occurred should go to end
    if (a.occurred && !b.occurred) {
      return 1;
    } else if (!a.occurred && b.occurred) {
      return -1;
    } else if (a.occurred && b.occurred) {
      return b.date.seconds - a.date.seconds;
    }

    // Sort by date if all else goes through
    return a.date.seconds - b.date.seconds;
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-between gap-5 items-center">
        <span>Show Past Events</span>
        <div
          className={`w-14 h-8 flex rounded-xl items-center p-1 cursor-pointer ${
            showPast ? "bg-blue-500" : "bg-gray-400"
          }`}
          onClick={toggleSwitch}
        >
          <div
            className={`bg-white w-6 h-6 rounded-xl shadow-md transform duration-300 ${
              showPast ? "translate-x-6" : ""
            }`}
          ></div>
        </div>
      </div>
      <div className="pt-5">
        We will keep this list updated with quant-related events on campus.
      </div>

      <div className="px-20 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.values(info)
          .sort(eventSorter)
          .map((resource, index) => (
            <div
              key={index}
              className={`text-white border-white border-[1px] rounded-lg p-6 h-[15em]
                ${resource.occurred ? "bg-transparent" : "bg-transparent"}
                ${!showPast && resource.occurred ? "hidden" : "flex"}`}
            >
              <div className="flex flex-col justify-top">
                <h2 className="text-lg font-semibold mb-2 h-[3em]">
                  {resource.name}
                </h2>
                {resource.date ? (
                  <div className="text-lg mb-2">
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
                  <div className="text-lg mb-2">
                    Hosted by:{" "}
                    {resource.hosts.map((host: string) => (
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
    </div>
  );
}
