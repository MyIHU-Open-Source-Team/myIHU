import { useColorModeValue } from "@chakra-ui/react";
import React from "react";

function CloseIcon() {
  return (
    <svg
      width="30px"
      version="1.1"
      viewBox="0 0 700 700"
      xmlns="http://www.w3.org/2000/svg"
      fill={useColorModeValue("#224364", "#f3f3f3")}
    >
      <path d="m517.12 422.27c3.3125 3.2891 5.1758 7.7617 5.1758 12.426 0 4.668-1.8633 9.1406-5.1758 12.426-3.3008 3.2773-7.7734 5.1016-12.426 5.0742-4.6523 0.027343-9.1211-1.7969-12.426-5.0742l-142.27-142.45-142.27 142.45c-3.3047 3.2773-7.7734 5.1016-12.426 5.0742-4.6523 0.027343-9.125-1.7969-12.426-5.0742-3.3125-3.2852-5.1758-7.7578-5.1758-12.426 0-4.6641 1.8633-9.1367 5.1758-12.426l142.45-142.27-142.45-142.27c-4.4375-4.4414-6.1719-10.91-4.5469-16.973 1.625-6.0664 6.3594-10.801 12.426-12.426 6.0625-1.625 12.531 0.10938 16.973 4.5469l142.27 142.45 142.27-142.45c4.4414-4.4375 10.91-6.1719 16.973-4.5469 6.0664 1.625 10.801 6.3594 12.426 12.426 1.625 6.0625-0.10938 12.531-4.5469 16.973l-142.45 142.27z" />
    </svg>
  );
}

export default CloseIcon;
