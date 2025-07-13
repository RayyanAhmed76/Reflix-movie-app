const Error = () => {
  console.log("heyy from error");
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black">
      <video className="h-[50%] object-cover" autoPlay loop muted playsInline>
        <source src="/404.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Error;
