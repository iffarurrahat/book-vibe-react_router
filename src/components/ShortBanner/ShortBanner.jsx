const ShortBanner = ({ title }) => {
  return (
    <div className="bg-color bg-center bg-cover bg-no-repeat h-40 w-full flex items-center justify-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white ">
        {title}
      </h2>
    </div>
  );
};

export default ShortBanner;
