import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const Container = styled.div`
  display: flex;
  justify-content: center;
`

function FlamingoModel() {
  const containerRef = useRef(null);

  useEffect(() => {
    let camera, scene, renderer;
    const mixers = [];

    const clock = new THREE.Clock();

    const container = containerRef.current;

    camera = new THREE.PerspectiveCamera(
      30,
      window.innerWidth / window.innerHeight,
      1,
      5000
    );
    camera.position.set(0, 0, 120);

    scene = new THREE.Scene();
    scene.fog = new THREE.Fog(scene.background, 1, 5000);
    scene.background = new THREE.Color('#242424');

    // LIGHTS

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6);
    hemiLight.color.setHSL(0.6, 1, 0.6);
    hemiLight.groundColor.setHSL(0.095, 1, 0.75);
    hemiLight.position.set(0, 50, 0);
    scene.add(hemiLight);

    //

    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.color.setHSL(0.1, 1, 0.95);
    dirLight.position.set(-1, 1.75, 1);
    dirLight.position.multiplyScalar(30);
    scene.add(dirLight);

    dirLight.castShadow = true;

    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;

    const d = 50;

    dirLight.shadow.camera.left = -d;
    dirLight.shadow.camera.right = d;
    dirLight.shadow.camera.top = d;
    dirLight.shadow.camera.bottom = -d;

    dirLight.shadow.camera.far = 3500;
    dirLight.shadow.bias = -0.0001;

    // MODEL

    const loader = new GLTFLoader();

    loader.load("Flamingo.glb", function (gltf) {
      const mesh = gltf.scene.children[0];

      const s = 0.35;
      mesh.scale.set(s, s, s);
      mesh.position.y = -1;
      mesh.rotation.y = -1;

      mesh.castShadow = true;
      mesh.receiveShadow = true;

      scene.add(mesh);

      const mixer = new THREE.AnimationMixer(mesh);
      mixer.clipAction(gltf.animations[0]).setDuration(1).play();
      mixers.push(mixer);
    });

    // RENDERER

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth / 3, window.innerHeight / 3);
    container.appendChild(renderer.domElement);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.shadowMap.enabled = true;

    //

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth , window.innerHeight );
    }

    window.addEventListener("resize", onWindowResize);

    function animate() {
      requestAnimationFrame(animate);
      render();
    }

    function render() {
      const delta = clock.getDelta();

      for (let i = 0; i < mixers.length; i++) {
        mixers[i].update(delta);
      }

      renderer.render(scene, camera);
    }

    animate();

    return () => {
      container.removeChild(renderer.domElement);

      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return (
    <Container>
      <div ref={containerRef} />
    </Container>
  )
}

export default FlamingoModel;
