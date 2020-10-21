export default function IndexPage() {
  return (
    <div className="font-body">
      {/* hero */}
      <div className="">
        <div className="relative min-h-screen">
          <div className="absolute inset-0 z-10">
            <div className="flex items-center justify-center w-full h-full p-4 text-center">
              <h1 className="text-5xl font-extrabold text-white font-display">
                Awesome Merapi
              </h1>
            </div>
          </div>
          <div className="absolute z-0">
            <img
              className="object-cover w-full h-screen"
              src="/image/1.jpg"
              alt="bg"
            />
          </div>
        </div>
      </div>

      {/* what to do */}
      <div className="min-h-screen">
        <div className="flex items-center justify-center text-center">
          <h2>What To Do in Merapi</h2>
        </div>
        <div>Hiking</div>
      </div>
      {/* gallery */}
      {/* visit & accomodation */}
      {/* footer */}
    </div>
  );
}
