import { BuildingId, Lesson } from "@/types";
import { homeLesson } from "./home";
import { supermarketLesson } from "./supermarket";
import { bakeryLesson } from "./bakery";
import { cafeLesson } from "./cafe";
import { parkLesson } from "./park";
import { schoolLesson } from "./school";
import { bankLesson } from "./bank";
import { postOfficeLesson } from "./post-office";
import { trainStationLesson } from "./train-station";
import { hospitalLesson } from "./hospital";
import { policeLesson } from "./police";
import { rathausLesson } from "./rathaus";
import { apartmentLesson } from "./apartment";
import { cinemaLesson } from "./cinema";
import { cityCenterLesson } from "./city-center";

export const lessons: Record<BuildingId, Lesson> = {
  home: homeLesson,
  supermarket: supermarketLesson,
  bakery: bakeryLesson,
  cafe: cafeLesson,
  park: parkLesson,
  school: schoolLesson,
  bank: bankLesson,
  "post-office": postOfficeLesson,
  "train-station": trainStationLesson,
  hospital: hospitalLesson,
  police: policeLesson,
  rathaus: rathausLesson,
  apartment: apartmentLesson,
  cinema: cinemaLesson,
  "city-center": cityCenterLesson,
};

export function getLesson(buildingId: string): Lesson | undefined {
  return lessons[buildingId as BuildingId];
}
