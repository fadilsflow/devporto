// "use client";

// import Image from "next/image";

// import { SocialLink } from "@/components/social-link";
// import ModeToggle from "@/components/mode-toggle";
// import { JOB, NAME, SOCIAL_LINKS, TIMEZONE, WORK } from "./data";
// import GitHubCalendar, { Activity } from 'react-github-calendar';

// import { ResumeCard } from "@/components/ResumeCard";
// import { useCallback } from "react";


// import Blog from "@/components/Blog";
// import { BentoGrid } from "@/components/BentoGrid";
// import { projects } from "./data";
// import { BriefcaseIcon, Mail, UserIcon } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// export default function Home() {
//   const selectLastHalfYear = useCallback((contributions: Activity[]) => {
//     const currentYear = new Date().getFullYear();
//     const currentMonth = new Date().getMonth();
//     const shownMonths = 6;

//     return contributions.filter((activity: Activity) => {
//       const date = new Date(activity.date);
//       const monthOfDay = date.getMonth();
//       const yearOfDay = date.getFullYear();

//       // Jika bulan sekarang adalah Januari-Juni, kita perlu melihat tahun sebelumnya
//       if (currentMonth < shownMonths) {
//         return (
//           (yearOfDay === currentYear && monthOfDay <= currentMonth) ||
//           (yearOfDay === currentYear - 1 && monthOfDay > currentMonth - shownMonths)
//         );
//       }

//       // Untuk bulan Juli-Desember, kita hanya perlu melihat tahun sekarang
//       return (
//         yearOfDay === currentYear &&
//         monthOfDay > currentMonth - shownMonths &&
//         monthOfDay <= currentMonth
//       );
//     });
//   }, []);

//   return (
//     <div className="min-h-screen relative">
//       {/* Header */}
//       <header className="border-b border-t flex justify-between items-center sticky top-0 z-50 bg-background backdrop-blur-3xl">
//         <h1 className="py-3 px-10 font-mono font-medium">fadils<span className="text-muted-foreground text-xs">.xyz</span></h1>
//         <div className="items-center hidden md:flex">
//           <div className="flex border-l py-5 pl-10 text-xs gap-10 pr-10">
//             <p >ABOUT</p>
//             <p >PROJECTS</p>
//             <p >BLOG</p>
//           </div>
//           <p className=" text-xs text-muted-foreground border-l px-2 py-2 ">
//             <ModeToggle />
//           </p>
//         </div>
//       </header >

//       <main className="flex flex-row">
//         {/* Left Stripe Pattern */}
//         <div className="hidden md:block w-14 relative" style={{
//           backgroundImage: 'repeating-linear-gradient(45deg, rgba(100, 100, 120, 0.2) 0px, rgba(100, 100, 120, 0.2) 1px, transparent 1px, transparent 10px)'
//         }}></div>

//         {/* Main Content */}
//         <div className="min-h-screen flex-1 border-x text-sm ">
//           <div className="space-y-5">
//             {/* Profile Section */}
//             <section className="relative">
//               <div className="container   mx-auto">
//                 {/* <div className="flex flex-col">
//                   <Image src="/profile.png" alt="profile" width={50} height={50} className="border rounded-full bg-muted/50" />
//                 </div> */}
//                 <div className="flex flex-col  px-10 space-y-5 min-h-screen items-start justify-center   ">

//                   <h1 className="text-7xl text-balance    font-medium ">
//                     {JOB}
//                   </h1>
//                   <p className="text-xl   text-muted-foreground font-light">
//                     I'm Fadil, a full-stack web developer based in Indonesia. <br />Love tech, and building something awesome
//                   </p>
//                   <div className="flex gap-5   ">
//                     {SOCIAL_LINKS.map((link) => (
//                       <SocialLink
//                         key={link.icon}
//                         href={link.href}
//                         icon={link.icon}
//                         label={link.label}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </section>
//           </div>

