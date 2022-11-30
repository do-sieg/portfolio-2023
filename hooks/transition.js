import { useEffect, useState } from "react";

// Dependencies are optional, reset can be used manually
export function useResetAnimations(resetDependencies = []) {
    const [registeredAnimations, setRegisteredAnimations] = useState([]);
    
    useEffect(() => {
        // Don't reset on empty dependencies (mounting)
        if (resetDependencies.length > 0) {
            reset()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, resetDependencies);

    function resetRef(el) {
        if (el) {
            el.getAnimations({ subtree: true }).forEach((animation) => {
                setRegisteredAnimations((previousState) => {
                    if (previousState.includes(animation)) return previousState;
                    return [...previousState, animation]
                });
            });
        }
    }

    function reset() {
        registeredAnimations.forEach((animation) => {
            animation.cancel();
            animation.play();
        });
    }

    return { resetRef, reset };
}