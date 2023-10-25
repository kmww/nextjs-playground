const isDragEvent = (value: any): value is React.DragEvent => {
  return !!value.dataTransfer;
};
