import React from "react";
import Image from "next/image";

export default function IOSButton() {
  return (
    <button className="">
      <a
        href="https://www.apple.com/app-store/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/app-store-badge.png"
          alt="Download on the App Store"
          width={140}
          height={60}
        />
      </a>
    </button>
  );
}
