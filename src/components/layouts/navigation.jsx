const Navigation = () => {
  return (
    <div>
      <nav className="flex justify-between px-8 bg-white py-4 w-full z-40 fixed">
        <div className="flex space-x-8">
          <img
            src="https://gpreyes.com/wp-content/uploads/2022/01/cropped-GP-Reyes-Logo-no-background-117x117.png"
            alt="Transportation service logo"
          />
          <div className="my-auto text-2xl font-bold">
            GP REYES CAR AND VAN RENTALS INC. <br />
            <span className="text-lg font-semibold">Let's Go Places!</span>
          </div>
        </div>
        <div className="space-x-8 my-auto text-lg font-semibold text-gray-600">
          <a href="">Home</a>
          <a href="">About Us</a>
          <a href="">Rates and Destinations</a>
          <a href="">Corporate Solutions</a>
          <a href="">Contact Us</a>
          <button className=" px-8 py-3 bg-blue-400 text-white font-bold rounded-xl">
            Login
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
