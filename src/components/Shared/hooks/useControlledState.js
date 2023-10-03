import { useRef, useEffect, useCallback } from "react";

function useControlledState({
  internalState,
  setInternalState,
  externalState,
  setExternalState
}) {
  const requiresSyncRef = useRef(false);

  useEffect(() => {
    if (externalState !== undefined) {
      setInternalState(externalState);
    }
  }, [setInternalState, externalState]);

  useEffect(() => {
    if (requiresSyncRef.current === false) return;

    if (typeof setExternalState === "function") {
      setExternalState(internalState);
    }

    requiresSyncRef.current = false;
  }, [setExternalState, internalState]);

  const setInternalStateAndQueueSync = useCallback(
    (value) => {
      setInternalState(value);
      requiresSyncRef.current = true;
    },
    [setInternalState]
  );

  return setInternalStateAndQueueSync;
}

export default useControlledState;
