import type { IconProps } from '../../../icons/icon.props';

export interface AccordionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  label: React.ReactNode;
  expanded?: boolean;
  onChange?: (value: boolean) => void;
  iconProps?: IconProps;
}
