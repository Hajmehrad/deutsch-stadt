"use client";

import { useState } from "react";
import { CityCanvas } from "@/components/city/CityCanvas";
import { CityHUD } from "@/components/city/CityHUD";
import { BuildingPreviewSheet } from "@/components/city/BuildingPreviewSheet";
import { useAppStore } from "@/store/useAppStore";
import { getBuilding } from "@/data/buildings";
import { Building } from "@/types";

export default function CityPage() {
  const [selected, setSelected] = useState<Building | null>(null);
  const { unlockedBuildings, completedBuildings } = useAppStore();

  const requiredBuilding = selected?.unlockRequires
    ? getBuilding(selected.unlockRequires)
    : undefined;

  return (
    <main className="relative">
      <CityHUD />
      <CityCanvas onSelectBuilding={setSelected} />
      <BuildingPreviewSheet
        building={selected}
        unlocked={selected ? unlockedBuildings.includes(selected.id) : false}
        completed={selected ? completedBuildings.includes(selected.id) : false}
        requiredName={requiredBuilding?.name}
        onClose={() => setSelected(null)}
      />
    </main>
  );
}
