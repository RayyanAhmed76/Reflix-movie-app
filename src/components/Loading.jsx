import loader from "/loader.gif";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <img className=" color-[#6556cd]" src={loader} alt="" />
    </div>
  );
};

export default Loading;
