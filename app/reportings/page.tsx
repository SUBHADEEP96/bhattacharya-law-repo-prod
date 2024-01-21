"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import withPopup from "../../wrapper/withPopup";
import { Reporting } from "@/types/Reporting";
import client from "../sanity/client";
import { reportings } from "../../data";
const Reportings = () => {
  const [reportData, setReportData] = useState<Reporting[]>([]);
  const [number, setNumber] = useState(1);
  const [ascOrder, setAscOrder] = useState(false);
  const handleNext = () => {
    setNumber((prev) => prev + 1);
  };
  const handlePrev = () => {
    setNumber((prev) => prev - 1);
  };

  const handleSort = () => {
    if (ascOrder) {
      reportings.reverse();
      setAscOrder((prev) => !prev);
    } else {
      setAscOrder((prev) => !prev);
    }
  };

  let newArr = [...reportings];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: Reporting[] = await client.fetch(
          `*[_type == "reporting"]{
            _id,
            _createdAt,
            SL,
            Name,
            VST,
            Citation,
            Court
          }`,
          { next: { revalidate: 60 } }
        );
        setReportData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    newArr = [];
  }, [reportData]);
  // console.log(reportData);
  // const addData = useCallback(() => {
  //   reportData.forEach((report) => {
  //     reportings.push(report);
  //   });
  // }, [reportData]);

  // useEffect(() => {
  //   addData();
  // }, [addData]);
  return (
    <div className="flex justify-center items-center">
      <div className="container mx-auto px-4 sm:px-20">
        <div className="overflow-x-auto">
          <table className="table-auto border-spacing-2 border-separate border border-slate-500 my-10 p-8">
            <thead>
              <tr>
                <th>
                  SL No{" "}
                  <span
                    style={{ cursor: "pointer", color: "black" }}
                    onClick={handleSort}
                  >
                    {ascOrder ? "\u2193" : "\u2191"}
                  </span>
                </th>
                <th>Name & Particulars</th>
                <th>Citation (VST)</th>
                <th>Citation</th>
                <th>Court</th>
              </tr>
            </thead>
            <tbody>
              {reportings
                ?.toReversed()
                ?.slice(number * 20 - 20, number * 20)
                ?.map((tableData, index) => (
                  <tr key={index}>
                    <td>{tableData?.SL}</td>
                    <td>{tableData?.Name}</td>
                    <td>{tableData?.VST}</td>
                    <td>{tableData?.Citation}</td>
                    <td>{tableData?.Court}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          <button
            onClick={handlePrev}
            disabled={number === 1}
            style={{ backgroundColor: number === 1 ? "grey" : "black" }}
          >
            {" "}
            Back
          </button>
          <button
            onClick={handleNext}
            disabled={number === Math.ceil(reportings?.length / 20)}
            style={{
              backgroundColor:
                number === Math.ceil(reportings?.length / 20)
                  ? "grey"
                  : "black",
            }}
          >
            Next{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reportings;
