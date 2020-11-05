import { useEffect } from "react";
import { useRecoilSnapshot } from "recoil";

const GlobalObserver = () => {
  const snapshot = useRecoilSnapshot();
  useEffect(() => {
    console.debug("The following atoms were modified:");
    // change isModified to false to get all atoms and selector states
    for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
      console.log(node.key, snapshot.getLoadable(node).contents);
    }
  }, [snapshot]);

  return null;
};

export default GlobalObserver;
