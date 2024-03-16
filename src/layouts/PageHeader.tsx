import logo from "../assets/logo.png";
import { Ghost, Menu } from 'lucide-react';
import { Button } from "../components/Button";

export const PageHeader = () => {
  return (
    <div className="flex gap-10 lg:gap-20 justify-between">
      <div className="flex gap-4 items-center flex-shrink-0">
        <Button 
          variant="ghost"
          size="icon"
          className="m-10"
        >
          <Menu/>
        </Button>
        <a href="/" className="flex flex-row h-6 ">
          <img src={logo} />
          <p>YouTube</p>
        </a>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
