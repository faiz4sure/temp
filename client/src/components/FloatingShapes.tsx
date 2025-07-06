const FloatingShapes = () => {
  const shapes = [
    { top: "10%", left: "10%", delay: "0s", size: "w-24 h-24" },
    { top: "20%", right: "10%", delay: "2s", size: "w-32 h-32" },
    { bottom: "10%", left: "20%", delay: "4s", size: "w-20 h-20" },
    { bottom: "20%", right: "20%", delay: "6s", size: "w-28 h-28" },
    { top: "50%", left: "5%", delay: "1s", size: "w-16 h-16" },
    { top: "60%", right: "5%", delay: "3s", size: "w-24 h-24" },
  ];

  return (
    <>
      {shapes.map((shape, index) => (
        <div
          key={index}
          className={`floating-shapes ${shape.size}`}
          style={{
            top: shape.top,
            left: shape.left,
            right: shape.right,
            bottom: shape.bottom,
            animationDelay: shape.delay,
          }}
        />
      ))}
    </>
  );
};

export default FloatingShapes;
