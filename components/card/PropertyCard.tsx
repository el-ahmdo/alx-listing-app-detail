import { PropertyProps } from "@/interfaces";
import React from "react";
import Link from "next/link";

const PropertyCard: React.FC<PropertyProps> = (props) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-2">
        <div className="flex items-center text-sm text-gray-500 mb-1">
          <span className="font-semibold text-gray-700 mr-2">
            {props.category[0]}
          </span>
          <span className="mr-2">&middot;</span>
          <span className="font-semibold text-gray-700 mr-2">
            {props.category[1]}
          </span>
          <span className="mr-2">&middot;</span>
          <span className="font-semibold text-gray-700">
            {props.category[2]}
          </span>
        </div>
        <h3 className="font-semibold text-lg text-gray-900 mb-1">
          {props.name}
        </h3>
        <p className="text-sm text-gray-500 mb-2">
          {props.address.state}, {props.address.city}, {props.address.country}
        </p>
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <span className="text-yellow-500 mr-1">★</span> {props.rating}
        </div>
        <div className="flex justify-between mt-2">
          <p className="text-xl font-bold text-gray-900">
            ${props.price}
            <span className="text-sm font-normal text-gray-500">/n</span>
          </p>
          <Link
            href={`/property/${props.name}`}
            className="bg-green-500 rounded-lg px-2 py-2 text-white font-medium"
          >
            <button type="button">View</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
