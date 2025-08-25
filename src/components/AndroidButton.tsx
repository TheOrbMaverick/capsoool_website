import React from "react";
import Image from "next/image";

export default function AndroidButton() {
  return (
    <button>
      <a
        href="https://play.google.com/store/apps"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/google-play-badge.png"
          alt="Get it on Google Play"
          width={140}
          height={60}
        />
      </a>
    </button>
  );
}
