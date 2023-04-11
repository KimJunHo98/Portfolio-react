import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Pointer = () => {
    const pointerRef = useRef(null);
    const followerRef = useRef(null);

    useEffect(() => {
        const pointer = pointerRef.current;
        const follower = followerRef.current;

        // 마우스 움직임을 감지하는 이벤트 리스너
        const onMouseMove = (event) => {

            // 마우스 포인터의 위치를 업데이트
            gsap.to(pointer, {
                x: event.clientX - 15,
                y: event.clientY - 15,
                duration: 0.5,
                ease: "power2.out"
            });
            gsap.to(follower, {
                x: event.clientX - 10,
                y: event.clientY - 10,
                duration: .9,
                ease: "power2.out"
            });
        };


        // 이벤트 리스너를 등록
        document.addEventListener("mousemove", onMouseMove);

        return () => {
        // 이벤트 리스너를 해제
            document.removeEventListener("mousemove", onMouseMove);
        };
    }, []);

    return (
        <div>
            <div ref={pointerRef} className="cursor" />
            <div ref={followerRef} className="cursor_follower" />
        </div>
    );
};

export default Pointer;
