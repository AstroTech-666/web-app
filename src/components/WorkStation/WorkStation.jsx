import React, { useState, useEffect, useRef } from "react";
import { Html, useGLTF } from "@react-three/drei";
import { MdOutlineOpenInNew } from "react-icons/md";
import { editable as e } from "@theatre/r3f";

export function WorkStation() {
  const [htmlVisible, setHtmlVisible] = useState(false);

  // Render the Html element
  const renderHtml = () => {
    return (
      <Html
        transform
        wrapperClass="browser"
        distanceFactor={0.97}
        position={[0.025, 0.85, -0.65]}
        occlude={true}
      >
        <div className="browser-tab">
          <button
            onClick={() => handleTabClick(1)}
            className={activeTab === 1 ? "active" : ""}
          >
            Tree
            <a target="_blank" href="https://tree-nation.com/">
              <MdOutlineOpenInNew />
            </a>
          </button>
          <button
            onClick={() => handleTabClick(2)}
            className={activeTab === 2 ? "active" : ""}
          >
            NGS
            <a target="_blank" href="https://www.nationalgeographic.com">
              <MdOutlineOpenInNew />
            </a>
          </button>
          <button
            onClick={() => handleTabClick(3)}
            className={activeTab === 3 ? "active" : ""}
          >
            Nature
            <a target="_blank" href="https://www.youthify.earth/">
              <MdOutlineOpenInNew />
            </a>
          </button>
        </div>
        <iframe title={`project ${activeTab}`} src={getIframeSource()} />
      </Html>
    );
  };

  // Import the 3D models for the table, chair, and laptop
  const tableModel = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/table-wood/model.gltf"
  );
  const chairModel = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/bench-2/model.gltf"
  );
  const { nodes, materials } = useGLTF("./models/laptop/laptop.glb");

  // Function to handle tab clicks and update the activeTab state
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  // Function to get the iframe source URL based on the active tab
  const getIframeSource = () => {
    switch (activeTab) {
      case 1:
        return "https://tree-nation.com/";
      case 2:
        return "https://www.nationalgeographic.com";
      case 3:
        return "https://www.youthify.earth/";
      default:
        return "https://tree-nation.com/";
    }
  };

  const screenRef = useRef();
  const [theatreObject, setTheatreObject] = useState(null);

  useEffect(() => {
    if (!theatreObject) return;
    const unsubscribe = theatreObject.onValuesChange((newValues) => {
      if (newValues.foo > 0.79265 && newValues.foo < 0.865) {
        setHtmlVisible(true);
      } else {
        setHtmlVisible(false);
      }
    });

    return unsubscribe;
  }, [theatreObject]);

  return (
    <group position={[1, -0.7, 2]} rotation={[0, -Math.PI + 0.8, 0]}>
      <primitive object={tableModel.scene} />
      <primitive
        object={chairModel.scene}
        position={[-0.2, 0, 1.2]}
        scale={"0.7"}
      />
      <group position={[0, 0.75, 0.3]} scale={0.3}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh485226736.geometry}
          material={materials.mat16}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh485226736_1.geometry}
          material={materials.mat23}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh485226736_2.geometry}
          material={materials.mat17}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh485226736_3.geometry}
          material={materials.mat15}
        />
        <e.group theatreKey="lid">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh256948792.geometry}
            material={materials.mat16}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh256948792_1.geometry}
            material={materials.mat23}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh256948792_2.geometry}
            material={materials.mat17}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh256948792_3.geometry}
            material={materials.mat25}
          />
        </e.group>
        <e.group
          theatreKey="screen"
          ref={screenRef}
          objRef={setTheatreObject}
          additionalProps={{
            foo: 0,
          }}
        >
          {htmlVisible && renderHtml()}
        </e.group>
      </group>
    </group>
  );
}