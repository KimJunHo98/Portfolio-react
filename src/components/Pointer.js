import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Pointer = () => {
    const pointerRef = useRef(null);

    useEffect(() => {
        const pointer = pointerRef.current;

        // 마우스 움직임을 감지하는 이벤트 리스너를 등록합니다.
        const onMouseMove = (event) => {
        // 마우스 포인터의 위치를 업데이트합니다.
            gsap.to(pointer, {
                x: event.clientX,
                y: event.clientY,
                duration: 0.5,
                ease: "power2.out"
            });
        };

        // 이벤트 리스너를 등록합니다.
        document.addEventListener("mousemove", onMouseMove);

        return () => {
        // 이벤트 리스너를 해제합니다.
            document.removeEventListener("mousemove", onMouseMove);
        };
    }, []);

    return <div ref={pointerRef} className="mouse_pointer" />;
};

export default Pointer;
