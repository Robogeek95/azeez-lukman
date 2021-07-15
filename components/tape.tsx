export interface TapeProps {
  direction: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  size?: number;
}

const positionMap = {
  "top-right": {
    rotation: "132deg",
    top: "-55px",
    bottom: "",
    right: "10px",
    left: "",
  },
  "top-left": {
    rotation: "222deg",
    top: "-55px",
    bottom: "",
    right: "",
    left: "10px",
  },
  "bottom-right": {
    rotation: "222deg",
    top: "",
    bottom: "-55px",
    right: "10px",
    left: "",
  },
  "bottom-left": {
    rotation: "132deg",
    top: "",
    bottom: "-55px",
    right: "",
    left: "10px",
  },
};

function Tape({ direction, size = 32 }: TapeProps) {
  return (
    <div
      style={{
        height: "180px",
        width: "45px",
        background: "#e2e2e2",
        border: "3px dotted #6b7280",
        position: "absolute",
        transform: `rotate(${positionMap[direction].rotation})`,
        top: positionMap[direction].top,
        right: positionMap[direction].right,
        bottom: positionMap[direction].bottom,
        left: positionMap[direction].left,
      }}
    ></div>
  );
}

export { Tape };
