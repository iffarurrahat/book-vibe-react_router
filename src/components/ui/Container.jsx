import PropTypes from "prop-types";

const Container = ({ children }) => {
  return (
    <div className="w-full max-w-[1250px] px-[10px] sm:px-3 md:px-[25px] mx-auto">
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
};

export default Container;
