import { useEffect, useRef, useState } from "react";

const ProjectCard = ({ children, delay = 0 }) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
  }, []);

  return (
    <div
      ref={ref}
      className={`${visible ? "fade-up" : ""}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};
export default ProjectCard;