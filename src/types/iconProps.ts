export interface Icon {
  width: string;
  height: string;
  color?: string;
}

export interface IconWithClassName extends Icon {
  className: string;
  ariaLabelContent?:string;
}
