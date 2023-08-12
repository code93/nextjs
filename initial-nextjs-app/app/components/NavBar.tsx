import Link from "next/link";

export default function NavBar(){
    return(
        <nav className="bg-white p-2 flex justify-between">
        <Link href="/" className="font-bold text-gray-700 text-2xl">
             Sidebar{" "}
          </Link>
          <div className="hidden lg:flex lg:gap-x-12">
            <Link href="/" className="text-sm font-semibold leading-6 text-gray-900">content-1</Link>
            <Link href="/" className="text-sm font-semibold leading-6 text-gray-900">content-2</Link>
            <Link href="/" className="text-sm font-semibold leading-6 text-gray-900">content-3</Link>
            <Link href="/" className="text-sm font-semibold leading-6 text-gray-900">content-4</Link>
          </div>
          <div>
         
            
            <div className="flex">
     
              <button
                className="bg-blue-400 text-white border p-1 px-4 rounded mr-3"
              >
                Sign in
              </button>
              <button className="border p-1 px-4 rounded">Sign up</button>
            </div>
          </div>
        </nav>
    )
}