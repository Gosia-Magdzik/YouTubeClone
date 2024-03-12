import logo from "../assets/logo.png";
import { Menu } from 'lucide-react';

export const PageHeader = () => {
  return (
    <div className="flex gap-10 lg:gap-20 justify-between">
      <div className="flex gap-4 items-center flex-shrink-0">
        <button>
          <Menu/>
        </button>
        <a href="/" className="flex flex-row h-6">
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
