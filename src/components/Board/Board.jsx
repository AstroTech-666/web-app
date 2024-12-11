import { Html, useGLTF } from "@react-three/drei";
import { editable as e } from "@theatre/r3f";

function Board(props) {
  const boardModel = useGLTF("/models/board/board.glb");

  return (
    <e.group theatreKey="board">
      <primitive
        object={boardModel.scene}
        position={[-12.5, -0.05, -8.2]}
        scale={7}
        rotation={[0, 0.95, 0]}
      >
        <Html
          transform
          distanceFactor={0.1}
          position-x={-0.002}
          position-y={0.01}
          position-z={-0.028}
          rotation-y={Math.PI}
        >
          <div className="board">
            <p className="board-title">Features</p>
            <ul className="board-list">
              <li>Carbon Footprint Calculator</li>
              <li>Energy Consumption Tracker</li>
              <li>Water Usage Calculator</li>
              <li>Waste Management Guide</li>
              <li>Air Quality Protection</li>
              <li>Green Path Chat Bot</li>
              <li>Product Finder</li>
              <li>Green Path Academy</li>
              <li>Personal Goal Setting</li>
              <li>Quizzes</li>
            </ul>
          </div>
        </Html>
      </primitive>
    </e.group>
  );
}

export default Board;
