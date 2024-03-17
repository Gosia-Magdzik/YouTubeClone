import logo from "../assets/logo.png";
import {  Bell, Menu, Upload, User } from 'lucide-react';
import { Button } from "../components/Button";

export const PageHeader = () => {
  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <div className="flex gap-4 items-center flex-shrink-0">
        <Button 
          variant="ghost"
          size="icon"
          className="m-1"
        >
          <Menu/>
        </Button>
        <a href="/" className="flex flex-row h-6">
          <img src={logo} />
          <p>YouTube</p>
        </a>
      </div>
      <div></div>
      <div className="flex flex-shrink md:gap-2">
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
