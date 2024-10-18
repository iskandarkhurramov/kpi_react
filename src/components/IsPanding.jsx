import { Circles } from "react-loader-spinner";
function IsPanding() {
  return (
    <div>
      <div className="fixed left-0 right-0 top-0 bottom-0 w-full h-full bg-bgoverlay flex justify-center items-center">
        <div className=" px-2 py-6 relative">
          <Circles
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      </div>
    </div>
  );
}

export default IsPanding;
