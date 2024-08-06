import Image from "next/image";
import React, {
  useEffect,
  forwardRef,
  PropsWithChildren,
  useCallback,
} from "react";
import X from "@/public/icons/x.svg";

interface Props {
  transitions?:
    | "top-to-bottom"
    | "bottom-to-top"
    | "right-to-left"
    | "left-to-right";
  className: string;
}

// eslint-disable-next-line react/display-name
const Dialog = forwardRef(
  (
    {
      transitions = "left-to-right",
      className,
      children,
    }: PropsWithChildren<Props>,
    ref: any
  ) => {
    const closeModal = useCallback(
      (animation: string) => {
        document.body.style.overflow = "";
        if (ref.current) {
          ref.current.classList.add(animation);
          const animationEnd = () => {
            ref.current?.classList.remove(animation);
            ref.current?.close();
            ref.current?.removeEventListener(
              "webkitAnimationEnd",
              animationEnd,
              false
            );
          };
          ref.current.addEventListener("webkitAnimationEnd", animationEnd);
        }
      },
      [ref]
    );

    useEffect(() => {
      ref.current?.addEventListener("click", function (event: any) {
        var rect = ref.current?.getBoundingClientRect();
        if (rect) {
          if (
            rect.left > event.clientX ||
            rect.right < event.clientX ||
            rect.top > event.clientY ||
            rect.bottom < event.clientY
          ) {
            closeModal("hide");
          }
        }
      });
    }, [ref, closeModal]);

    return (
      <dialog
        ref={ref}
        className={`fixed lg:top-0  lg:w-[50rem] w-full rounded dialog  ${transitions} ${className}`}
      >
        {/* <div className="relative flex justify-end -mb-8 z-20">
          <button onClick={() => closeModal("hide")} className="p-5">
            <Image src={X} alt="X" className="max-w-[1rem]" />
          </button>
        </div> */}
        {children}
      </dialog>
    );
  }
);

export default Dialog;
