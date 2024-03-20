import logo from "../assets/logo.png";
import {  Bell, Menu, Upload, User, Mic, Search } from 'lucide-react';
import { Button } from "../components/Button";
import { useState } from "react";

export const PageHeader = () => {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false)

  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <div 
        className={`gap-4 items-center flex-shrink-0 ${showFullWidthSearch ? "hidden" : "flex"}`}>
        <Button 
          variant="ghost"
          size="icon"
          className="m-1"
        >
          <Menu/>
        </Button>
        <a href="/" className="flex flex-row items-center h-11 w-11 mr-10">
          <img src={logo} />
          <p className="text-xl mx-2">YouTube</p>
        </a>
      </div>
      <form 
        className={`gap-4 flex-grow justify-center items-center mx-3 ${showFullWidthSearch ? "flex" : "hidden md:flex"}`}>
        <div className="flex flex-grow max-w-[600px]">
          <input
            type="search"
            placeholder="Search"
            className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none"
          />
          <Button
            className="py-2 px-4 rounded-r-full border-secondary-border border border-l-0 flex-shrink-0"
          >
            <Search/>
          </Button>
        </div>
        <Button
          type="button"
          size="icon"
          className="flex-shrink-0"
        >
          <Mic/>
        </Button>
      </form>
      <div 
        className={`flex-shrink-0 md:gap-2 items-center ${showFullWidthSearch ? "hidden" : "flex"}`}>
        <Button 
          onClick={() => setShowFullWidthSearch(true)}
          size="icon" 
          variant="ghost"
          className="md:hidden"
        >
          <Search/>
        </Button>
        <Button 
          size="icon" 
          variant="ghost"
          className="md:hidden"
        >
          <Mic/>
        </Button>
        <Button 
          size="icon" 
          variant="ghost"
        >
          <Upload/>
        </Button>
        <Button size="icon" variant="ghost">
          <Bell/>
        </Button>
        <Button size="icon" variant="ghost">
          <User/>
        </Button>
      </div>
    </div>
  )
}
