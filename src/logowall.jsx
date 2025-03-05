import { useState } from "react";
import "./LogoWall.css";

function LogoWall({
    items = [skills],
    direction = "horizontal",
    pauseOnHover = false,
    size = "clamp(8rem, 1rem + 30vmin, 25rem)",
    duration = "60s",
    textColor = "black",
    bgAccentColor = "black",
}) {
    const [isPaused, setIsPaused] = useState(false);
    const wrapperClass = [
        "logoWall-wrapper",
        direction === "vertical" && "wrapper--vertical"
    ]
        .filter(Boolean)
        .join(" ");

    const marqueeClass = [
        "marquee",
        direction === "vertical" && "marquee--vertical",
        isPaused && "paused"
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <article
            className={wrapperClass}
            style={{
                "--size": size,
                "--duration": duration,
                "--color-text": textColor,
                backgroundColor: "transparent",
                "--color-bg-accent": bgAccentColor
            }}
        >

            <div
                className={`${marqueeClass} marquee--reverse`}
                onMouseEnter={() => pauseOnHover && setIsPaused(true)}
                onMouseLeave={() => pauseOnHover && setIsPaused(false)}
            >
                <div className="marquee__group">
                    {items.map((item, idx) => (
                        <span key={`rev-${idx}`}>
                            <img src={item.image} alt={item.altText} style={{ backgroundColor: "transparent" }} />
                            <h4>{item.title}</h4>
                        </span>
                    ))}
                </div>
                <div className="marquee__group" aria-hidden="true">
                    {items.map((item, idx) => (
                        <span key={`dup2-${idx}`}>
                            <img src={item.image} alt={item.altText} style={{ backgroundColor: "transparent" }} />
                            <h4>{item.title}</h4>
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
}

export default LogoWall;