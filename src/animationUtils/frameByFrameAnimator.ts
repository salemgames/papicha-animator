export const frameByFrameAnimator = (
  deltaTimeValue: number,
  totalImagesNumber: number,
  currentFrameNumber: number,
): number => {
  if (currentFrameNumber > totalImagesNumber - 1) currentFrameNumber = 0;
  if (currentFrameNumber < totalImagesNumber)
    currentFrameNumber += (deltaTimeValue * 0.02) % 100;

  return currentFrameNumber;
};
