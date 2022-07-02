import { imagePathGenerator } from "./imagePathGenerator";

export type ImageContainer = [
  { name: string; image: HTMLImageElement[]; imageURLArrayContainer: string[] }
];
let imagesObjectArray: HTMLImageElement[] = [];
let imageUrlsArray: string[] = [];
let loadingImageCounter: number = 0;
interface SpriteLoaderI {
  entityName: string;
  animatedTexture: boolean;
  numberOfframes: number;
  texturePath: string[];
  entityIndex: number;
  imageContainerProps: ImageContainer[];
}

export function spriteLoader({
  entityName,
  numberOfframes,
  texturePath,
  entityIndex,
  imageContainerProps,
  animatedTexture,
}: SpriteLoaderI) {
  imagesObjectArray = [];
  imageUrlsArray = [];
  for (let t: number = 0; t < texturePath.length; t++) {
    for (let i: number = 0; i < numberOfframes; i++) {
      imageUrlsArray.push(
        imagePathGenerator({
          texturePath: texturePath[t],
          frameNumber: i,
          fileFormatType: "png",
          animatedTexture: animatedTexture,
        })
      );
    }
  }
  // console.log("imageUrlsArray", imageUrlsArray);
  const incrementModulePattern = (function () {
    let counter = 0;
    return {
      incrementCounter: function () {
        counter++;
        return counter;
      },
    };
  })();

  for (let i = 0; i < imageUrlsArray.length; i++) {
    let img = new Image();
    imagesObjectArray.push(img);
    img.onload = () => {
      incrementModulePattern.incrementCounter();
    };
    loadingImageCounter = incrementModulePattern.incrementCounter();
    img.crossOrigin = "anonymous";
    img.src = imageUrlsArray[i];
  }

  imageContainerProps.push([
    {
      name: entityName,
      image: imagesObjectArray,
      imageURLArrayContainer: imageUrlsArray,
    },
  ]);
  const filteredArrayOfImagfeByEntityName: ImageContainer[] =
    imageContainerProps.filter((cont) =>
      cont.filter((cont) => cont.name.includes(entityName))
    );

  const checkLenghtOfarrayByElementIndex =
    filteredArrayOfImagfeByEntityName[entityIndex].length;

  return loadingImageCounter >= checkLenghtOfarrayByElementIndex ? 1 : 0;
}
