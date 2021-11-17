import { useEffect } from "react";

const useClickOutside = ({ ref, handler }) => {
    useEffect(() => {
        const handleClickOutside = (e: Event) => ref.current
      && !ref.current.contains(e.target)
      && typeof handler === "function"
      && handler(e);
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ ref, handler ]);
};

export default useClickOutside;
