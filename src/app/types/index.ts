import { ReactNode } from "react";
import { IconType } from "react-icons";
import { LucideIcon } from "lucide-react";

export interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "accent";
  size?: "small" | "medium" | "large";
}

export interface EditButtonProps {
  onClick: () => void;
}

export interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

export interface Photo {
  url: string;
  text?: string;
}

export interface PhotoCardProps {
  photo: Photo | null;
}

export interface ButtonGroupProps {
  title: string;
  buttons: string[];
}

export interface EditableTitleProps {
  initialTitle: string;
  onSave: (newTitle: string) => void;
}

export interface Tab {
  id: string;
  icon?: React.ReactNode;
  label?: string;
}

export interface TabBarProps {
  tabs: Tab[];
  activeTab: string;
  setActiveTab: (tabId: string) => void;
}

export interface SidebarItemProps {
  icon: IconType;
  label: string;
  href?: string;
  count?: number;
  showEditIcon?: boolean;
  isActive?: boolean;
  onClick?: () => void;
}

export interface IconButtonProps {
  Icon: LucideIcon;
  label?: string;
  bgColor?: string;
}

export interface SidebarSectionProps {
  title: string;
  icon?: IconType;
  items: {
    icon: IconType;
    label: string;
    count?: number;
    showEditIcon?: boolean;
  }[];
  onItemClick?: (label: string) => void;
  activeItem?: string | null;
}

export interface SizeSelectorModalProps {
  onClose: () => void;
}

export interface SizeSelectorModalRef {
  openModal: () => void;
}

export interface SizeCardProps {
  size: string | number;
  isPopular: boolean;
}
