import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
function Protein() {
  return (
    <Box>
      <Heading>Protein Ligand Intrections ❤</Heading>
      <Box display={"flex"}>
      <Text as="strong">guide: </Text>
      <Text pl="2" color="green.400">Ankita Tarapra</Text>

      </Box>
      <Box>
        <Heading my="3" fontSize={"lg"}>
          Hespertinin
        </Heading>
        <Image
          src={"/images/proteinImages/hespertinin.png"}
          layout="responsive"
          width={"2"}
          height={"1"}
        />
        <Text my="3" fontSize={"lg"} color={"green.400"}>
          Hespertinin intrection with PAPR1 Protein PDBID:7AAD
        </Text>
      </Box>
      <Box>
        <Heading my="3" fontSize={"lg"}>
          Quecrtin
        </Heading>
        <Image
          src={"/images/proteinImages/quercerin.png"}
          layout="responsive"
          width={"2"}
          height={"1"}
        />
        <Text my="3" fontSize={"lg"} color={"green.400"}>
          Quecertin intrection with PAPR1 Protein PDBID:7AAD
        </Text>
      </Box>
      <Box>
        <Heading my="3" fontSize={"lg"}>
          Olaparib
        </Heading>
        <Image
          src={"/images/proteinImages/olaparib.png"}
          layout="responsive"
          width={"2"}
          height={"1"}
        />
        <Text my="3" fontSize={"lg"} color={"green.400"}>
          Hespertinin intrection with PAPR1 Protein PDBID:7AAD
        </Text>
      </Box>
      <Box>
        <Heading my="3" fontSize={"lg"}>
          Icarniin
        </Heading>
        <Image
          src={"/images/proteinImages/icarniin.png"}
          layout="responsive"
          width={"2"}
          height={"1"}
        />
        <Text my="3" fontSize={"lg"} color={"green.400"}>
          Icarniin intrection with PAPR1 Protein PDBID:7AAD
        </Text>
      </Box>
    </Box>
  );
}

export default Protein;

// import { Box, Heading } from '@chakra-ui/react'
// import { OrbitControls } from '@react-three/drei'
// import { Canvas } from '@react-three/fiber'
// import React, { useEffect } from 'react'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

// function Protein() {

//     const [scene,setScene]:any = React.useState()

//     useEffect(() => {
//         const loader = new GLTFLoader()

//         loader.load("./final02.gltf",(model) => {
//             const scene  = model.scene

//             console.log(scene);

//             setScene(scene)
//         })
//     },[])

//   return (
//    <Box display={"flex"} flexDir="column" justifyContent="center" alignItems={"center"} style={{height:"90vh",width:"90vw"}}>
//     <Heading m="3">Protein 7AAD</Heading>
//     <Canvas>
//         <OrbitControls />
//         <ambientLight intensity={1.2}/>
//         <mesh>
//             <primitive object={scene} />
//             {/* <meshBasicMaterial color={"white"}/> */}
//         </mesh>
//     </Canvas>
//    </Box>
//   )
// }

// export default Protein

// // import { Box, Heading } from '@chakra-ui/react'
// // import React, { useEffect, useState } from 'react'
// // import {Canvas,useLoader} from "@react-three/fiber"
// // import {PDBLoader} from "three/examples/jsm/loaders/PDBLoader"
// // // import PDB7AAD from "../public/7aad.pdb"
// // function Protein() {

// //     const [geometryAtoms,setGeometryAtoms]:any = useState()
// //     const [geometryBonds,setGeometryBonds]:any = useState()
// //     const [pdbJson,setPdbJson]:any = useState()

// //     useEffect(() => {
// //         // const {} = useLoader(PDBLoader,PDB7AAD)

// //         const loader = new PDBLoader()

// //         // loader.load("https://www.ebi.ac.uk/pdbe/api/pdb/entry/molecules/7AAD",(pdb) => {
// //         loader.load("./7aad.pdb",(pdb) => {
// //             // console.log(pdb);

// //             let geometryatoms = pdb.geometryAtoms
// //             let geometryBonds = pdb.geometryBonds

// //             setGeometryAtoms(geometryatoms)
// //             setGeometryBonds(geometryBonds)
// //             setPdbJson(pdb.json)
// //             // console.log(geometryAtoms,geometryBonds);
// //             console.log( 'This molecule has ' + pdbJson.atoms.length + ' atoms' );
// //         })

// //     },[])

// //   return (
// //     <Box>
// //         <Heading>Protein length {pdbJson.atoms.length}</Heading>
// //             <Canvas>
// //                 <mesh><primitive object={geometryAtoms}/></mesh>
// //             </Canvas>
// //     </Box>

// //   )
// // }

// // export default Protein
