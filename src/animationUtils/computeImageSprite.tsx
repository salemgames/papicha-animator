import { ImageContainer } from "./spriteLoader";

type AnimationStateT = "left" | "right" | "stand";

interface ComputeImageSpriteI {
  isAnimated: boolean;
  animatedtexture: boolean;
  animationState?: AnimationStateT;
  imageContainer: ImageContainer[];
  currentAnimationFrame: number;
  entityName: string;
}

interface filterTargetedArrayOfImagesI {
  imageContainer: ImageContainer[];
  name: string;
}

const filterTargetedArrayOfImages = ({
  imageContainer,
  name,
}: filterTargetedArrayOfImagesI): ImageContainer[] => {
  return imageContainer.filter((containerOfImage) =>
    containerOfImage.some((containerUnit) => containerUnit.name.includes(name))
  );
};

export const computedImageSprite = ({
  isAnimated,
  animationState,
  imageContainer,
  currentAnimationFrame,
  entityName,
}: ComputeImageSpriteI) => {
  let imagesToRender: HTMLImageElement[] = [];

  let buildingsImages = filterTargetedArrayOfImages({
    name: entityName,
    imageContainer: imageContainer,
  })[0][0].image.filter((fil) => fil.currentSrc.includes("building"));

  let horizonImages = filterTargetedArrayOfImages({
    name: entityName,
    imageContainer: imageContainer,
  })[0][0].image.filter((fil) => fil.currentSrc.includes("horizon"));

  let lightImages = filterTargetedArrayOfImages({
    name: entityName,
    imageContainer: imageContainer,
  })[0][0].image.filter((fil) => fil.currentSrc.includes("sun_cast_0"));

  let standImages = filterTargetedArrayOfImages({
    name: entityName,
    imageContainer: imageContainer,
  })[0][0].image.filter((fil) => fil.currentSrc.includes("stand"));

  let walkImages = filterTargetedArrayOfImages({
    name: entityName,
    imageContainer: imageContainer,
  })[0][0].image.filter((fil) => fil.currentSrc.includes("walk"));

  let defaultImages = filterTargetedArrayOfImages({
    name: entityName,
    imageContainer: imageContainer,
  })[0][0].image[0];

  if (entityName === "player") {
    if (animationState === "right" || animationState === "left") {
      imagesToRender = walkImages;
    }

    if (animationState === "stand") {
      imagesToRender = standImages;
    }
  }

  if (entityName.includes("building")) {
    imagesToRender = buildingsImages;
  }

  if (entityName.includes("horizon")) {
    imagesToRender = horizonImages;
  }

  if (entityName.includes("castLight")) {
    imagesToRender = lightImages;
  }

  if (isAnimated) {
    if (!entityName.includes("horizon")) {
      return imagesToRender[Math.round(currentAnimationFrame)];
    }
    if (entityName.includes("horizon")) return imagesToRender[0];
  }
  if (!isAnimated) {
    return filterTargetedArrayOfImages({
      name: entityName,
      imageContainer: imageContainer,
    })[0][0].image[0];
  }

  return defaultImages;
};
