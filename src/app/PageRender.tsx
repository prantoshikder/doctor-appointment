"use client";

import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

const PageRender = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  // const dispatch = useAppDispatch();

  useEffect(() => {
    setIsLoading(false);

    // dispatch(CountryCurrency.endpoints.getCountry.initiate());
    // dispatch(CountryCurrency.endpoints.getCurrency.initiate());

    // if (navigator.geolocation) {
    //   // navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
    //   navigator.geolocation.getCurrentPosition((position) => {
    //     console.log("position.coords", position);

    //     const latitude = position.coords.latitude;
    //     const longitude = position.coords.longitude;

    //     fetch(
    //       `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyBpWLsrD7X4jXWj2f1OFAKWzOMepuHzVYQ`,
    //       {
    //         cache: "no-cache"
    //       }
    //     )
    //       .then((res) => res.json())
    //       .then((response) => {
    //         console.log("response", response);
    //       });
    //   });
    // } else {
    //   console.log("Geolocation is not supported by this browser.");
    // }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useLayoutEffect(() => {
  //   console.log("before isRender");
  //   redirect("/");
  // }, []);

  return (
    <>
      {isLoading ? (
        <div className="page-loader h-screen flex justify-center items-center">
          <Spin size="large" />
        </div>
      ) : (
        <>
          {/* <GoogleOAuthProvider clientId="348461824776-e8lm5c3c83eqdv9705mjvt9s4q5vc83i.apps.googleusercontent.com"> */}
          {children}

          {/* <ScrollToTop /> */}
          {/* </GoogleOAuthProvider> */}
        </>
      )}

      <ToastContainer />
    </>
  );
};

export default PageRender;
