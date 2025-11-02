import React from "react";

export interface IFeatures {
  title: string;
  description: string;
  image?: string;
  icon?: React.ReactNode;
}

export const features: IFeatures[] = [
  {
    title: "Create Personalized Capsoools",
    description:
      "Store text, photos, videos, and documents in one place. Each Capsoool is a lasting message or memory that will be preserved exactly the way you intended.",
    image: "create-filled.png",
  },
  {
    title: "Not Just Text",
    description:
      "Select who each Capsoool is meant for, ensuring your words and memories reach the people who matter most when the time comes.",
    image: "create-filled.png",
  },
  {
    title: "Trusted Persons",
    description:
      "Assign trusted individuals to safeguard your wishes. They make sure your Capsoools are delivered securely and without compromise.",
    image: "home.png",
  },
  {
    title: "Secure & Private",
    description:
      "Your memories are protected with strong security, giving you peace of mind that only your chosen recipients will ever access them.",
    image: "lock.png",
  },
];
