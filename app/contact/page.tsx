"use client";
import React, { useState } from "react";
import withPopup from "../../wrapper/withPopup";
import { MdLocationPin, MdMarkEmailRead } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import Link from "next/link";
const Contact = () => {
  const [selectedLocation, setSelectedLocation] = useState("kolkata");
  let locationMap = [
    {
      id: 1,
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.5812082379457!2d88.3557562750784!3d22.59476147947587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277cc1965e369%3A0x942ee4fab944b002!2sBhattacharyyas%20%26%20Associates%2C%20Advocates%20%26%20Consultants!5e0!3m2!1sen!2sin!4v1704144980452!5m2!1sen!2sin",
      location: "kolkata",
    },
    {
      id: 2,
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.5906111657655!2d88.43585307521754!3d26.72552267675917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e44151d57df5cb%3A0xa841bb95ce23adb7!2sBhattacharyyas%20%26%20Associates%2C%20Advocates%20%26%20Consultants%2C%20Siliguri%20Branch!5e0!3m2!1sen!2sin!4v1705310815679!5m2!1sen!2sin",
      location: "siliguri",
    },
  ];

  const handleLocationChange = (event: any) => {
    setSelectedLocation(event.target.value);
  };

  const getLocationMapSrc = () => {
    const selectedMap = locationMap.find(
      (location) => location.location === selectedLocation
    );
    return selectedMap ? selectedMap.src : "";
  };

  const contacts = [
    {
      id: "Kolkata",
      address:
        "Ground Floor, Bhagabati Bhaban, 56, BK Paul Avenue, Ahiritola, Kolkata - 700005",
      phone: "9432303309",
      email: "bhattacharyya.boudhayan@gmail.com",
    },
    {
      id: "Siliguri",
      address:
        "Haiderpara Main Rd, Ward 40, Haidar Para, Siliguri, West Bengal 734001",
      phone: "9831803309",
      email: "bhattacharyya.boudhayan@gmail.com",
    },
  ];

  return (
    <div className="container mx-auto px-5 my-2">
      <section className="text-gray-600 body-font relative">
        <div className="flex flex-col items-center sm:flex-row sm:items-stretch h-screen">
          <div className="w-full h-full   sm:w-2/3 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-5 sm:p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              title="map"
              src={getLocationMapSrc()}
              style={{
                filter: "grayscale(1) contrast(1.2) opacity(0.7)",
              }}
              allowFullScreen
            ></iframe>
          </div>
          <div className="bg-white mt-8 p-5 sm:p-8 rounded shadow-md w-full sm:w-auto">
            <div className="my-5">
              <label
                htmlFor="locationDropdown"
                className="block text-sm font-medium text-gray-600"
              >
                Select Map Location:
              </label>
              <select
                id="locationDropdown"
                onChange={handleLocationChange}
                value={selectedLocation}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              >
                {locationMap.map((location) => (
                  <option key={location.id} value={location.location}>
                    {location.location.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
            {contacts?.map((contact) => (
              <div className="contact-info my-5 text-center" key={contact.id}>
                <h2 className="text-center">
                  <b>{contact.id} Address</b>
                </h2>
                <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                  <MdLocationPin />
                </h2>
                <p className="leading-relaxed mb-5 text-gray-600">
                  {contact?.address}
                </p>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  <MdMarkEmailRead />
                </h2>
                <Link
                  href={`mailto:${contact?.email}`}
                  className="text-gray-900 leading-relaxed"
                >
                  {contact?.email}
                </Link>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  <IoCall />
                </h2>
                <p className="leading-relaxed">
                  <Link href={`tel:${contact?.phone}`}>
                    +91-{contact?.phone}
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default withPopup(Contact);
