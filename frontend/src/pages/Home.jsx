import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="bg-cover bg-center bg-[url('https://plus.unsplash.com/premium_photo-1731842686156-74895c29a87b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHRyYWZmaWMlMjBsaWdodHxlbnwwfHwwfHx8MA%3D%3D')] h-screen w-full flex justify-between flex-col  bg-amber-200">
        <div className="w-40">
          <img src="../img/logo.png" alt="" />
        </div>
        <div className="bg-stone-50 py-5 px-10 sm:w-1/2 w-full mx-auto pb-8">
          <h1 className="font-bold text-stone-700 p-1 text-2xl">
            Get start With AR Travels.
          </h1>
          <Link
            to="/user-login"
            className="bg-blue-500 mt-2 w-full text-stone-100 py-2 px-5 font-medium rounded text-lg cursor-pointer inline-block text-center"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
