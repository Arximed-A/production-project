import classnames from "*.scss";

type Mods = Record<string, boolean | string>


export function classNames(cls: string, mods: Mods, additional: string[]): string {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([classnames, value]) => Boolean(value))
      .map(([classname]) => classname)
  ]
    .join(' ');
}

