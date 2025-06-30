import { useState } from "react";
import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <div className="flex w-full justify-between py-4 px-6 bg-silver border-b-2 border-charcoal">
      <p className="font-bold text-crimson text-2xl p-2">
        Buletin
      </p>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        placeholder="Search Here"
      />

      <div className="flex gap-8 items-center">
        <div className="flex gap-2 items-center text-crimson">
          <FontAwesomeIcon icon={faVideo} className="text-xl" />
          <p className="text-xl">Live</p>
        </div>
        <img src="/assets/man.png"  className="h-12 w-12 object-cover rounded-full"/>
      </div>
    </div>
  )
}

export default Header
