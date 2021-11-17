// copied
import { useEffect } from "react";

const useEscapePressed = ({ handler }) => {
    useEffect(() => {
        const onEscapePressed = (e: KeyboardEvent) => e.key === "Escape" && typeof handler === "function" && handler(e);
        document.addEventListener("keydown", onEscapePressed);

        return () => {
            document.removeEventListener("keydown", onEscapePressed);
        };
    }, [ handler ]);
};

export default useEscapePressed;
