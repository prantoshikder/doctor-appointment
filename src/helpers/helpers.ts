import { RangePickerProps } from "antd/es/date-picker";
import moment from "moment";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const validateOnlyNumbers = (value: any) => {
  return value.match(/^\d+$/);
};

export const validateEmail = (inputText: any) => {
  var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.match(mailFormat)) {
    return true;
  } else {
    return false;
  }
};

export const isValidEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const validateMobileNumber = (phone: any) => {
  return phone.match(/^(\+88|0088)(\d)+$/);
};

export const validatePhoneNumber = (number: any) => {
  return number.match(
    /^[+]?(1\-|1\s|1|\d{3}\-|\d{3}\s|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/g
  );
};

export const utcDateFormat = () => {
  const date = new Date();
  const now_utc = Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  );

  // console.log('utc date*****', new Date(now_utc));

  return new Date(now_utc);
};

export const copyText = (data: number | string, msg = "Number copied") => {
  navigator?.clipboard?.writeText(data?.toString());

  toast.success(msg, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

function padTo2Digits(num: any) {
  return num.toString().padStart(2, "0");
}

export const statusChangesTimeDuration = (
  createdAt: any,
  changeStatusAt: any
) => {
  let milliseconds: any =
    new Date(changeStatusAt).getTime() - new Date(createdAt).getTime();

  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  seconds = seconds % 60;
  minutes = minutes % 60;
  hours = hours % 24;

  return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
    seconds
  )}`;
};

export const cratedTimeDuration = (createdAt: any) => {
  let milliseconds: any = new Date().getTime() - new Date(createdAt).getTime();

  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  seconds = seconds % 60;
  minutes = minutes % 60;
  hours = hours % 24;

  return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
    seconds
  )}`;
};

export const phone = (data: any) => {
  const filedLength = data?.length;

  return `${data?.slice(0, 8)}xxxx${data?.slice(filedLength - 2, filedLength)}`;
};

export const email = (data: any) => {
  const filedLength = data?.length;

  return `${data?.slice(0, 2)}xxxxxxx${data?.slice(
    filedLength - 10,
    filedLength
  )}`;
};

export const disabledDate: RangePickerProps["disabledDate"] = (current) => {
  let customDate = moment().format("YYYY-MM-DD");
  return current && current > moment(customDate, "YYYY-MM-DD");
};

export function convertMinutesToCountdown(minutes: number) {
  "use strict";

  // Get the number of hours, minutes, and seconds.
  const hours = Math.floor(minutes / 60);
  const time = minutes % 60;

  // Return the countdown string.
  return `${hours}:${time}`;
}

export const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const downloadImage = async (
  imageSrc: string,
  imageName: string,
  forceDownload = false
) => {
  if (!forceDownload) {
    const link = document.createElement("a");
    link.href = imageSrc;
    link.download = imageName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const imageBlob = await fetch(imageSrc)
    .then((res) => res.arrayBuffer())
    .then((buffer) => new Blob([buffer], { type: "image/png" }));

  console.log(imageBlob, URL.createObjectURL(imageBlob));

  const link = document.createElement("a");
  link.href = URL.createObjectURL(imageBlob);
  link.download = imageName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const UseMediaQuery: any | boolean = () => {
  const [windowWidth, setWindowWidth] = useState<any | boolean | number>();

  const isWindow = typeof window !== "undefined";

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getWidth = () => (isWindow ? window.innerWidth : windowWidth);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const resize = () => setWindowWidth(getWidth());

  useEffect(() => {
    if (isWindow) {
      setWindowWidth(getWidth());

      window.addEventListener("resize", resize);

      return () => window.removeEventListener("resize", resize);
    }
  }, [getWidth, isWindow, resize]);

  return windowWidth;
};

export function useMediaQuery(query: string): boolean {
  const getMatches = (query: string): boolean => {
    // Prevents SSR issues
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState<boolean>(getMatches(query));

  function handleChange() {
    setMatches(getMatches(query));
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    // Triggered at the first client-side load and if query changes
    handleChange();

    // Listen matchMedia
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener("change", handleChange);
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener("change", handleChange);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return matches;
}