//           <div className="md:grid-cols-[1fr_1.5fr] px-10  space-x-5 grid grid-cols-1">
//             {/* Left Section */}
//             <div className="space-y-5 ">
//               <section id="work-experience" >
//                 <div className="flex min-h-0 p-5 border rounded-xl  flex-col gap-y-3 px-5 py-5 ">
//                   <h3 className="  flex items-center gap-2">
//                     <UserIcon className="w-5 h-5" />
//                     About
//                   </h3>
//                   <p className="text-muted-foreground">Get notified when I publish something new, and unsubscribe at any time.</p>
//                   <form action="mail" className="flex gap-5">
//                     <Input type="mail" name="mail" id="mail" />
//                     <Button type="submit">Join</Button>
//                   </form>
//                 </div>
//               </section>
//               <section id="github-contributions" >
//                 <div className="flex min-h-0  flex-col gap-y-3 px-5 py-5 ">
//                   {/* <div className="flex flex-col">
//                     <h2 className="text-muted-foreground uppercase pb-3">Love 🤍</h2>
//                     <TechnicalSkills />
//                   </div> */}
//                   <div className="grid grid-cols-1 ">
//                     <div className="w-full  p-5">

//                       <GitHubCalendar
//                         username="fadilsflow"
//                         transformData={selectLastHalfYear}
//                         hideColorLegend
//                         blockMargin={5}
//                         blockRadius={0}
//                         blockSize={8}
//                         labels={{
//                           totalCount: '{{count}} github contributions in the last half year',
//                         }}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </section>

//             </div>
//             {/* Right Section */}
//             <div className="space-y-5 ">
//               <section id="work-experience" >
//                 <div className="flex min-h-0 p-5 border rounded-xl  flex-col gap-y-3 px-5 py-5 ">
//                   <h3 className="  flex items-center gap-2">
//                     <Mail className="w-5 h-5" />
//                     Stay up to date
//                   </h3>
//                   <p className="text-muted-foreground">Get notified when I publish something new, and unsubscribe at any time.</p>
//                   <form action="mail" className="flex gap-5">
//                     <Input type="mail" name="mail" id="mail" />
//                     <Button type="submit">Join</Button>
//                   </form>
//                 </div>
//               </section>
//               <section id="work-experience" >
//                 <div className="flex min-h-0 p-5 border rounded-xl  flex-col gap-y-3 px-5 py-5 ">
//                   <h3 className="  flex items-center gap-2">
//                     <BriefcaseIcon className="w-5 h-5" />
//                     Work
//                   </h3>
//                   {WORK.map((work, id) => (
//                     <ResumeCard
//                       key={work.company}
//                       logoUrl={work.logoUrl}
//                       altText={work.company}
//                       title={work.company}
//                       subtitle={work.title}
//                       href={work.href}
//                       period={`${work.start} - ${work.end ?? "Present"}`}
//                       description={work.description}
//                     />
//                   ))}
//                 </div>
//               </section>

//             </div>
//           </div>
//           <section id="projects">
//             <div className="flex min-h-0  flex-col gap-y-3 ">
//               {/* <h3 className="uppercase text-muted-foreground">Projects</h3> */}
//               <BentoGrid projects={projects} />
//             </div>
//           </section>
//         </div>

//         {/* Right Stripe Pattern */}
//         <div className="hidden md:block w-14 relative" style={{
//           backgroundImage: 'repeating-linear-gradient(45deg, rgba(100, 100, 120, 0.2) 0px, rgba(100, 100, 120, 0.2) 1px, transparent 1px, transparent 10px)'
//         }}></div>
//       </main >

//       <footer className="border-t">
//         <div className="flex flex-col justify-center container items-center py-5 text-center gap-4">
//           <p className="text-muted-foreground">
//             &copy; 2025 Fadil. All rights reserved.
//           </p>
//         </div>
//       </footer>
//     </div >
//   );
// }
