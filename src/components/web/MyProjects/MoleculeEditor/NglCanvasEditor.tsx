import React, { useCallback, useEffect } from "react";
import * as NGL from "ngl";



import { useNGLStore } from "./store/canvasStore";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import Image from "next/image";

function MainNglCanvas() {
  const stage = useNGLStore((state: any) => state.stage);
  const setRefresh = useNGLStore((state: any) => state.setRefresh);
  const addStage = useNGLStore((state: any) => state.addStage);
  const StageElementRef = useCallback((e: any) => {
    if (e) {
      const currentStage = new NGL.Stage(e);
      currentStage?.viewer.setBackground("gray");
      addStage(currentStage);
    }
  }, []);

  useEffect(() => {
    stage
      ?.loadFile("http://files.rcsb.org/download/7aad.pdb")
      .then((component: any) => {
        component.addRepresentation("cartoon", {
          color: "atomindex",
          sele: "polymer",
        });
        component.addRepresentation("ball+stick", { sele: "water" });
        component.addRepresentation("ball+stick", { sele: "ion" });
        component.addRepresentation("ball+stick", { sele: "ligand" });


        stage?.autoView(500);
        stage?.setSpin(true);
        console.log(stage)


        stage?.viewer.setBackground("white");
        setRefresh();
      });
  }, [stage]);

  useEffect(() => {
    return (): void => {
      if (stage) {
        stage.dispose();
      }
    };
  }, [stage]);

  return (
  
   <div className="w-full h-[45vh]  flex relative">
      <div ref={StageElementRef} className="h-full w-full" />

      
    </div>
 
  );
}

export default MainNglCanvas;