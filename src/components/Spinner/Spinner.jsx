import { Hourglass } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-[70vh]">
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["#306cce", "#72a1ed"]}
      />
    </div>
  );
};

export default Spinner;
