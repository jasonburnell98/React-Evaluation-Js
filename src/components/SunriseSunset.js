export const SunriseSunset = (props) => {
  // getting sunrise and sunset in props
  const { sunrise, sunset } = props;

  return (
    <>
      <hr className="mt-5 mb-5"></hr>
      <div className="row">
        <div className="col-md-6">
          <h2>Sunrise: {sunrise}</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h2>Sunset: {sunset}</h2>
        </div>
      </div>
    </>
  );
};
