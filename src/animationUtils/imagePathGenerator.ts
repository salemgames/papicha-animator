interface imagePathGeneratorI {
  texturePath: string;
  frameNumber: number;
  fileFormatType: string;
  animatedTexture: boolean
}

export const imagePathGenerator = ({
  texturePath,
  frameNumber,
  fileFormatType,
  animatedTexture
}: imagePathGeneratorI) => {
  return animatedTexture 
    ? `${texturePath}${frameNumber}.${fileFormatType}`
    : `${texturePath}.${fileFormatType}`;
};
