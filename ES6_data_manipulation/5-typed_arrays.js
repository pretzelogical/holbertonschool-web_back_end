export default function createInt8TypedArray(length, position, value) {
  if (position > length - 1) {
    throw new Error('Position outside range');
  }
  const view = new DataView(new Int8Array(length).buffer);
  view.setInt8(position, value);
  return view;
}
