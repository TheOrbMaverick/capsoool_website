"use client";
import Contact from "@/components/home/Contact";
import FAQs from "@/components/home/FAQs";
import Features from "@/components/home/Features";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import Setup from "@/components/home/Setup";

const Home: React.FC = () => {
  return (
    <div className="min-h-[100dvh]">
      <Hero />
      <Features />
      <Setup />
      <FAQs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

// <Head>
//   <title>Capsoool App</title>
//   <meta
//     name="description"
//     content="Download the Oneredbox App for iOS and Android"
//   />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
// </Head>

// {/* Hero Section */}
// <div
//   className="flex-grow bg-cover bg-center text-white py-20 px-4"
//   style={{ backgroundImage: "url('/hero-section3.webp')" }}
// >
//   <div className="max-w-4xl mx-auto text-center mt-20 pt-40">
//     <h1 className="text-4xl md:text-6xl font-bold">
//       Download the Capsoool App
//     </h1>
//     <p className="text-lg md:text-2xl mt-4 font-bold">
//       Access everything you need, right at your fingertips.
//     </p>
//     <div className="flex justify-center gap-4 mt-8">
//       {/* Google Play Badge */}
//       <a
//         href="https://play.google.com/store/apps"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <Image
//           src="/google-play-badge.png"
//           alt="Get it on Google Play"
//           width={180}
//           height={60}
//         />
//       </a>

//       {/* Apple App Store Badge */}
//       <a
//         href="https://www.apple.com/app-store/"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <Image
//           src="/app-store-badge.png"
//           alt="Download on the App Store"
//           width={180}
//           height={60}
//         />
//       </a>
//     </div>
//   </div>
// </div>
