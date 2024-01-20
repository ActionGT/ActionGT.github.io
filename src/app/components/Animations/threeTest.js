// ThreeScene.js
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Space from './space/scene.gltf';
import { useGLTF } from '@react-three/drei'




export default function  threeTest(){
  //soulless
  
  const Space3D = useMemo(() =>useGLTF(Space,[]));
  //const soulless = useMemo(() =>useGLTF('/img/soulless/scene.gltf'),[]);
  //const alien = useMemo(() =>useGLTF('/img/xeno_raven/scene.gltf'),[]);
  //const spaceInvaders = useMemo(() =>useGLTF('/space_invaders_remake/scene.gltf'),[]);
  //const react = useMemo(() =>useGLTF('img/reactLogo/scene.gltf'),[]);
  
  const animations = useAnimations(react.animations, react.scene);

  useEffect(() => {
     actionName.forEach((actionName) => {
          const action= animations.actions[actionName];
          action.play();
     })
  },[animations])
      
  
  return (
      <mesh>
          <primitive object={Space3D.scene}
                     rotation={[0, 0, 0]}
                     scale={0.65}
          
          />
      </mesh>
  );
};

