// components/GTMInitializer.tsx
"use client";
import { useEffect } from "react";
import TagManager from "react-gtm-module";

const tagManagerArgs1 = {
  gtmId: "GTM-N73KWRD",
};

const tagManagerArgs2 = {
  gtmId: "GTM-WXTXSJ3C",
};

const GTMInitializer = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      TagManager.initialize(tagManagerArgs1);
      TagManager.initialize(tagManagerArgs2);
    }
  }, []);

  return null;
};

export default GTMInitializer;
