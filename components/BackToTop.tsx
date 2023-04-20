import { ArrowSquareUp } from "phosphor-react";
import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

const BackToTop = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (
                document.documentElement.scrollTop -
                    document.documentElement.clientHeight / 2 >
                0
            )
                setShow(true);
            else setShow(false);
        });

        return () => {
            window.addEventListener("scroll", () => {
                if (
                    document.documentElement.scrollTop -
                        document.documentElement.clientHeight / 2 >
                    0
                )
                    setShow(true);
                else setShow(false);
            });
        };
    });

    return (
        <CSSTransition
            in={show}
            appear={true}
            unmountOnExit
            classNames="rotate"
            timeout={1000}
        >
            <button
                onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="fixed bottom-8 right-8"
            >
                <ArrowSquareUp size={48} />
            </button>
        </CSSTransition>
    );
};

export default BackToTop;
