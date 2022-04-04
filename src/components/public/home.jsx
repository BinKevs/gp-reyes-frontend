const Home = () => {
  return (
    <div>
      <div class="parallax">
        <div className="  flex h-screen pt-[10vh]">
          <div className="m-auto text-center  font-bold text-white space-y-4">
            <div className="text-4xl">SMALL SCALE PRICING</div>
            <div className="text-7xl">BIG SCALE SOLUTIONS</div>
            <button class="bg-blue-500 text-white px-24 py-4 rounded-full text-2xl font-bold hover:bg-blue-700 transition duration-300 uppercase">
              Request a quotation
            </button>
          </div>
        </div>
      </div>
      <div className="h-full bg-gray-100 p-28 text-gray-900 font-semibold">
        <div className=" w-2/5 mx-auto text-center text-xl">
          We are a leading transport service that specialize in both travel and
          B2B solutions. Our services are affordable, efficient, and reliable.
        </div>
      </div>
      <div className="h-full flex justify-center">
        <div className="">
          <div className="font-bold text-6xl text-center py-20">
            CHECK OUR SERVICES BELOW
          </div>
          <div className="grid grid-cols-2 gap-10 w-4/6 mx-auto">
            <div className="">
              <div className="">
                <img
                  width={450}
                  src="https://gpreyes.com/wp-content/uploads/2022/01/5BCEC7F8-D1D8-49E8-9B29-EDB797B7B1A5-768x576.jpg"
                  alt=""
                  className="mx-auto rounded-2xl"
                />
                <div className="text-center p-8  space-y-4">
                  <div className="font-bold text-3xl  uppercase">
                    Personal Travel
                  </div>
                  <div className=" font-medium text-lg  w-1/2 mx-auto">
                    Headed out to the beach? Want to explore the hottest tourist
                    spots? Or even chill at the night life of the metro? We've
                    got you covered!
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="">
                <img
                  width={450}
                  src="https://gpreyes.com/wp-content/uploads/2022/01/7FB12E58-1A0E-456A-A568-4E7363A76027-768x576.jpg"
                  alt=""
                  className="mx-auto  rounded-2xl"
                />
                <div className="text-center  p-8  space-y-4">
                  <div className="font-bold text-3xl  uppercase">
                    Corporate Solutions
                  </div>
                  <div className=" font-medium text-lg  w-1/2 mx-auto">
                    Headed out to the beach? Want to explore the hottest tourist
                    spots? Or even chill at the night life of the metro? We've
                    got you covered!
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="">
                <img
                  width={450}
                  src="https://gpreyes.com/wp-content/uploads/2022/01/189C0A50-C13C-4B52-914C-F75166F7A099-768x576.jpg"
                  alt=""
                  className="mx-auto  rounded-2xl"
                />
                <div className="text-center  p-8  space-y-4">
                  <div className="font-bold text-3xl  uppercase">
                    Community Outreach
                  </div>
                  <div className=" font-medium text-lg  w-1/2 mx-auto">
                    Headed out to the beach? Want to explore the hottest tourist
                    spots? Or even chill at the night life of the metro? We've
                    got you covered!
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="">
                <img
                  width={450}
                  src="https://gpreyes.com/wp-content/uploads/2022/01/B178FCB1-5FA9-40C4-A633-9F74A458C7E1-768x576.jpg"
                  alt=""
                  className="mx-auto  rounded-2xl"
                />
                <div className="text-center  p-8 space-y-4">
                  <div className="font-bold text-3xl  uppercase">
                    Shuttle Services
                  </div>
                  <div className=" font-medium text-lg  w-1/2 mx-auto">
                    Headed out to the beach? Want to explore the hottest tourist
                    spots? Or even chill at the night life of the metro? We've
                    got you covered!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
