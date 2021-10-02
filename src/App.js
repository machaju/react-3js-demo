import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";


class App extends Component {
  componentDidMount() {
    // === THREE.JS CODE START ===

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
  camera.position.set( 0, 0, 50 );
  camera.lookAt( 0, 0, 0 );


  const scene = new THREE.Scene();

  //create a blue LineBasicMaterial
  const material = new THREE.LineBasicMaterial( { color: 0x00ff00 } );


  const points = [];
  points.push( new THREE.Vector3( - 10, 0, 0 ) );
  points.push( new THREE.Vector3( 0, 10, 0 ) );
  points.push( new THREE.Vector3( 10, 0, 0 ) );

  const geometry = new THREE.BufferGeometry().setFromPoints( points );


  const line = new THREE.Line( geometry, material );


  scene.add( line );
  renderer.render( scene, camera );

  // function animate(){
  //   requestAnimationFrame( animate );

  //   // required if controls.enableDamping or controls.autoRotate are set to true
  //   controls.update();

  //   renderer.render( scene, camera );
  // }

  };

  // === THREE.JS EXAMPLE CODE END ===

  render() {
    return (
      <div />
    )
  }
}

export default App;


