"use client";
import React from "react";

interface ICTAButton {
  text: string;
  onPress: () => void;
  styles?: string;
}

export default function CTAButton({ text, onPress, styles }: ICTAButton) {
  return (
    <button
      onClick={onPress}
      className={`bg-blue-500 px-6 py-3 font-semibold rounded-lg hover:bg-transparent transition-all duration-300 outline-2 outline-none hover:outline-blue-500 ${styles}`}
    >
      {text}
    </button>
  );
}
