/** @format */
"use client";
import { useMenuContext } from "@/context/MenuContext";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useWelcomeContext } from "@/context/WelcomeContext";
import NavbarComp from "../navbar/NavbarComp";
import MainNavbar from "../navbar/MainNavbar";
import Image from "next/image";
import { BsList } from "react-icons/bs";
import Mobile from "../navbar/Mobile";
import { motion, AnimatePresence } from "framer-motion";
import ListMenu from "../navbar/ListMenu";

type Props = {};

const HeaderUser = (props: Props) => {
  const { isOpen, setIsOpen } = useMenuContext();
  const { welcome, setWelcome } = useWelcomeContext();
  const pathname = usePathname();
  // state
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    setWelcome("Selamat Datang di Halaman User");

    return () => {};
  }, [pathname, setWelcome]);

  // ketika pathname berubah
  useEffect(() => {
    setIsOpen(false);
  }, [pathname, setIsOpen]);
  // console.log({ isOpen });
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  // mendapatkan posisi scroll
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    // Set header to fixed after scrolling 50px
    if (currentScrollY >= 50) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    // Menambahkan event listener untuk scroll
    window.addEventListener("scroll", handleScroll);

    // Kembali ke atas saat pertama kali dirender
    window.scrollTo(0, 0);

    return () => {
      // Menghapus event listener saat komponen dibongkar
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`z-10 transition-transform duration-500 lg:block ${
        isFixed ? "fixed top-0 left-0 w-full fade-in slide-down" : ""
      }`}
    >
      <section className="transition-opacity duration-500 opacity-100 hidden lg:block">
        {/* main menu */}
        <div className="bg-primary text-white py-2">
          <div className="md:container mx-auto">
            <MainNavbar />
          </div>
        </div>
        {/* second menu */}
        <div className="bg-white text-fourth py-3 border uppercase">
          <div className="md:container mx-auto">
            <NavbarComp />
          </div>
        </div>
      </section>
      {/* for mobile */}
      <section className="bg-primary lg:hidden py-2 px-2 text-white flex justify-end">
        {/* button menu */}
        <BsList
          className="text-3xl font-bold cursor-pointer select-none"
          onClick={handleClick}
        />
      </section>
      {/* mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.section
            className="lg:hidden overflow-auto max-h-[80svh] bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: ListMenu.length * 0.1 } }}
          >
            <Mobile />
          </motion.section>
        )}
      </AnimatePresence>
      {/* logo */}
      <div className="lg:absolute left-[50%] -translate-x-[57%] h-[120px] w-[310px] -top-1 hidden lg:block">
        <Image src="/images/logo.svg" alt="logo" fill />
      </div>
      <div className="absolute left-[50%] -translate-x-[50%] h-[60px] w-[160px]  top-0 lg:hidden">
        <Image src="/images/logo_mobile.svg" alt="logo" fill />
      </div>
    </header>
  );
};

export default HeaderUser;
