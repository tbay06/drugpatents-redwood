import { routes, NavLink } from '@redwoodjs/router'
import {
  DocumentSearchIcon,
  HomeIcon,
  BookmarkIcon,
} from '@heroicons/react/outline'
const SideNav = () => {
  return (
    <div className="fixed left-0 h-full bg-gray-800 mt-16 w-1/6">
      <div className="mx-10 flex flex-col space-4 space-y-4">
        <NavLink
          className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white flex flex-row justify-between"
          activeClassName="px-3 py-2 rounded-md text-sm font-medium bg-gray-900 text-white"
          to={routes.home()}
        >
          Home
          <HomeIcon className="block h-6 w-6" />
        </NavLink>
        <NavLink
          className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white flex flex-row justify-between"
          activeClassName="px-3 py-2 rounded-md text-sm font-medium bg-gray-900 text-white"
          to={routes.drugPatents()}
        >
          Browse Patents
          <DocumentSearchIcon className="block h-6 w-6" />
        </NavLink>
        <NavLink
          className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white flex flex-row justify-between"
          activeClassName="px-3 py-2 rounded-md text-sm font-medium bg-gray-900 text-white"
          to={routes.savedPatents()}
        >
          Saved Patents
          <BookmarkIcon className="block h-6 w-6" />
        </NavLink>
      </div>
    </div>
  )
}

export default SideNav
