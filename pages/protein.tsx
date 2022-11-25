
import { Box } from '@chakra-ui/react'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useEffect } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function Protein() {

    const [scene,setScene]:any = React.useState()

    useEffect(() => {
        const loader = new GLTFLoader()

        loader.load("./final02.gltf",(model) => {
            const scene  = model.scene
            
            console.log(scene);
            
            setScene(scene)
        })
    },[])

  return (
   <Box display={"flex"} justifyContent="center" alignItems={"center"} style={{height:"90vh",width:"90vw"}}>
    {/* <Canvas>
        <OrbitControls />
        <ambientLight intensity={1}/>
        <mesh>
            <primitive object={scene} />
            <meshBasicMaterial color={"white"}/>
        </mesh>
    </Canvas> */}
   </Box>
  )
}

export default Protein


// import { Box, Heading } from '@chakra-ui/react'
// import React, { useEffect, useState } from 'react'
// import {Canvas,useLoader} from "@react-three/fiber"
// import {PDBLoader} from "three/examples/jsm/loaders/PDBLoader"
// // import PDB7AAD from "../public/7aad.pdb"
// function Protein() {


//     const [geometryAtoms,setGeometryAtoms]:any = useState()
//     const [geometryBonds,setGeometryBonds]:any = useState()
//     const [pdbJson,setPdbJson]:any = useState()

//     useEffect(() => {
//         // const {} = useLoader(PDBLoader,PDB7AAD)

//         const loader = new PDBLoader()

//         // loader.load("https://www.ebi.ac.uk/pdbe/api/pdb/entry/molecules/7AAD",(pdb) => {
//         loader.load("./7aad.pdb",(pdb) => {
//             // console.log(pdb);

//             let geometryatoms = pdb.geometryAtoms
//             let geometryBonds = pdb.geometryBonds

//             setGeometryAtoms(geometryatoms)
//             setGeometryBonds(geometryBonds)
//             setPdbJson(pdb.json)
//             // console.log(geometryAtoms,geometryBonds);
//             console.log( 'This molecule has ' + pdbJson.atoms.length + ' atoms' );
//         })

//     },[])

//   return (
//     <Box>
//         <Heading>Protein length {pdbJson.atoms.length}</Heading>
//             <Canvas>
//                 <mesh><primitive object={geometryAtoms}/></mesh>
//             </Canvas>
//     </Box>

//   )
// }

// export default Protein