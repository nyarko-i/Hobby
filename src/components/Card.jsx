import PropTypes from "prop-types";

export default function Card({ title, imageSrc, description }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-3 m-3 text-blue-700 transition-transform transform hover:scale-105 hover:shadow-sm">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
      </div>
      <img
        className="w-full transition-opacity duration-300 hover:opacity-80"
        src={imageSrc}
        alt={title}
      />
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
}

// Define prop types
Card.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
