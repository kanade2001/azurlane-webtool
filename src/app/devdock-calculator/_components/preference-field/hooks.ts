import { useState } from "react";

export const usePreferences = () => {
  const [stage, setStage] = useState<string>("1");
  const [isDR, setIsDR] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  return {
    stage,
    isDR,
    progress,
    setStage,
    setIsDR,
    setProgress,
  };
};
