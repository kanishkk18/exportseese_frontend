"use client";

import { useEffect } from "react";

const SecurityFeatures = () => {
  useEffect(() => {
    // Disable right click
    const handleContextMenu = (e) => {
      e.preventDefault();
      return false;
    };

    // Disable text selection
    const handleSelectStart = (e) => {
      e.preventDefault();
      return false;
    };

    // Disable copy/paste
    const handleCopy = (e) => {
      e.preventDefault();
      return false;
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("selectstart", handleSelectStart);
    document.addEventListener("copy", handleCopy);

    // Add CSS to disable text selection
    const style = document.createElement("style");
    style.textContent = `
      * {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("selectstart", handleSelectStart);
      document.removeEventListener("copy", handleCopy);
      document.head.removeChild(style);
    };
  }, []);

  return null;
};

export default SecurityFeatures;
