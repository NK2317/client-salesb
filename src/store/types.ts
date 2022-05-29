export interface EventTargetValuable extends EventTarget {
  value?: any;
}
export interface EventWithValue extends Event {
  target: EventTargetValuable;
};
