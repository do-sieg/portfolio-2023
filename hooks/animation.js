import { useEffect, useState } from "react";

// Use resetRef as a ref to any element you want to reset animations
// Use reset to manually reset animations
// Pass resetDependencies as parameters to reset animations when dependencies change
export function useResetAnimations(resetDependencies = []) {
    const [registeredAnimations, setRegisteredAnimations] = useState([]);
    
    useEffect(() => {
        // Don't reset animations on first render
        if (registeredAnimations.length > 0) {
            reset();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, resetDependencies);

    function resetRef(el) {
        const animations = registeredAnimations;
        if (el) {
            el.getAnimations({ subtree: true }).forEach((animation) => {
                if (!animations.includes(animation)) {
                    animations.push(animation);
                }
            });
            setRegisteredAnimations(animations);
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